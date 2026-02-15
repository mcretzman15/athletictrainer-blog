import Link from "next/link";

interface JobCTAProps {
  location?: string;
  program?: string;
}

export default function JobCTA({ location, program }: JobCTAProps) {
  let ctaText = "Explore Athletic Trainer Positions";
  
  if (location && program) {
    ctaText = `Explore ${program} positions at ${location}`;
  } else if (program) {
    ctaText = `Explore ${program} positions`;
  } else if (location) {
    ctaText = `Explore positions at ${location}`;
  }

  return (
    <div className="bg-navy text-white rounded-lg p-8 my-8 text-center">
      <h3 className="text-2xl font-bold mb-4 text-white">
        Ready to Take the Next Step?
      </h3>
      <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
        Join PSI and make a meaningful impact on military readiness while
        advancing your athletic training career.
      </p>
      <Link
        href="https://www.athletictrainerjob.com/job-description#apply-main"
        className="btn-accent inline-flex items-center gap-2"
      >
        {ctaText}
        <span className="text-lg">➜</span>
      </Link>
    </div>
  );
}
