"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-9 h-9" disabled />
  }

  return (
    <div className="flex items-center space-x-2 border rounded-md p-1">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        className="w-8 h-8"
        onClick={() => setTheme("light")}
        title="Modo claro"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Modo claro</span>
      </Button>

      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        className="w-8 h-8"
        onClick={() => setTheme("dark")}
        title="Modo oscuro"
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Modo oscuro</span>
      </Button>

      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="icon"
        className="w-8 h-8"
        onClick={() => setTheme("system")}
        title="Preferencia del sistema"
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">Preferencia del sistema</span>
      </Button>
    </div>
  )
}

