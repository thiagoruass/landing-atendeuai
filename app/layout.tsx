import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "AtendeUAI - Transforme seu negócio com um site inteligente",
  description:
    "Atenda, venda e cresça automaticamente com IA. Crie um site inteligente que funciona 24/7 sem precisar programar.",
  keywords: [
    "site inteligente",
    "atendimento IA",
    "vendas automáticas",
    "WhatsApp automático",
    "chatbot",
    "IA para negócios",
  ],
  authors: [{ name: "AtendeUAI" }],
  creator: "AtendeUAI",
  publisher: "AtendeUAI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://atendeuai.com",
    title: "AtendeUAI - Transforme seu negócio com um site inteligente",
    description: "Atenda, venda e cresça automaticamente com IA. Crie um site inteligente que funciona 24/7.",
    siteName: "AtendeUAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AtendeUAI - Transforme seu negócio com um site inteligente",
    description: "Atenda, venda e cresça automaticamente com IA. Crie um site inteligente que funciona 24/7.",
    creator: "@atendeuai",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00FFAA",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#00FFAA" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
