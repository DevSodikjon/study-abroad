"use client";

import { useEffect, useState } from "react";
import styles from "@/components/Events/Events.module.scss";
import Link from "next/link";

const eventsData = [
  {
    title: "Macquarie University, Sydney, Australia",
    subtitle:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. I",
    start_time: "00 : 00 AM",
    finish_time: "2 : 00 PM",
    date: {
      day: "21",
      month: "Dec",
    },
  },
  {
    title: "Federation University, Australia",
    subtitle:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. I",
    start_time: "00 : 00 AM",
    finish_time: "2 : 00 PM",
    date: {
      day: "17",
      month: "Oct",
    },
  },
  {
    title: "Federation University, Australia",
    subtitle:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. I",
    start_time: "00 : 00 AM",
    finish_time: "2 : 00 PM",
    date: {
      day: "17",
      month: "Oct",
    },
  },
];

const ITEMS_PER_SLIDE = 2;

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(eventsData.length / ITEMS_PER_SLIDE);

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
    <section className={styles.events}>
      <div className="container">
        <div className={styles.events_title}>
          <h2>upcoming university events </h2>
          <p>
            Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis
            metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo
            ante cum teneam sententiam, quid
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
                  {eventsData
                    .slice(
                      slideIndex * ITEMS_PER_SLIDE,
                      slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE,
                    )
                    .map((events) => (
                      <div className={styles.card}>
                        <div className={styles.card_top}>
                          <div className={styles.date}>
                            <p className={styles.day}>{events.date?.day}</p>
                            <p className={styles.month}>{events.date?.month}</p>
                          </div>
                          <h3>{events.title}</h3>
                        </div>

                        <div className={styles.card_middle}>
                          <p>{events.subtitle}</p>
                        </div>

                        <div className={styles.card_bottom}>
                          <Link
                            className={styles.card__link}
                            href="/universities"
                          >
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
                          <div className={styles.time}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />

                              <path
                                d="M12 7V12L15 14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>{events.start_time}</p>
                            <p>-</p>
                            <p>{events.finish_time}</p>
                          </div>
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
