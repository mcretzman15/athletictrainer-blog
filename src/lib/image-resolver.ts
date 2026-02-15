import { fetchUnsplashImage, trackUnsplashDownload } from "./unsplash";
import fs from "fs";
import path from "path";
import { createWriteStream } from "fs";
import { Readable } from "stream";

interface PostFrontmatter {
  slug: string;
  featuredImage: string;
  featuredImageAlt: string;
  primaryKeyword: string;
  category: string;
  tags: string[];
}

export async function resolvePostImage(post: PostFrontmatter): Promise<{
  featuredImage: string;
  featuredImageAlt: string;
  imageCredit?: string;
}> {
  // If a real image path exists and the file is present, use it
  if (
    post.featuredImage &&
    post.featuredImage !== "auto" &&
    post.featuredImage !== ""
  ) {
    const filePath = path.join(process.cwd(), "public", post.featuredImage);
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      console.log(`✅ Using existing image: ${post.featuredImage}`);
      return {
        featuredImage: post.featuredImage,
        featuredImageAlt: post.featuredImageAlt,
      };
    }
  }

  console.log(`🔍 Fetching Unsplash image for: ${post.slug}`);

  // Fetch from Unsplash
  const image = await fetchUnsplashImage(
    post.primaryKeyword,
    post.category,
    post.tags
  );

  if (image) {
    // Download and save locally for next/image optimization
    const filename = `${post.slug}-unsplash.jpg`;
    const localPath = `/images/blog/${filename}`;
    const fullPath = path.join(process.cwd(), "public", localPath);

    // Ensure directory exists
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    // Download the image
    try {
      const res = await fetch(image.url);
      if (res.ok && res.body) {
        const fileStream = createWriteStream(fullPath);
        const reader = res.body.getReader();
        const stream = new Readable({
          async read() {
            const { done, value } = await reader.read();
            if (done) {
              this.push(null);
            } else {
              this.push(Buffer.from(value));
            }
          },
        });

        await new Promise<void>((resolve, reject) => {
          stream.pipe(fileStream);
          fileStream.on("finish", () => resolve());
          fileStream.on("error", reject);
        });

        console.log(`✅ Downloaded image to: ${localPath}`);

        // Track download per Unsplash guidelines
        await trackUnsplashDownload(image.downloadUrl);

        return {
          featuredImage: localPath,
          featuredImageAlt: image.alt,
          imageCredit: image.credit,
        };
      }
    } catch (err) {
      console.error(`❌ Failed to download Unsplash image:`, err);
    }
  }

  // Ultimate fallback: use gradient background (no broken images)
  console.log(`⚠️  Using fallback (no image) for: ${post.slug}`);
  return {
    featuredImage: "",
    featuredImageAlt: post.primaryKeyword,
  };
}
