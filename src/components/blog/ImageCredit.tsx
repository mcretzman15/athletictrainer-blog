interface ImageCreditProps {
  credit?: string;
}

export function ImageCredit({ credit }: ImageCreditProps) {
  if (!credit) return null;

  return (
    <p className="text-xs text-gray-text mt-2 text-right italic">
      {credit}
    </p>
  );
}
