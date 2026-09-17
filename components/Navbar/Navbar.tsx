"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
  isButton?: boolean;
};

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Our Services",
    href: "/service",
  },
  {
    label: "Responsibility",
    href: "/responsibility",
  },
  {
    label: "Country",
    href: "/country",
  },
  {
    label: "Apply",
    href: "/apply",
    isButton: true,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Study Abroad"
              width={150}
              height={50}
            />
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${pathname === link.href ? styles.active : ""} ${
                  link.href === "/Apply" ? styles.apply : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;

