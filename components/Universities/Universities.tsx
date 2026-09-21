"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Universities.module.scss";

const universities = [
  {
    name: "Macquarie University",
    image: "/images/mac.png",
  },
  {
    name: "Charles Sturt University",
    image: "/images/charles.png",
  },
  {
    name: "University of Newcastle",
    image: "/images/newcastle.png",
  },
  {
    name: "La Trobe University",
    image: "/images/la_trobe.png",
  },
  {
    name: "University of Sydney",
    image: "/images/sydney.png",
  },
  {
    name: "Monash University",
    image: "/images/monash.png",
  },
  {
    name: "University of Tashkent",
    image: "/images/melbourne.png",
  },
  {
    name: "University of Texas",
    image: "/images/queensland.png",
  },
  //   {
  //   name: "University of SIngapure",
  //   image: "/images/sydney.png",
  // },
  // {
  //   name: "Monash california",
  //   image: "/images/monash.png",
  // },
  // {
  //   name: "University of Melbourne",
  //   image: "/images/melbourne.png",
  // },
  // {
  //   name: "University of Queensland",
  //   image: "/images/queensland.png",
  // },
];

const ITEMS_PER_SLIDE = 4;

export default function Universities() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(
    universities.length / ITEMS_PER_SLIDE
  );

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === totalSlides - 1 ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className={styles.universities}>
      <div className="container">

        <div className={styles.title}>
          <h2>Featured Universities</h2>
        </div>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className={styles.slide} key={slideIndex}>
                {universities
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((university) => (
                    <div
                      className={styles.logo}
                      key={university.name}
                    >
                      <Image
                        src={university.image}
                        alt={university.name}
                        width={225}
                        height={63}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}