"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0A0A0A] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Logo size="sm" withText={true} href="/" className="flex items-center space-x-2" />
          </div>

          <div className="mb-6 flex items-center space-x-8 md:mb-0">
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Termos de Uso
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Contato
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">© 2025 AtendeUAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
