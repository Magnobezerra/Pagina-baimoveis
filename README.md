# Landing page institucional — BA Imóveis

Landing page premium desenvolvida em React + Vite para apresentar a história, os diferenciais e a credibilidade da BA Imóveis. O projeto não funciona como portal ou catálogo de imóveis.

## Estrutura

- Header e hero institucional
- História, missão e valores
- Diferenciais de atendimento
- Indicadores de credibilidade editáveis
- Depoimentos identificados como placeholders
- Área preparada para Instagram
- CTA e contatos institucionais
- Layout responsivo para desktop e mobile

## Executar localmente

```bash
npm install
npm run dev
```

Acesse o endereço informado pelo Vite, geralmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Personalização antes de publicar

Edite `src/data/siteContent.js` para substituir:

- telefone e WhatsApp;
- endereço e horário de atendimento;
- números de credibilidade;
- depoimentos fictícios pelos relatos reais.

Para o WhatsApp, copie `.env.example` para `.env` e informe somente números, incluindo país e DDD:

```env
VITE_WHATSAPP_NUMBER=5547999999999
```

Sem essa variável, os botões de contato direcionam para o Instagram oficial.

## Download

O pacote atualizado também está disponível em [`BA-Imoveis-Landing-Page.zip`](./BA-Imoveis-Landing-Page.zip).
