export function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#inicio" aria-label="BA Imóveis — início">
      <span className="logo__monogram">BA</span>
      <span className="logo__name">Imóveis</span>
    </a>
  )
}
