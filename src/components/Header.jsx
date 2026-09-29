import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Diferenciais', '#diferenciais'],
  ['Depoimentos', '#depoimentos'],
  ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <Logo light={!scrolled} />
      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="header__cta" href="#contato">Fale conosco <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
