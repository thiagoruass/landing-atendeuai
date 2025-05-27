"use client"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  withText?: boolean
  className?: string
  href?: string
}

export function Logo({ size = "md", withText = true, className = "", href = "/" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const textClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  }

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <svg className="robot-logo w-full h-full" viewBox="0 0 100 100">
          {/* Anel de scanner atrás do robô */}
          <circle className="scan-ring" cx="50" cy="50" r="48" />

          {/* Cabeça */}
          <rect className="robot-head" x="25" y="20" width="50" height="50" rx="8" />

          {/* Pescoço */}
          <rect className="robot-neck" x="40" y="70" width="20" height="10" rx="3" />

          {/* "Olho" central */}
          <circle className="robot-eye" cx="50" cy="45" r="10" />

          {/* Antenas */}
          <rect className="robot-antenna" x="40" y="10" width="4" height="12" rx="1" />
          <rect className="robot-antenna" x="56" y="10" width="4" height="12" rx="1" />
        </svg>
      </div>
      {withText && <span className={`text-neon-blue font-bold ${textClasses[size]}`}>AtendeUAI</span>}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
