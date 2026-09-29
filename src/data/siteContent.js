// Conteúdos marcados como "substituir" são placeholders editoriais.
// Troque-os pelas informações oficiais da BA Imóveis antes da publicação.
export const company = {
  name: 'BA Imóveis',
  instagram: 'https://www.instagram.com/b.aimoveis/',
  instagramHandle: '@b.aimoveis',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  phone: '(00) 0000-0000', // substituir
  address: 'Endereço da imobiliária', // substituir
  hours: 'Segunda a sexta, das 9h às 18h', // substituir
}

export const stats = [
  { value: '+ X', label: 'clientes atendidos' }, // substituir
  { value: 'X anos', label: 'de experiência' }, // substituir
  { value: '+ X', label: 'negociações realizadas' }, // substituir
]

export const testimonials = [
  {
    name: 'Cliente 01', // depoimento fictício — substituir
    role: 'Cliente BA Imóveis',
    text: 'Depoimento ilustrativo. Inclua aqui a experiência real de um cliente com o atendimento da BA Imóveis.',
  },
  {
    name: 'Cliente 02', // depoimento fictício — substituir
    role: 'Cliente BA Imóveis',
    text: 'Depoimento ilustrativo. Este espaço foi preparado para compartilhar uma história verdadeira de confiança e realização.',
  },
  {
    name: 'Cliente 03', // depoimento fictício — substituir
    role: 'Cliente BA Imóveis',
    text: 'Depoimento ilustrativo. Substitua este conteúdo pelo relato de quem viveu uma boa experiência ao lado da equipe.',
  },
]

export const whatsappUrl = company.whatsapp
  ? `https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, vim pelo site da BA Imóveis e gostaria de conversar.')}`
  : company.instagram
