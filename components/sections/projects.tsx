"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const projects = [
  {
    title: "UserCrud",
    description: "Un UserCRUD de usuarios donde guardaba la informacion en la api de la Academia",
    image: "/usecrud.png",
    tags: ["React","JavaScript","HTML","CSS"],
    demoUrl: "https://fluffy-halva-a91ce2.netlify.app/",
    repoUrl: "https://github.com/Zorgthh/useCrud",
  },
  {
    title: "Rick and Morty API",
    description: "Implementamos el uso de una API para a traves de un filtro poder acceder a la informacion de la serie de Rick and Morty",
    image: "/rickandmory.png",
    tags: ["React", "Redux", "API", "JavaScript"],
    demoUrl: "https://animated-florentine-be9884.netlify.app/",
    repoUrl: "https://github.com/Zorgthh/Rick-y-Morty",
  },
  {
    title: "WeatherApp",
    description: "Una app sencilla que recoje informacion del usuario y le da datos acerca de su ubicacion",
    image: "/weather.png",
    tags: ["React", "API", "JavaScript"],
    demoUrl: "https://weather-app-by-zorgth.netlify.app/",
    repoUrl: "#repo-social",
  },
  {
    title: "Elimelec S.A.S",
    description: "Una lading page sencilla de uso de conctacto para experiencias locales.",
    image: "/elimec.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://scintillating-gumdrop-3db797.netlify.app/",
    repoUrl: "https://github.com/Zorgthh/elimelec",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleProjectClick = (type: string, project: any) => {
    const url = type === "demo" ? project.demoUrl : project.repoUrl;
    if (url) {
      window.open(url, "_blank");
    } else {
      toast({
        title: "Enlace no disponible",
        description: `El ${type === "demo" ? "demo" : "repositorio"} para ${project.title} no está disponible.`,
      });
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Mis Proyectos</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleProjectClick("repo", project)}
                    className="flex items-center gap-1 hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleProjectClick("demo", project)}
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

