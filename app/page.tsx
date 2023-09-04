import About from "@src/sections/About";
import Feature from "@src/sections/Feature";
import Frontpage from "@src/sections/Frontpage";
import Hero from "@src/sections/Hero";
import How from "@src/sections/How";

 

export default function Home() {
  return (
    <main > 
      <About />
      <Hero />
      <Frontpage/>
      <How />
      <Feature />
    </main>
  )
}
