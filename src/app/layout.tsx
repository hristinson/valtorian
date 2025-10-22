import "./globals.css";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles/header.module.css";
import Logo from "./components/Logo";
import HeaderButton from "./components/HeaderButton";
import GradientButton from "./components/GradientButton";

export const metadata = {
  title: "Valtorian test task",
  description: "Next.js + Tailwind + App Router project",
};

const isActive = false;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className={clsx(styles.header, "bg-white shadow flex gap-4")}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.buttonsContainer}>
            <HeaderButton text="Home" href="/" />
            <HeaderButton text="How it works" href="/how_it_works" />
            <HeaderButton text="Case Studies" href="/case_studies" />
            <HeaderButton text="Reviews" href="/reviews" />
            <HeaderButton text="Blog" href="/blog" />
            <HeaderButton text="Abaut" href="/abaut" />
          </div>
          <div className={styles.callContainer}>
            <GradientButton text="Book a quick call" />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
