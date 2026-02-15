import Image from "next/image";
import { ImageCredit } from "./ImageCredit";

interface PostHeroProps {
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  date: string;
  readingTime: number;
  imageCredit?: string;
}

export default function PostHero({
  title,
  featuredImage,
  featuredImageAlt,
  category,
  date,
  readingTime,
  imageCredit,
}: PostHeroProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-primary via-[#556B47] to-[#3D4F31]">
      {featuredImage && (
        <>
          <Image
            src={featuredImage}
            alt={featuredImageAlt}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-container mx-auto">
          <div className="mb-4">
            <span className="category-pill bg-white text-primary shadow-sm">{category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-green-50">
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
          {imageCredit && (
            <div className="mt-2">
              <ImageCredit credit={imageCredit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
