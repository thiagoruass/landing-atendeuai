"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import RotatingText from "@/components/rotating-text"
import { motion } from "framer-motion"
import { Zap, Target, TrendingUp, Users, MessageSquare, BarChart3, Sparkles, Rocket, Globe } from "lucide-react"

// Dynamic imports for better code splitting
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg" />,
  ssr: true,
})

const FAQSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg" />,
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="py-12 animate-pulse bg-gray-900/20" />,
  ssr: true,
})

const FloatingActionButton = dynamic(() => import("@/components/floating-action-button"), {
  loading: () => null,
  ssr: false,
})

const headlines = ["Sites Inteligentes", "Vendas Automáticas", "Atendimento 24/7", "Crescimento Exponencial"]

const benefits = [
  {
    icon: Zap,
    title: "IA Avançada",
    description: "Tecnologia de ponta que entende e converte visitantes em clientes automaticamente.",
  },
  {
    icon: Target,
    title: "Conversão Otimizada",
    description: "Cada elemento é projetado para maximizar suas vendas e resultados.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Garantido",
    description: "Aumente suas vendas em até 300% com nossa plataforma inteligente.",
  },
  {
    icon: Users,
    title: "Atendimento 24/7",
    description: "Nunca perca uma venda. IA trabalha enquanto você dorme.",
  },
  {
    icon: MessageSquare,
    title: "Chat Inteligente",
    description: "Conversas naturais que convertem visitantes em compradores.",
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Dados precisos para otimizar continuamente seus resultados.",
  },
]

const steps = [
  {
    number: "01",
    title: "Conecte suas informações",
    description: "Forneça dados básicos sobre seu negócio e produtos",
    icon: Globe,
  },
  {
    number: "02",
    title: "IA cria seu site",
    description: "Nossa inteligência artificial gera um site otimizado para conversão",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Publique e venda",
    description: "Seu site vai ao ar imediatamente, pronto para gerar vendas",
    icon: Rocket,
  },
]

// Memoized components for better performance
const HeroSection = () => (
  <section className="relative overflow-hidden pt-32 pb-20">
    <div className="absolute inset-0 bg-gradient-to-br from-[#00FFAA]/5 via-transparent to-[#00D4FF]/5" />
    <div className="container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          <div className="text-white mb-2">Transforme seu negócio com</div>
          <RotatingText texts={headlines} delay={3000} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          Atenda, venda e cresça automaticamente com IA.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button className="group relative overflow-hidden rounded-xl bg-[#00FFAA] px-8 py-4 font-semibold text-black transition-all hover:scale-105 hover:bg-[#00FFAA]/90">
            <span className="relative z-10 flex items-center gap-2">
              Comece Agora — Grátis
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                →
              </motion.div>
            </span>
          </button>
          <button className="group rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition-all hover:border-[#00FFAA] hover:text-[#00FFAA]">
            <span className="flex items-center gap-2">
              Como Funciona
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const BenefitsSection = () => (
  <section id="beneficios" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          Tudo que você precisa para{" "}
          <span className="bg-gradient-to-r from-[#00FFAA] to-[#00D4FF] bg-clip-text text-transparent">crescer</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Ferramentas poderosas que trabalham 24/7 para aumentar suas vendas
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-[#00FFAA]/50 hover:bg-gray-900/80"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#00FFAA]/10 text-[#00FFAA]">
              <benefit.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 bg-gray-900/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          Como{" "}
          <span className="bg-gradient-to-r from-[#00FFAA] to-[#00D4FF] bg-clip-text text-transparent">Funciona</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Em apenas 3 passos simples, você terá um site que vende sozinho
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#00FFAA] to-[#00D4FF] text-2xl font-bold text-black">
              {step.number}
            </div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#00FFAA]/10 text-[#00FFAA]">
              <step.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />

      <section id="depoimentos">
        <Suspense fallback={<div className="py-20 animate-pulse bg-gray-900/20 rounded-lg" />}>
          <TestimonialsSection />
        </Suspense>
      </section>

      <section id="faq">
        <Suspense fallback={<div className="py-20 animate-pulse bg-gray-900/20 rounded-lg" />}>
          <FAQSection />
        </Suspense>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  )
}
