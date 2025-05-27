"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { memo } from "react"

const TestimonialsSection = memo(function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Silva",
      company: "Salão Beleza Natural",
      image: "/testimonials/ia-dinheiro-feliz.svg",
      testimonial:
        "O AtendeUAI transformou meu negócio. Agora consigo atender meus clientes 24 horas por dia, mesmo quando estou ocupado com outros atendimentos.",
      rating: 5,
    },
    {
      name: "Maria Oliveira",
      company: "Clínica Saúde Total",
      image: "/testimonials/felicida-por-ia.svg",
      testimonial:
        "Minha clínica aumentou o número de agendamentos em 40% desde que implementamos o AtendeUAI. A IA responde dúvidas e marca consultas automaticamente.",
      rating: 5,
    },
    {
      name: "Carlos Santos",
      company: "Tech Solutions",
      image: "/testimonials/ganhou-dinheiro-com-ia.svg",
      testimonial:
        "Como empresa de tecnologia, estávamos céticos sobre usar uma IA para atendimento, mas o AtendeUAI superou nossas expectativas. Recomendo!",
      rating: 4,
    },
    {
      name: "Ana Ferreira",
      company: "Boutique Elegance",
      image: "/testimonials/amou-ia.svg",
      testimonial:
        "Minha loja de roupas aumentou as vendas online em 35% com o AtendeUAI. Os clientes adoram a experiência personalizada e as recomendações de produtos.",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      company: "Academia Fitness Pro",
      image: "/testimonials/usa-ia-e-ganha-dinheiro.svg",
      testimonial:
        "Conseguimos automatizar o agendamento de aulas e responder dúvidas sobre treinos 24/7. Nossos alunos estão muito mais satisfeitos e a retenção melhorou significativamente.",
      rating: 4,
    },
    {
      name: "Luciana Costa",
      company: "Restaurante Sabor Mineiro",
      image: "/testimonials/ia-no-restaurante-cresceu-vendas.svg",
      testimonial:
        "O sistema de pedidos online integrado com IA mudou completamente nosso delivery. Recebemos elogios constantes sobre a facilidade de fazer pedidos e o atendimento personalizado.",
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          O que nossos <span className="text-[#00FFAA]">clientes</span> dizem
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-gray-400">
          Veja como o AtendeUAI tem ajudado empresas a crescerem e melhorarem seu atendimento.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:border-[#00FFAA]/50 hover:bg-gray-900/70"
          >
            <div className="mb-4 flex" aria-label={`${testimonial.rating} de 5 estrelas`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`h-5 w-5 ${star <= testimonial.rating ? "text-yellow-500" : "text-gray-600"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="mb-6 text-gray-300 italic">"{testimonial.testimonial}"</blockquote>
            <div className="flex items-center">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#00FFAA]/30">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`Foto de ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  sizes="48px"
                />
              </div>
              <div className="ml-3">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
})

export default TestimonialsSection
