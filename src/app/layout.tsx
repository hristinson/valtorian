import "./globals.css";
//import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles/main.module.css";
import Logo from "./components/Logo";
import HeaderButton from "./components/HeaderButton";
import GradientButton from "./components/GradientButton";
import Footer from "./components/Footer";

export const metadata = {
  title: "Valtorian test task",
  description: "Next.js + Tailwind + App Router project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.buttonsContainer}>
            <HeaderButton text="Home" href="/" />
            <HeaderButton text="How it works" href="/howItWorks" />
            <HeaderButton text="Case Studies" href="/caseStudies" />
            <HeaderButton text="Reviews" href="/reviews" />
            <HeaderButton text="Blog" href="/blog" />
            <HeaderButton text="Abaut" href="/abaut" />
          </div>
          <div className={styles.callContainer}>
            <GradientButton text="Book a quick call" />
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
