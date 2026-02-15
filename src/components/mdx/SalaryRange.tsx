interface SalaryRangeProps {
  min: number | string;
  max: number | string;
  disclaimer?: boolean | string;
}

export default function SalaryRange({
  min,
  max,
  disclaimer = true,
}: SalaryRangeProps) {
  // Convert string props to numbers if needed (MDX sometimes passes strings)
  const minNum = typeof min === 'string' ? parseInt(min, 10) : min;
  const maxNum = typeof max === 'string' ? parseInt(max, 10) : max;
  
  const formatCurrency = (amount: number) => {
    if (isNaN(amount)) {
      return '$[Error: Invalid amount]';
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-light-gray rounded-xl p-6 my-6 border-l-4 border-accent shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <svg
          className="w-8 h-8 text-accent flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <p className="text-sm font-medium text-gray-text uppercase tracking-wide">
            Salary Range
          </p>
          <p className="text-3xl font-bold text-primary">
            {formatCurrency(minNum)} - {formatCurrency(maxNum)}
          </p>
        </div>
      </div>

      {disclaimer && (
        <p className="text-xs text-gray-text mt-4 italic">
          Compensation varies by location, experience, and contract terms. Actual
          salary may differ based on specific position requirements and
          qualifications. Contact PSI for position-specific salary information.
        </p>
      )}
    </div>
  );
}
