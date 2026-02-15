import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function ArticleImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
}: ArticleImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-text italic text-center px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
