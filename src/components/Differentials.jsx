import { HeartHandshake, KeyRound, MessagesSquare, Route, ShieldCheck } from 'lucide-react'

const items = [
  { icon: MessagesSquare, title: 'Atendimento personalizado', text: 'Cada conversa começa pela escuta atenta às suas necessidades, planos e prioridades.' },
  { icon: ShieldCheck, title: 'Negociação segura', text: 'Clareza e responsabilidade para você tomar decisões com mais tranquilidade.' },
  { icon: Route, title: 'Jornada acompanhada', text: 'Presença próxima em todas as etapas, do primeiro contato à conclusão da negociação.' },
  { icon: KeyRound, title: 'Experiência de mercado', text: 'Conhecimento para orientar escolhas e transformar possibilidades em bons caminhos.' },
  { icon: HeartHandshake, title: 'Relações humanizadas', text: 'Mais do que negócios, construímos relações pautadas por confiança e respeito.' },
]

export function Differentials() {
  return (
    <section className="section differentials" id="diferenciais">
      <div className="section-heading reveal">
        <div><p className="kicker">Por que escolher a BA</p><h2>Excelência percebida<br /><em>em cada detalhe.</em></h2></div>
        <p>Um atendimento imobiliário deve oferecer mais do que respostas. Deve transmitir confiança em cada passo.</p>
      </div>
      <div className="differentials__grid">
        {items.map(({ icon: Icon, title, text }, index) => (
          <article className="differential-card reveal" key={title}>
            <div className="differential-card__top"><span>0{index + 1}</span><Icon size={23} strokeWidth={1.4} /></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
