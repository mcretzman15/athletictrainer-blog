import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "PSI Athletic Trainer Blog",
  description: "Career insights and resources for athletic trainers exploring military healthcare opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
