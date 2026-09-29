import { ArrowRight } from 'lucide-react'
import { whatsappUrl } from '../data/siteContent'

export function ContactCta() {
  return (
    <section className="contact-cta" id="contato">
      <div className="contact-cta__inner reveal">
        <p className="kicker kicker--light">Seu próximo capítulo</p>
        <h2>Vamos conversar sobre<br />o seu <em>próximo passo?</em></h2>
        <p>Estamos prontos para ouvir seus planos e ajudar você a seguir com mais confiança.</p>
        <a className="button button--gold" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a BA Imóveis <ArrowRight size={18} /></a>
      </div>
    </section>
  )
}
