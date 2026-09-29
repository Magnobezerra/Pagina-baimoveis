import { stats } from '../data/siteContent'

export function Stats() {
  return (
    <section className="stats" aria-label="Indicadores da BA Imóveis">
      <div className="stats__intro"><p className="kicker kicker--light">Credibilidade construída</p><h2>Resultados que refletem<br /><em>relações de confiança.</em></h2></div>
      <div className="stats__numbers">
        {stats.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
      <small className="stats__note">Indicadores preparados para receber os dados oficiais da empresa.</small>
    </section>
  )
}
