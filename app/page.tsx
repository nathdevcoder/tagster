import About from "@src/sections/About";
import Feature from "@src/sections/Feature";
import Foot from "@src/sections/Foot";
import Frontpage from "@src/sections/Frontpage";
import Hero from "@src/sections/Hero";
import How from "@src/sections/How";
import MapSection from "@src/sections/Map";
import Tour from "@src/sections/Tour";

 

export default function Home() {
  return (
    <main > 
      <About />
      <Hero />
      <Frontpage/>
      <How />
      <Feature />
      <MapSection />
      <Tour />
      <Foot />
    </main>
  )
}
