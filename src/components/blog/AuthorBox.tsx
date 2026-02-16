import Image from "next/image";
import { Author } from "@/lib/mdx";

interface AuthorBoxProps {
  author: Author;
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <div className="bg-parchment rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start" style={{ border: '1px solid rgba(184, 168, 138, 0.5)' }}>
      <div className="flex-shrink-0">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-olive">
          {author.photo ? (
            <Image
              src={author.photo}
              alt={author.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              {author.name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-charcoal mb-1">{author.name}</h3>
        <p className="text-sm text-sand mb-3">{author.title}</p>
        <p className="text-graphite text-sm leading-relaxed mb-4">
          {author.bio}
        </p>

        {(author.linkedin || author.twitter || author.email) && (
          <div className="flex gap-4">
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive hover:text-olive-dark transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive hover:text-olive-dark transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
