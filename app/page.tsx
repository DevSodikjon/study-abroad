import "./globals.css";

import Hero from "@/components/Hero/hero";
import Services from "@/components/Services/Services";
import Universities from "@/components/Universities/Universities";
import News from "@/components/News/News";
import Events from "@/components/Events/Events";
import Countries from "@/components/Countries/Countries";

export default function Home() {
  return (
    <main>
      <Hero />
      <Universities />
      <Services />
      <News />
      <Events />
      <Countries />
    </main>
  );
}
