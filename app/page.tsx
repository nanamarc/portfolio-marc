
import Hero from "@/components/Home";
import NavBar from "@/components/NavBar";
import { About } from "@/components/About";
import Project from "@/components/Project";
import { Projects } from "@/components/ProjectList";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
import { Service } from "@/components/Service";
export default function Home() {

  return (
    <div className="dark:bg-gray-900 transition-all duration-700">
      <NavBar  />
      <Hero />
      <About />
      <Project projectList={Projects().map(project => ({ ...project }))}/>
      <Service/>
      <Stack/>
      <Footer/>
     
    </div>
  );
}
