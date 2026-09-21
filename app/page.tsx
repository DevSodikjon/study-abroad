import Universities from "@/components/Universities/Universities";
import "./globals.css"

import Hero from "@/components/Hero/hero";
import Services from "@/components/Services/Services";


export default function Home() {
  return (
    <main>
    <Hero/>
    <Universities />
    <Services/>
    
    </main>
  );
}
