"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu mensaje. Te responderé lo antes posible.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "jhonjairodiazjuirs@gmail.com",
      link: "mailto:jhonjairodiazjuirs@gmail.com",
      action: () => {
        window.location.href = "mailto:jhonjairodiazjuirs@gmail.com"
      },
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      content: "+57 3042489984",
      link: "tel:+573042489984",
      action: () => {
        window.location.href = "tel:+573042489984"
      },
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      content: "Colombia",
      link: "https://maps.google.com/?q=Colombia",
      action: () => {
        window.open("https://maps.google.com/?q=Colombia", "_blank")
      },
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contáctame</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            ¿Tienes un proyecto en mente o quieres hablar sobre una oportunidad? ¡Contáctame!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-bold">Información de contacto</h3>
            <p className="text-muted-foreground">
              Estoy disponible para proyectos freelance, oportunidades de trabajo a tiempo completo o simplemente para
              charlar sobre tecnología.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="flex items-start w-full text-left hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <div className="p-2 rounded-md bg-primary/10 text-primary mr-3">{item.icon}</div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <span className="text-muted-foreground hover:text-primary transition-colors">{item.content}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto de tu mensaje"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

