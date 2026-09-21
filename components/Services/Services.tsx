import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import styles from "./Services.module.scss";
// import Image from "next/image";

const services = [
  {
    title: "Career Counselling",
    description:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum ",
    image: "/icons/career.png",
  },
  {
    title: "University Admissions",
    description:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. ",
      image: "/icons/admission.png",
  },
  {
    title: "Visa Consultancy",
    description: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. ",
    image: "/icons/consultancy.png",
  },
  {
    title: "Accommodation",
    description:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. ",
      image: "/icons/accomadation.png",
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. ",
      image: "/icons/departure.png",
  },
];

export default function Services() {
  return (
    <section className={styles.service_section}>
      <div className="container">
        <div className={styles.title}>
          <h2>Our Services</h2>
          <p>
            Executive Trade International is an University Application Centre,
            guiding Bangladeshi students to Australian, British, Canadian and
            Irish universities!
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
