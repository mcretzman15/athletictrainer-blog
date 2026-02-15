import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="bg-navy text-white py-12 my-12 rounded-lg">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to Start Your Military Healthcare Career?
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Join PSI and make a difference serving Athletic Trainers in Army H2F
          and Marine Corps SMIP programs across the United States.
        </p>
        <Link
          href="https://www.athletictrainerjob.com/job-description#apply-main"
          className="btn-accent inline-flex items-center gap-2"
        >
          Explore Opportunities
          <span className="text-lg">➜</span>
        </Link>
      </div>
    </div>
  );
}
