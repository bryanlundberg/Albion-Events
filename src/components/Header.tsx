'use client'
import '@/stylesheets/Header.css'

export default function Header({
  title,
  subtitle
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="header-container">
      <h1 className="align-text-center">{title}</h1>
      <div className="align-text-center">{subtitle}</div>
    </div>
  )
}
