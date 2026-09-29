import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="about__visual reveal">
        <div className="about__image about__image--main" />
        <div className="about__image about__image--detail" />
        <div className="about__seal"><span>Nossa essência</span><strong>BA</strong><small>IMÓVEIS</small></div>
      </div>
      <div className="about__content reveal">
        <p className="kicker">Sobre a BA Imóveis</p>
        <h2>Um novo capítulo<br />começa com uma <em>boa escolha.</em></h2>
        <p className="about__lead">A BA Imóveis nasceu para tornar decisões importantes mais leves, seguras e humanas.</p>
        <p>Este espaço está preparado para receber a história oficial da empresa: o ano de fundação, os caminhos que construíram a marca, sua experiência no mercado e o propósito que orienta cada atendimento.</p>
        <div className="about__principles">
          <article><span>01</span><div><strong>Missão</strong><p>Inserir a missão oficial da BA Imóveis.</p></div></article>
          <article><span>02</span><div><strong>Valores</strong><p>Inserir os valores que guiam a empresa.</p></div></article>
        </div>
        <a className="text-link" href="#diferenciais">Conheça nosso jeito de trabalhar <ArrowUpRight size={17} /></a>
      </div>
    </section>
  )
}
