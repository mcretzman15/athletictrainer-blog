import Callout from "./Callout";
import FAQ, { FAQItem } from "./FAQ";
import JobCTA from "./JobCTA";
import SalaryRange from "./SalaryRange";
import LocationCard from "./LocationCard";
import ComparisonTable, {
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "./ComparisonTable";

export const MDXComponents = {
  // Custom components
  Callout,
  FAQ,
  FAQItem,
  JobCTA,
  SalaryRange,
  LocationCard,
  ComparisonTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,

  // Override default HTML elements
  h2: (props: any) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      className="text-3xl font-semibold text-navy mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      className="text-2xl font-semibold text-navy mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-semibold text-navy mt-6 mb-2" {...props} />
  ),
  p: (props: any) => <p className="mb-4 leading-body" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  a: (props: any) => (
    <a
      className="text-navy hover:text-psi-red underline font-medium transition-colors"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-navy bg-light-gray p-4 my-6 rounded-r-lg italic"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-light-gray text-navy px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-dark-text text-white p-4 rounded-lg overflow-x-auto my-6"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-border-gray border border-border-gray rounded-lg" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-4 py-3 bg-navy text-white text-left text-sm font-semibold" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-3 text-sm text-gray-text border-t border-border-gray" {...props} />
  ),
};
