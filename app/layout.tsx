import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/sections/theme-provider"
import { ToastProvider } from "@/components/sections/toast-provider"
import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jhon Jairo Diaz Juris | Portfolio",
  description: "Portfolio de Jhon Jairo Diaz Juris - Desarrollador Frontend",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}

