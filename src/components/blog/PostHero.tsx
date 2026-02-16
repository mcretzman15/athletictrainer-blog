import Image from "next/image";
import { ImageCredit } from "./ImageCredit";

interface PostHeroProps {
  title: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  category: string;
  date: string;
  readingTime?: number;
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
    <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-army-dark to-army-green camo-texture">
      {featuredImage && (
        <>
          <Image
            src={featuredImage}
            alt={featuredImageAlt || title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3319]/85 to-[#4B5320]/70" />
        </>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-container mx-auto">
          <div className="mb-4">
            <span className="bg-army-tan text-army-dark px-4 py-1.5 rounded-full text-sm font-medium inline-block shadow-sm">
              {category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            {title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/75">
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime || 5} min read</span>
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
