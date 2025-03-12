"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "JavaScript", "HTML", "CSS", "Redux", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "RESTful APIs"],
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    items: ["Firebase", "MongoDB"],
  },
  {
    category: "Herramientas",
    icon: <Code className="h-6 w-6" />,
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    category: "Responsive Design",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["Mobile First", "Flexbox", "CSS Grid"],
  },
  {
    category: "Otros",
    icon: <Globe className="h-6 w-6" />,
    items: ["SEO", "Accesibilidad Web", "Rendimiento Web"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Mis Habilidades</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Tecnologías y herramientas con las que trabajo para crear soluciones web modernas y eficientes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border dark:border-border"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary mr-3">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

