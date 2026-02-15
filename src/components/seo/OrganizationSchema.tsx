export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Planned Systems International",
    alternateName: "PSI",
    url: "https://www.athletictrainerjob.com",
    logo: "https://www.athletictrainerjob.com/psi-logo-white.webp",
    description:
      "PSI connects certified Athletic Trainers with meaningful careers in military healthcare programs including Army H2F and Marine Corps SMIP.",
    sameAs: [
      "https://www.linkedin.com/company/planned-systems-international",
      "https://www.facebook.com/PlannedSystemsInternational",
      "https://twitter.com/psi_hq",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Recruitment",
      url: "https://www.athletictrainerjob.com/job-description#apply-main",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
