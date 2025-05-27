"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqs = [
    {
      id: "what-is",
      question: "O que é o AtendeUAI?",
      answer:
        "O AtendeUAI é uma plataforma completa que utiliza Inteligência Artificial para criar sites, automatizar atendimento ao cliente e impulsionar vendas. Com nossa tecnologia, você pode ter um site inteligente funcionando em apenas 1 minuto.",
    },
    {
      id: "how-works",
      question: "Como funciona a geração de sites?",
      answer:
        "Nossa IA analisa as informações do seu negócio e gera automaticamente um site completo, com textos otimizados, design profissional e estrutura adequada para o seu segmento. Tudo isso em questão de minutos, sem necessidade de conhecimentos técnicos.",
    },
    {
      id: "integrations",
      question: "Quais integrações o AtendeUAI oferece?",
      answer:
        "O AtendeUAI se integra com diversas plataformas, incluindo WhatsApp, Instagram, Facebook, sistemas de pagamento como PagSeguro e Mercado Pago, além de ferramentas de CRM e marketing como RD Station e Hubspot.",
    },
    {
      id: "customization",
      question: "Posso personalizar o site gerado pela IA?",
      answer:
        "Sim! Após a geração inicial, você tem total liberdade para personalizar cores, fontes, imagens e textos através de nossa interface intuitiva. Não é necessário conhecimento técnico para fazer essas alterações.",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Perguntas <span className="text-[#00FFAA]">frequentes</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          Tire suas dúvidas sobre o AtendeUAI e descubra como podemos ajudar seu negócio a crescer.
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all duration-200 hover:border-gray-700"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex w-full items-center justify-between p-4 text-left font-medium"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    openItems[faq.id] ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems[faq.id] ? "max-h-96 px-4 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
