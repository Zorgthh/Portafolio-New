import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import { ThemeIndicator } from "@/components/sections/theme-indicator"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ThemeIndicator />
    </main>
  );
}
