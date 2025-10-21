import "./globals.css";
import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./styles/header.module.css";
import Logo from "./components/logo";

export const metadata = {
  title: "Valtorian test task",
  description: "Next.js + Tailwind + App Router project",
};

const isActive = true;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header
          className={clsx(styles.header, "bg-white shadow p-4 flex gap-4")}
        >
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.buttonsContainer}>
            <Link
              href="/"
              className={clsx(
                "px-4 py-2 rounded text-sm font-medium transition",
                isActive
                  ? "bg-gray-800 text-white border border-white"
                  : "text-blue-600 hover:underline"
              )}
            >
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              How it works
            </Link>
            <Link
              href="/case_studies"
              className="text-blue-600 hover:underline"
            >
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
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
