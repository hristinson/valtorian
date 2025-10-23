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
      <body className="">
        <header className={clsx(styles.header)}>
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
         <footer className="">
      <div className="">
        <div className="">
          <Logo />
          <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span>
        </div>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
      </body>
    </html>
  );
}
