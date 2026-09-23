"use client";

import { useEffect, useState } from "react";
import styles from "@/components/Countries/Countries.module.scss";
import Link from "next/link";
import Image from "next/image";

let nextId = 1;

const countriesList = [
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Australia",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Canada",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Uk",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  //   next 3
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Australia",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Canada",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Uk",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  //   next 3
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Australia",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Canada",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
  {
    id: nextId++,
    image: "/images/country.png",
    title: "Study in Uk",
    subtitle:
      "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi ",
  },
];

const ITEMS_PER_SLIDE = 3;

export default function Countries() {
  countriesList.map((item) => {
    console.log(item.image);
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(countriesList.length / ITEMS_PER_SLIDE);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === totalSlides - 1 ? 0 : current + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className={styles.countries}>
      <div className="container">
        <div className={styles.countries_title}>
          <h2>countries we covered</h2>
          <p>
            Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis
            metu degendae <br /> praesidia firmissima. Torquatos nostros? quos
            tu paulo ante cum teneam sententiam, quid
          </p>
        </div>

        <div className={styles.events_slider}>
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div className={styles.slide} key={slideIndex}>
                  {countriesList
                    .slice(
                      slideIndex * ITEMS_PER_SLIDE,
                      slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE,
                    )
                    .map((item) => (
                      <div className={styles.card} key={item.id}>
                        <div className={styles.card_image}>
                          <Image
                            className={styles.imgSrc}
                            src={item.image}
                            alt={item.title}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div className={styles.card_title}>
                          <h3>{item.title}</h3>
                          <p>{item.subtitle}</p>
                        </div>
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
      </div>
    </section>
  );
}
