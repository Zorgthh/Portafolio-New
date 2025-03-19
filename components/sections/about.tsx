"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Conoce un poco más sobre mi trayectoria y pasión por el desarrollo web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <img
              src="/perfil.jpg"
              alt="Jhon Jairo Diaz Juris"
              className="relative z-10 rounded-lg object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Desarrollador Frontend con pasión por crear experiencias digitales excepcionales
            </h3>
            <p className="text-muted-foreground">
              Soy un desarrollador web especializado en tecnologías frontend modernas como React, Next.js y Tailwind
              CSS. Mi objetivo es crear interfaces de usuario intuitivas, atractivas y de alto rendimiento que
              proporcionen una experiencia excepcional al usuario.
            </p>
            <p className="text-muted-foreground">
              Con experiencia en el desarrollo de aplicaciones web responsivas y accesibles, me apasiona mantenerme
              actualizado con las últimas tendencias y mejores prácticas en el desarrollo web.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold">Nombre:</h4>
                <p className="text-muted-foreground">Jhon Jairo Diaz Juris</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">jhonjairodiazjuirs@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold">Ubicación:</h4>
                <p className="text-muted-foreground">Colombia</p>
              </div>
              <div>
                <h4 className="font-bold">Disponibilidad:</h4>
                <p className="text-muted-foreground">Disponible</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

