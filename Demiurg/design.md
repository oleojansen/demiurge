---
name: Demiurg Studio — Design System
version: 3.0
founders: Leo Jansen & Elcio Hagge
style: editorial minimalista / tech spec
---

## A marca

**Demiurg** vem do grego *dēmiourgós* — o artesão platônico que não cria do nada, mas molda o caos segundo a Razão. O nome é intencional na forma arcaica sem o E final: gravidade histórica, não modernidade decorativa.

> *"Design é o que torna realidade todo e qualquer pensamento."*

Leo Jansen e Elcio Hagge são designers com formação em Marketing e posicionamento filosófico estoico: clareza, propósito, resistência ao tempo. O estúdio recusa o efêmero e o trendy. A favor do clássico, do elegante, do funcional. Design que não envelhece porque foi construído sobre princípios, não sobre tendências.

**Referências de espírito:**
- Platão + Estoicismo — o logos que ordena, a forma que persiste
- Matrix — a arquitetura da realidade construída com intenção
- LOTR — narrativa com densidade interna, mundo construído camada a camada
- ECM Records — minimalismo conceitual com peso filosófico
- Dürer / Melencolia I — geometria, mistério, tensão entre o mensurável e o incomensurável
- Massimo Vignelli — rigor atemporal, sistema antes de estilo
- 2001: Uma Odisseia — o monólito: forma que não se explica mas se sente

**O que Demiurg não é:** agência de massa, estúdio trendy, decoração, Bauhaus frio, new age esotérico, tech-bro. É ofício. É sistema. É permanência.

---

## O símbolo

Um D que contém uma espiral Nautilus — a letra que inicia Demiurg abraça a forma que nasce do caos ordenado pela proporção áurea. A espiral não é decoração: é a prova matemática de que o caos obedece a uma lei profunda. O D é a totalidade — o pensamento completamente realizado.

```yaml
symbol:
  forma:     "D com espiral Nautilus interna"
  conceito:  "caos → ordem → forma realizada"
  reducao:
    principal: "símbolo D + DEMIURG — acima de 200px"
    icone:     "símbolo D isolado — 32px a 200px"
  fonte_logo: "Nexa — exclusiva para o logotipo, nunca em materiais"
```

---

## Paleta — 3 cores

```yaml
colors:
  background:   "#EFEFED"   # Neutro quente — fundo de toda e qualquer peça
  dark:         "#1E1E1E"   # Quase preto — texto principal, botões, peso visual
  dark_surface: "#2A2A2A"   # Carvão — cards, containers, nav background
  accent:       "#FF5C1A"   # Laranja — o único elemento de cor. CTA, destaques
  accent_hover: "#E04A0A"   # Laranja escuro — hover de botões e links ativos

  # Derivados funcionais (dentro das 3 cores)
  text_primary:   "#1E1E1E"   # dark — headlines, body principal
  text_secondary: "#555552"   # dark com 65% opacidade — subtítulos, captions
  text_muted:     "#8A8A87"   # dark com 40% — labels, metadata
  border:         "#D8D8D5"   # background escurecido 12% — separadores, bordas
  surface:        "#E8E8E6"   # background escurecido 6% — cards sobre o fundo
```

### Proporção cromática obrigatória
- **80% background (#EFEFED)** — o espaço domina
- **15% dark (#1E1E1E / #2A2A2A)** — texto e peso
- **5% accent (#FF5C1A)** — um elemento por composição, no máximo dois

### Regras absolutas de cor
- Nunca use branco puro (#FFFFFF) — use background (#EFEFED)
- Nunca use preto puro (#000000) — use dark (#1E1E1E)
- Nunca use o accent como fundo de área grande
- Nunca adicione uma quarta cor — nem "só para este caso"
- Nunca use gradiente decorativo — a paleta é plana e limpa

---

## Tipografia

### Famílias e seus papéis

```yaml
typography:
  logo:
    fontFamily: "Nexa"
    usage: EXCLUSIVO para o logotipo DEMIURG
    note: Nunca usar em materiais, posts, web, apresentações ou qualquer outro conteúdo

  heading:
    fontFamily: "Space Grotesk"
    fontWeight: 700
    usage: Títulos de seção, headlines, navegação, botões, labels uppercase

  body:
    fontFamily: "Inter"
    fontWeight: 400 / 500
    usage: Body text, descrições, captions, todo conteúdo corrido
```

### Escala tipográfica

```yaml
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
    fontSize: "3rem"         # 48px
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    textTransform: none      # sentence case — nunca uppercase em display
    color: dark

  h1:
    fontFamily: Space Grotesk
    fontWeight: 700
    fontSize: "2.25rem"      # 36px
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    color: dark

  h2:
    fontFamily: Space Grotesk
    fontWeight: 700
    fontSize: "1.5rem"       # 24px
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    color: dark

  h3:
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: "1.125rem"     # 18px
    lineHeight: 1.3
    color: dark

  nav_item:
    fontFamily: Space Grotesk
    fontWeight: 700
    fontSize: "0.8125rem"    # 13px
    letterSpacing: "0.06em"
    textTransform: uppercase
    color: text_primary (dark) ou background (sobre dark)

  body_lg:
    fontFamily: Inter
    fontWeight: 400
    fontSize: "1.0625rem"    # 17px
    lineHeight: 1.7
    color: text_secondary

  body_md:
    fontFamily: Inter
    fontWeight: 400
    fontSize: "0.9375rem"    # 15px
    lineHeight: 1.65
    color: text_secondary

  label_caps:
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: "0.6875rem"    # 11px
    letterSpacing: "0.1em"
    textTransform: uppercase
    color: text_muted

  caption:
    fontFamily: Inter
    fontWeight: 400
    fontSize: "0.8125rem"    # 13px
    lineHeight: 1.5
    color: text_muted
```

### Regras tipográficas
- **Nexa** = apenas o logotipo. Nunca em nenhum outro lugar.
- **Space Grotesk** = estrutura, hierarquia, ação (títulos, botões, nav, labels)
- **Inter** = leitura, conteúdo, fluidez (body, captions, descrições)
- Nunca introduza uma quarta família tipográfica
- Nunca use Space Grotesk em body text corrido — é função do Inter
- Nunca use Inter em botões, nav ou títulos — é função do Space Grotesk
- Nunca use peso abaixo de 400 — perde legibilidade
- Nunca use uppercase em body text ou em headlines de display
- A variação de peso faz a hierarquia — não a variação de família

---

## Espaçamento e grid

```yaml
spacing:
  xs:      "4px"
  sm:      "8px"
  md:      "16px"
  lg:      "24px"
  xl:      "40px"
  2xl:     "64px"
  3xl:     "96px"
  section: "128px"   # respiro entre seções — generoso, intencional

grid:
  maxWidth:         "1200px"
  columns:          12
  gutter:           "24px"
  margin_desktop:   "48px"
  margin_mobile:    "20px"

  layouts:
    hero_centrado:  "conteúdo centrado, max-width 760px"
    dois_tercos:    "texto 7 colunas + imagem 5 colunas"
    portfolio_grid: "3 colunas × 2 linhas, gap 12px"
    full_width:     "12 colunas — apenas para imagens e seções de contraste dark"
```

### Ritmo vertical
Progressão 1.5x entre níveis de espaçamento. O espaço entre seções (128px) é grande intencionalmente — respiro é sinal de confiança, não de vazio.

---

## Bordas e arredondamentos

```yaml
rounded:
  none: "0px"      # seções, containers estruturais, imagens retangulares
  sm:   "4px"      # badges, tags internas, chips
  md:   "8px"      # botões, inputs, cards de conteúdo
  lg:   "16px"     # cards de destaque, modais
  full: "9999px"   # pills de tecnologia, botão flutuante
```

---

## Botões

```yaml
buttons:
  primary:
    background:    accent (#FF5C1A)
    color:         background (#EFEFED)
    fontFamily:    Space Grotesk
    fontWeight:    700
    fontSize:      "0.8125rem"   # 13px
    letterSpacing: "0.06em"
    textTransform: uppercase
    padding:       "13px 28px"
    borderRadius:  "md (8px)"
    border:        none
    hover:
      background:  accent_hover (#E04A0A)
      transition:  "background 180ms ease"

  secondary:
    background:    dark (#1E1E1E)
    color:         background (#EFEFED)
    fontFamily:    Space Grotesk
    fontWeight:    700
    fontSize:      "0.8125rem"
    letterSpacing: "0.06em"
    textTransform: uppercase
    padding:       "13px 28px"
    borderRadius:  "md (8px)"
    border:        none
    hover:
      background:  dark_surface (#2A2A2A)
      transition:  "background 180ms ease"

  ghost:
    background:    transparent
    color:         dark
    border:        "1.5px solid border (#D8D8D5)"
    fontFamily:    Space Grotesk
    fontWeight:    600
    fontSize:      "0.8125rem"
    letterSpacing: "0.04em"
    textTransform: uppercase
    padding:       "12px 27px"
    borderRadius:  "md (8px)"
    hover:
      borderColor: dark
      transition:  "border-color 180ms ease"
```

### Regras de botão
- Máximo 1 botão accent por bloco de ação — é o CTA principal
- Ícone inline à esquerda: 16px, mesmo peso visual do texto
- Nunca use fonte diferente de Space Grotesk em botões

---

## Elemento gráfico de identidade — traços diagonais

```yaml
decorative_lines:
  color:     border (#D8D8D5)
  weight:    "1px"
  angle:     "45deg ou -45deg"
  opacity:   0.6
  placement: "cantos e bordas — nunca sobre conteúdo principal"
  usage:     "apenas em backgrounds de seção do site"
  note:      "não usar em posts, carrosséis, stories ou qualquer material de conteúdo"
```

---

## Cards e containers

```yaml
cards:
  portfolio:
    background:   surface (#E8E8E6)
    border:       none
    borderRadius: "md (8px)"
    overflow:     hidden
    aspectRatio:  "1/1 ou 4/3"
    hover:
      opacity:    0.85
      transition: "opacity 220ms ease"

  content:
    background:   surface (#E8E8E6)
    border:       "0.5px solid border (#D8D8D5)"
    borderRadius: "lg (16px)"
    padding:      "24px"

  dark_block:
    background:   dark (#1E1E1E)
    color:        background (#EFEFED)
    borderRadius: "none"
    padding:      "96px 48px"
    usage:        "seções de contraste — CTA final, depoimentos, separação visual"
```

---

## Elevation e profundidade

Sem sombras. Profundidade criada por contraste de cor entre camadas:

- **Camada 0 — fundo:** `#EFEFED`
- **Camada 1 — cards:** `#E8E8E6`
- **Camada 2 — bordas/separadores:** `#D8D8D5`
- **Camada 3 — contraste máximo:** `#1E1E1E` (dark blocks)

Se absolutamente necessário: `box-shadow: 0 2px 12px rgba(30,30,30,0.08)`.

---

## Imagens e portfólio

```yaml
images:
  style:        "trabalhos reais — logos, criativos, capturas de projetos"
  treatment:    "sem filtros — cor natural do trabalho"
  background:   surface (#E8E8E6) quando o card precisar de fundo
  aspectRatio:
    card:       "1/1 ou 4/3"
    hero:       "largura total com altura fixa"
  border:       none
  borderRadius: "md (8px)"
  caption:
    fontFamily: Inter
    fontSize:   "0.8125rem"
    color:      text_muted
    marginTop:  "8px"
```

---

## Ícones

```yaml
icons:
  style:   "line icons — traço médio, sem preenchimento"
  weight:  "1.5px–2px stroke"
  size:
    sm:    "16px"
    md:    "20px"
    lg:    "24px"
  color:
    action: background (#EFEFED) sobre botão dark, ou dark sobre fundo claro
    accent: accent (#FF5C1A) apenas para ícones de destaque único
    muted:  text_muted para ícones de suporte
  library: "Lucide Icons (peso regular)"
```

---

## Alinhamento e layout

```yaml
alignment:
  hero:         center — tagline e botões centralizados
  body_corrido: center em blocos curtos (até 3 linhas), left em blocos longos
  nav:          center (botões de navegação equidistantes)
  portfolio:    center (grid simétrico)

layout:
  sequencia_secao: "label-caps + H2 + body_lg — sempre nesta ordem"
  nav_padrao:      "botões dark uppercase + 1 botão accent (contato) — mesma linha"
  hero_padrao:     "logo Demiurg → tagline (Space Grotesk) → nav → body → CTA"
  portfolio_grid:  "3 colunas × 2 linhas, gap 12px, cards com border-radius md"
  dark_block:      "seção de contraste total — fundo dark, texto claro, 1 CTA accent"
```

---

## Componentes e seus propósitos

| Componente | Propósito | Regra de equilíbrio |
|---|---|---|
| Logo Demiurg (Nexa) | Identificação da marca | Apenas o logotipo. Nunca em outro elemento. |
| Símbolo D espiral | Ícone e favicon | Versão isolada abaixo de 200px |
| Nav dark uppercase | Navegação clara e direta | Todos secondary. Apenas "Contato" = accent. |
| H2 Space Grotesk 700 | Título de seção | 1 por seção, sem uppercase em display |
| Label-caps muted | Contexto antes do título | Acima do H2, espaçamento generoso |
| Body Inter 400 | Leitura e descrição | Centrado só em blocos curtos |
| Botão accent | CTA principal de conversão | 1 por bloco de ação |
| Botão dark | Navegação e ações secundárias | Múltiplos permitidos na nav |
| Card de portfólio | Prova social visual | Grid uniforme — sem destaque individual |
| Dark block | Contraste e separação de seção | 1 por página, para CTA final |
| Traço diagonal | Elemento de identidade do site | Apenas no site — não em conteúdo/posts |
| Separador horizontal | Ritmo entre seções | 1px, border (#D8D8D5), full-width |

---

## O que NÃO fazer

### Cores
- ❌ Nunca use branco puro (#FFFFFF) — use background (#EFEFED)
- ❌ Nunca use preto puro (#000000) — use dark (#1E1E1E)
- ❌ Nunca adicione uma quarta cor — a identidade é exatamente 3 cores
- ❌ Nunca use gradiente decorativo — a paleta é flat
- ❌ Nunca use accent como fundo de seção ou container grande
- ❌ Nunca use cores pastéis, néon, vibrantes além do laranja definido
- ❌ Nunca use tons de azul, verde ou roxo

### Tipografia
- ❌ Nunca use Nexa fora do logotipo — em nenhum material, nunca
- ❌ Nunca introduza uma quarta família tipográfica
- ❌ Nunca use Space Grotesk em body text corrido
- ❌ Nunca use Inter em botões, nav ou títulos
- ❌ Nunca use peso abaixo de 400
- ❌ Nunca use itálico decorativo
- ❌ Nunca use uppercase em body text ou headlines de display

### Layout e forma
- ❌ Nunca use gradiente como elemento de design de conteúdo
- ❌ Nunca use formas geométricas decorativas (blobs, círculos soltos)
- ❌ Nunca use os traços diagonais em posts ou materiais de conteúdo
- ❌ Nunca use sombras claras ou coloridas
- ❌ Nunca use border-radius acima de 16px em containers principais
- ❌ Nunca use mais de 1 botão accent por bloco de ação

### Efeitos
- ❌ Nunca use glassmorphism, neumorphism ou efeitos de profundidade exagerados
- ❌ Nunca use animações longas (>300ms) ou chamativas
- ❌ Nunca use parallax em imagens

### Conteúdo visual
- ❌ Nunca use stock photos genéricas — apenas trabalhos reais
- ❌ Nunca use ilustrações vetoriais de banco gratuito
- ❌ Nunca use mockups genéricos para apresentar trabalho
- ❌ Nunca use ícones coloridos ou preenchidos — apenas line icons

---

## Estilos que conflitam com a identidade Demiurg

| Estilo | Por quê conflita |
|---|---|
| Dark mode full | A identidade é light — fundo neutro quente, não escuro |
| Neon / cyberpunk | Cores frias contradizem o laranja quente e o minimalismo |
| Maximalism colorido | Múltiplas cores quebram o sistema de 3 cores absolutas |
| Material Design com elevação | Sombras contradizem o flat editorial |
| Retro / vintage decorativo | Texturas e ornamentos contradizem o rigor minimalista |
| Gradiente moderno | Temperatura e saturação opostas à paleta neutra + laranja |
| Brutalism tipográfico | Escala excessiva quebra o grid rigoroso |
| Corporate blue | Tom frio contradiz o posicionamento boutique e o laranja |
| Infantil / playful | Tom e cor contradizem a seriedade técnica do estúdio |
| Bauhaus frio | Funcionalismo sem beleza — Demiurg recusa a falsa dicotomia |
| New age / esotérico | O símbolo é matemático, não místico |

---

## Para peças de Instagram especificamente

```yaml
instagram:
  background:         "#EFEFED"
  formato_card:       "1080×1080 (feed) / 1080×1920 (stories)"
  sem_traco_diagonal: true
  titulo_slide:
    fontFamily:  Space Grotesk
    fontWeight:  700
    color:       dark (#1E1E1E)
  corpo_slide:
    fontFamily:  Inter
    fontWeight:  400
    color:       text_secondary (#555552)
  destaque_slide:
    color:       accent (#FF5C1A)
    uso:         "palavra-chave ou dado numérico — 1 por slide"
  cta_slide_final:
    botao:       accent, Space Grotesk 700 uppercase
    fundo:       dark block (#1E1E1E) ou background (#EFEFED)
```

---

## Resumo para os agentes

Quando criar qualquer peça visual ou textual para o Demiurg Studio:

1. **3 cores. Só 3.** Background `#EFEFED`, dark `#1E1E1E`, accent `#FF5C1A`. Nenhuma outra.
2. **Nexa = logotipo. Ponto final.** Space Grotesk para títulos/botões/nav. Inter para body/captions.
3. **Espaço é design.** Respiro generoso entre elementos — não preencha tudo.
4. **Accent uma vez por composição.** No elemento de maior hierarquia. O resto é dark ou neutro.
5. **Sem gradiente, sem sombra, sem ornamento.** O conteúdo e a tipografia fazem o design.
6. **Sem branco puro, sem preto puro.** Sempre os tons da paleta definida.
7. **Portfólio = trabalho real.** Sem mockup genérico, sem stock photo.
8. **Um CTA accent por bloco.** Foco total na ação principal.
9. **O símbolo é matemático, não decorativo.** A espiral Nautilus no D é proporção áurea — não misticismo.
10. **Design que dura.** Cada decisão deve resistir ao teste do tempo — se parece trendy hoje, está errado.
