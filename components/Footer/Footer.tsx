import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const footerLinks = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Responsibilities",
    href: "/responsibility",
  },
  {
    label: "Our Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const legalLinks = [
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.companyInfo}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/footer-logo.png"
                alt="Study Abroad"
                width={210}
                height={70}
              />
            </Link>
            <address>
              <p>Concord Royal Court (3rd floor)</p>
              <p>Dhanmondi, Dhaka 1209, Bangladesh.</p>
            </address>
          </div>

          <nav className={styles.linksColumn} aria-label="Company Links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className={styles.linksColumn} aria-label="Company Links">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.socialLinks}>
            <Link href="#" aria-label="Facebook">
              <svg viewBox="0 0 18 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.66.34-1 1-1Z" />
              </svg>
            </Link>

            <Link href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.4l-5.01-6.54L6.07 22H3l7.24-8.28L2.8 2h6.56l4.53 5.99L18.9 2Zm-1.13 17.86h1.72L8.3 4.05H6.45l11.32 15.81Z" />
              </svg>
            </Link>

            <Link href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </Link>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2020 Executive Trade International.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
