interface ComparisonTableProps {
  children: React.ReactNode;
}

export default function ComparisonTable({ children }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden border border-border-gray rounded-lg">
          <table className="min-w-full divide-y divide-border-gray">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

// Also export styled table components for use inside ComparisonTable
export function TableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-primary">{children}</thead>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="bg-white divide-y divide-border-gray">{children}</tbody>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
      {children}
    </th>
  );
}

export function TableCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-6 py-4 text-sm text-gray-text whitespace-normal">
      {children}
    </td>
  );
}
