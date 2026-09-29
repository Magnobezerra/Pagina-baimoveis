import { Instagram } from 'lucide-react'
import { company } from '../data/siteContent'

const images = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85',
]

export function InstagramSection() {
  return (
    <section className="section instagram-section">
      <div className="instagram-section__copy reveal">
        <p className="kicker">Conteúdo & inspiração</p>
        <h2>Acompanhe a<br /><em>BA Imóveis.</em></h2>
        <p>Novidades, bastidores e conteúdos para deixar você mais perto do universo da BA Imóveis.</p>
        <a className="button button--dark" href={company.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Seguir no Instagram</a>
      </div>
      <div className="instagram-section__grid reveal">
        {images.map((image, index) => <a key={image} href={company.instagram} target="_blank" rel="noreferrer" aria-label={`Abrir Instagram da BA Imóveis — imagem ilustrativa ${index + 1}`} style={{ backgroundImage: `url(${image})` }}><span><Instagram size={20} /> {company.instagramHandle}</span></a>)}
      </div>
      <p className="instagram-section__note">Imagens ilustrativas — área preparada para futura integração com publicações reais.</p>
    </section>
  )
}
