import Link from "next/link";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";

export default function ServiceCard({ title, description, image }) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.icons}
        src={image}
        width={76}
        height={0}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className={styles.card__link} href="/services" >
        Learn More
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </article>
  );
}
