import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__media" role="img" aria-label="Interior contemporâneo e elegante" />
      <div className="hero__shade" />
      <div className="hero__content reveal">
        <p className="kicker kicker--light">Bem-vindo à BA Imóveis</p>
        <h1>Realizando sonhos,<br /><em>construindo histórias.</em></h1>
        <p className="hero__intro">Mais do que encontrar um imóvel, ajudamos você a encontrar o lugar certo para viver novos momentos.</p>
        <div className="hero__actions">
          <a className="button button--gold" href="#sobre">Conheça a BA Imóveis <ArrowRight size={18} /></a>
          <a className="button button--ghost" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Fale pelo WhatsApp</a>
        </div>
      </div>
      <a className="hero__scroll" href="#sobre" aria-label="Ir para a próxima seção"><span>Descubra nossa história</span><ArrowDown size={18} /></a>
    </section>
  )
}
