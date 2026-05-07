# CLAUDE.md — Demiurg Studio

## Projeto

Landing page de conversão para o Demiurg Studio — estúdio de design editorial minimalista.

## Estrutura do Projeto

```
Demiurg/
├── landing.html              # Landing page principal
├── design.md                 # Design system do Demiurg
├── servicos.json             # Lista de serviços e pacotes
├── logos/                    # Arquivos de logo (SVG e PNG)
│   ├── demiurg svg (1).svg
│   ├── demiurg svg (2).svg
│   ├── demiurg svg (3).svg
│   ├── demiurg svg (4).svg
│   └── demiurg logo (*.png)
└── exemplo/                  # Exemplo de referência
    └── src/App.tsx          # Estrutura React de referência
```

## Design System

### Cores
- Background: `#EFEFED` (neutro quente)
- Dark: `#1E1E1E` (quase preto)
- Accent: `#FF5C1A` (laranja — único elemento de cor por composição)
- Surface: `#E8E8E6`
- Border: `#D8D8D5`

### Tipografia
- **Space Grotesk** (700): Títulos, botões, navegação, labels uppercase
- **Inter** (400): Body text, descrições, captions
- **Nexa**: Exclusivo para o logotipo "DEMIURG" — nunca usar em outro contexto

### Regras
- 3 cores apenas. Nunca branco puro (#FFFFFF) ou preto puro (#000000)
- Accent aparece uma vez por composição, no elemento de maior hierarquia
- Espaçamento generoso: 144px entre seções (desktop)
- 1 botão accent por bloco de ação
- Sem sombras, sem gradientes decorativos
- Background com padrão diagonal sutil (repeating-linear-gradient)

## O que foi feito

### 1. Landing Page (`landing.html`) — Atualizado em 2026-05-06

**Estrutura de seções:**
1. **Hero** — Vídeo de fundo com overlay escuro
   - Headline: "Seu projeto existe. Falta tomar forma." (com "forma" em laranja)
   - Label: "Design · Marketing · Estratégia Digital"
   - Body: "Branding, web, conteúdo e estratégia — construídos com a precisão de quem sabe que forma não é estética. É intenção."
   - CTA: "Solicitar proposta" + "Ver pacotes"

2. **O que entregamos** — Serviços organizados por 4 tiers
   - Básico — execução pontual (6 serviços)
   - Intermediário — projetos estruturados (7 serviços)
   - Avançado — impacto em resultado (6 serviços)
   - Premium — parceria contínua (5 serviços)
   - Cards com ícones, descrições e tags

3. **Números que importam** — Dark block com 4 métricas
   - +80 projetos entregues
   - 3.2× mais conversão média
   - +40% crescimento de tráfego orgânico
   - 94% dos clientes voltam

4. **Pacotes prontos** — 6 pacotes com checkmarks
   - Start (Básico)
   - Presença Digital (Básico+)
   - Crescimento (Intermediário)
   - Performance (Avançado) — destaque "Mais recomendado"
   - Brand & Scale (Avançado+)
   - Parceria Estratégica (Premium)

5. **Quem já está com a Demiurg** — 3 depoimentos com estrelas

6. **Como trabalhamos** — 4 passos em grid
   - 01 — Diagnóstico
   - 02 — Estratégia
   - 03 — Execução
   - 04 — Resultado

7. **CTA Final** — Dark block
   - Label: "Hora de construir"
   - Headline: "E a sua ideia, qual é?"
   - Body: "Todo grande projeto começou apenas no pensamento. Conte o seu — estamos prontos para torná-lo realidade."

8. **Footer** — Logo + links + copyright

**Logos por seção:**
- **Header/Navegação**: `demiurg svg (2).svg` (60px altura)
- **Hero**: `demiurg svg (3).svg`
- **Footer**: `demiurg svg (4).svg`
- **Favicon**: `demiurg svg (3).svg`

**Assets:**
- Vídeo de fundo: https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4

**Responsividade:**
- Mobile: padding ajustado, grids em 1 coluna
- Tablet: grids em 2 colunas
- Desktop: grids completos

**Animações:**
- Hero: fadeUp sequencial
- Scroll: reveal com translateY
- Hover: transições sutis em cards e botões

## Como usar

Para visualizar a landing page:
1. Abra `Demiurg/landing.html` no navegador
2. Ou use um servidor local: `cd Demiurg && python -m http.server 8000`

## Próximos passos

- Adicionar seção de portfólio com trabalhos reais
- Implementar formulário de contato
- Otimizar para SEO
- Criar versões para redes sociais (Instagram, LinkedIn)
