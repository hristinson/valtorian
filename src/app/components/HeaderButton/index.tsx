"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

interface HeaderButtonProps {
  text: string;
  href: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, href }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${styles.header_button} ${isActive ? styles.active : ""}`}
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      {text}
    </Link>
  );
};

export default HeaderButton;
