import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Valtorian test task",
  description: "Next.js + Tailwind + App Router project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-4 flex gap-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:underline">
            How it works
          </Link>
          <Link href="/case_studies" className="text-blue-600 hover:underline">
            Case Studies
          </Link>
          <Link href="/reviews" className="text-blue-600 hover:underline">
            Reviews
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Blog
          </Link>
          <Link href="/abaut" className="text-blue-600 hover:underline">
            Abaut
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
