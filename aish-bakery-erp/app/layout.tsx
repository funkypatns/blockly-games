import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aish Bakery ERP",
  description: "Minimal scaffolding for Aish Bakery ERP"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
