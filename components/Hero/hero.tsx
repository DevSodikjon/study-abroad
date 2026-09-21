import styles from "./Hero.module.scss";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.heroContent}>
            <h1>
              We Help to <span style={{ color: "#717CFF" }}>Build</span> <br />{" "}
              Your Dream
            </h1>
            <p>
              We are always availed to consult on taking your higher <br />{" "}
              education to the next level so you can stay competitive in the
            </p>

            <Link className={styles.link_to_apply} href="/apply">
              Apply Online
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                color="black"
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

            <div className={styles.social}>
              <Image
                src="/Icons/facebook.svg"
                alt="Study Abroad"
                width={10}
                height={21}
              />
              <Image
                src="/Icons/twitter.svg"
                alt="Study Abroad"
                width={21}
                height={21}
              />
              <Image
                src="/Icons/instagram.svg"
                alt="Study Abroad"
                width={21}
                height={21}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
