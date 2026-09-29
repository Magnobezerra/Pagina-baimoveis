import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/siteContent'

export function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="section-heading section-heading--center reveal">
        <p className="kicker">Depoimentos</p>
        <h2>Histórias de quem confiou<br />na <em>BA Imóveis.</em></h2>
        <p>Espaços demonstrativos preparados para receber depoimentos reais dos clientes.</p>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((item) => (
          <article className="testimonial-card reveal" key={item.name}>
            <Quote className="testimonial-card__quote" size={34} strokeWidth={1.2} />
            <div className="testimonial-card__stars" aria-label="5 de 5 estrelas">{[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}</div>
            <blockquote>“{item.text}”</blockquote>
            <footer><span className="testimonial-card__avatar">{item.name.slice(-2)}</span><div><strong>{item.name}</strong><small>{item.role} • conteúdo fictício</small></div></footer>
          </article>
        ))}
      </div>
    </section>
  )
}
