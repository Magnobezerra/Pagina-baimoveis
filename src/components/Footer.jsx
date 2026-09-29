import { Clock3, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company, whatsappUrl } from '../data/siteContent'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand"><Logo light /><p>Realizando sonhos,<br />construindo histórias.</p></div>
      <div className="footer__contact"><h3>Fale com a BA</h3><a href={`tel:${company.phone}`}><Phone size={15} /> {company.phone}</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href={company.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> {company.instagramHandle}</a></div>
      <div className="footer__contact"><h3>Onde estamos</h3><p><MapPin size={15} /> {company.address}</p><p><Clock3 size={15} /> {company.hours}</p></div>
      <div className="footer__bottom"><span>© {new Date().getFullYear()} BA Imóveis. Todos os direitos reservados.</span><span>Informações de contato marcadas para substituição.</span></div>
    </footer>
  )
}
