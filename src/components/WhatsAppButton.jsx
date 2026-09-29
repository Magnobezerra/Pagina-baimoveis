import { Instagram, MessageCircle } from 'lucide-react'
import { company, whatsappUrl } from '../data/siteContent'

export function WhatsAppButton() {
  const configured = Boolean(company.whatsapp)
  return <a className="floating-contact" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={configured ? 'Falar pelo WhatsApp' : 'Falar pelo Instagram'}>{configured ? <MessageCircle /> : <Instagram />}<span>{configured ? 'WhatsApp' : 'Instagram'}</span></a>
}
