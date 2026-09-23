import styles from "@/components/News/News.module.scss";
import Link from "next/link";
import Image from "next/image";

const newsData = [
  {
    image: "/images/newsImg_1.png",
    title: "Come On In. The Water’s Fine (Mostly).",
    date: "17 Apr 2020",
  },
  {
    image: "/images/newsImg_1.png",
    title: "Trump Lays Plans to Reverse Obama’s Climate Change ",
    date: "17 Apr 2021",
  },
  {
    image: "/images/newsImg_1.png",
    title: "How a Little Bit of Hydra Regrows a Whole Animal",
    date: "17 Apr 2020",
  },
];

export default function News() {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.title}>
          <h2>News</h2>
          <p>
            Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis
            metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo
            ante cum teneam sententiam, quid
          </p>
        </div>
        <div className={styles.newsCard}>
          {newsData.map((news) => (
            <div className={styles.card} key={news.title}> 
              <div className={styles.cardImg}>
                <Image
                  src={news.image}
                  alt={news.title}
                  width={0}
                  height={0}
                  className={styles.img}
                />
              </div>

              <div className={styles.card_title}>
                <p>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="17"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 2V6M16 2V6M3 9H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {news.date}
                </p>
                <h3>{news.title}</h3>
              </div>
            </div>    
          ))}
        </div>

        <Link className={styles.link_to_apply} href="/apply">
          Join here
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
      </div>
    </section>
  );
}
