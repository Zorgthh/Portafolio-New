"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

export default function Hero() {
  const handleDownloadCV = () => {
    // En un caso real, esto sería un enlace a un archivo PDF real
    // Por ahora, mostraremos un toast de confirmación
    toast({
      title: "CV descargado",
      description: "El CV se ha descargado correctamente.",
    })

    // Simulación de descarga de archivo
    const link = document.createElement("a")
    link.href = "/cv-jhon-diaz.pdf" // En un caso real, esta sería la ruta al archivo
    link.download = "/Jhon Jairo Diaz CV"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center py-20 md:py-32">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                Jhon Jairo <br />
                <span className="text-primary">Diaz Juris</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 text-xl text-muted-foreground"
              >
                Desarrollador Frontend
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-md text-muted-foreground"
            >
              Especializado en crear experiencias web modernas y atractivas utilizando React, Next.js y otras
              tecnologías de vanguardia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Contáctame
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
                Ver proyectos
              </Button>
              <Button variant="secondary" size="lg" onClick={handleDownloadCV} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar CV
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              <Link
                href="https://github.com/Zorgthh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jhon-jairo-diaz-juris-9288ba247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary/20 to-primary/40 p-1">
              <div className="absolute inset-2 rounded-full bg-background"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/perfil.jpg"
                  alt="Jhon Jairo Diaz Juris"
                  className="h-[350px] w-[350px] rounded-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Desplázate para más</span>
          <ArrowDown className="h-5 w-5 animate-bounce text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

