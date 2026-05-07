const services = [
  {
    tier: "Base",
    description: "Ativos de conversão para validar oferta e iniciar aquisição.",
    items: [
      "Landing Page de Conversão",
      "Design para Redes Sociais",
      "Edição de Vídeos Curtos",
      "Criativos para Anúncios",
    ],
  },
  {
    tier: "Intermediário",
    description: "Presença digital com sistema visual, conteúdo e experiência.",
    items: [
      "Identidade Visual Essencial",
      "Social Media + Conteúdo",
      "Website Institucional",
      "UX/UI Design",
    ],
  },
  {
    tier: "Avançado",
    description: "Direção, narrativa e performance para marcas em crescimento.",
    items: [
      "Branding Completo",
      "Direção Criativa",
      "Produção de Conteúdo Profissional",
      "Otimização de Conversão (CRO)",
    ],
  },
  {
    tier: "Premium",
    description: "Estrutura contínua para escalar produto, serviço e marca.",
    items: [
      "Estratégia Digital Completa",
      "Design de Serviços",
      "Web Apps / MVP",
      "Consultoria Estratégica Contínua",
    ],
  },
];

const packages: { name: string; includes: string[]; featured?: boolean }[] = [
  {
    name: "Start",
    includes: ["Landing Page", "6 posts", "1 vídeo curto"],
  },
  {
    name: "Presença Digital",
    includes: [
      "Landing Page ou site simples",
      "12 posts",
      "2–4 vídeos",
      "Identidade visual essencial",
    ],
  },
  {
    name: "Crescimento",
    includes: [
      "Website institucional",
      "Social media mensal",
      "4–8 vídeos",
      "Criativos para anúncios",
      "Direção criativa básica",
    ],
    featured: true,
  },
  {
    name: "Performance",
    includes: [
      "Landing pages estratégicas",
      "Criativos contínuos",
      "Produção de conteúdo",
      "Otimização de conversão",
      "Acompanhamento mensal",
    ],
  },
  {
    name: "Brand & Scale",
    includes: [
      "Branding completo",
      "Website completo",
      "Estratégia digital",
      "Direção criativa",
      "Conteúdo contínuo",
    ],
  },
  {
    name: "Parceria Estratégica",
    includes: [
      "Consultoria estratégica",
      "Conteúdo mensal completo",
      "Criativos e campanhas",
      "Otimizações contínuas",
      "Suporte contínuo",
    ],
  },
];

const processSteps = [
  [
    "01",
    "Diagnóstico",
    "Leitura da oferta, posicionamento, público e gargalos de conversão.",
  ],
  [
    "02",
    "Sistema",
    "Arquitetura visual, narrativa e prioridades de ação antes da execução.",
  ],
  [
    "03",
    "Produção",
    "Design, conteúdo, páginas, criativos e interfaces em ciclos objetivos.",
  ],
  [
    "04",
    "Otimização",
    "Acompanhamento do desempenho e ajustes guiados por clareza e resultado.",
  ],
];

/* ── Logo SVG ─────────────────────────────────────────────── */

function LogoDark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Demiurg Studio"
    >
      {/* D symbol with spiral */}
      <g>
        {/* outer D shape — square left, rounded right */}
        <rect
          x="2"
          y="2"
          width="48"
          height="48"
          rx="8"
          stroke="#FF5C1A"
          strokeWidth="3.5"
          fill="none"
        />
        {/* rounded D cutout on right */}
        <path
          d="M26 2C40.4 2 50 13 50 26C50 39 40.4 50 26 50"
          stroke="#FF5C1A"
          strokeWidth="3.5"
          fill="none"
        />
        {/* nautilus spiral */}
        <path
          d="M38 26c0 6.6-5.4 12-12 12-5.5 0-10-4.5-10-10 0-4.4 3.6-8 8-8 3.3 0 6 2.7 6 6 0 2.2-1.8 4-4 4-1.7 0-3-1.3-3-3 0-1.1.9-2 2-2"
          stroke="#FF5C1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      {/* wordmark */}
      <text
        x="62"
        y="36"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#1E1E1E"
      >
        Demiurg
      </text>
    </svg>
  );
}

function LogoLight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Demiurg Studio"
    >
      <g>
        <rect
          x="2"
          y="2"
          width="48"
          height="48"
          rx="8"
          stroke="#FF5C1A"
          strokeWidth="3.5"
          fill="none"
        />
        <path
          d="M26 2C40.4 2 50 13 50 26C50 39 40.4 50 26 50"
          stroke="#FF5C1A"
          strokeWidth="3.5"
          fill="none"
        />
        <path
          d="M38 26c0 6.6-5.4 12-12 12-5.5 0-10-4.5-10-10 0-4.4 3.6-8 8-8 3.3 0 6 2.7 6 6 0 2.2-1.8 4-4 4-1.7 0-3-1.3-3-3 0-1.1.9-2 2-2"
          stroke="#FF5C1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <text
        x="62"
        y="36"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#EFEFED"
      >
        Demiurg
      </text>
    </svg>
  );
}

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="48"
        height="48"
        rx="8"
        stroke="#FF5C1A"
        strokeWidth="3.5"
        fill="none"
      />
      <path
        d="M26 2C40.4 2 50 13 50 26C50 39 40.4 50 26 50"
        stroke="#FF5C1A"
        strokeWidth="3.5"
        fill="none"
      />
      <path
        d="M38 26c0 6.6-5.4 12-12 12-5.5 0-10-4.5-10-10 0-4.4 3.6-8 8-8 3.3 0 6 2.7 6 6 0 2.2-1.8 4-4 4-1.7 0-3-1.3-3-3 0-1.1.9-2 2-2"
        stroke="#FF5C1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ── Icons ────────────────────────────────────────────────── */

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 10 4 4 6-7" />
    </svg>
  );
}

/* ── Section Intro ────────────────────────────────────────── */

function SectionIntro({
  label,
  title,
  body,
  light = false,
}: {
  label: string;
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <p className="font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#8A8A87]">
        {label}
      </p>
      <h2
        className={`mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.02em] md:text-4xl ${
          light ? "text-[#EFEFED]" : "text-[#1E1E1E]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 font-body text-[1.0625rem] leading-[1.7] ${
          light ? "text-[#D8D8D5]" : "text-[#555552]"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

/* ── App ──────────────────────────────────────────────────── */

export default function App() {
  return (
    <main className="min-h-screen bg-[#EFEFED] text-[#1E1E1E] selection:bg-[#FF5C1A] selection:text-[#EFEFED]">
      {/* ═══ HEADER ═══ */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D8D8D5] bg-[#EFEFED]/95 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-12">
          <a href="#top" aria-label="Demiurg Studio">
            <LogoDark className="h-8 w-auto" />
          </a>

          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Navegação principal"
          >
            {[
              ["Serviços", "#servicos"],
              ["Pacotes", "#pacotes"],
              ["Processo", "#processo"],
              ["Resultados", "#resultados"],
            ].map(([label, href]) => (
              <a key={label} className="btn-secondary" href={href}>
                {label}
              </a>
            ))}
            <a
              className="btn-primary"
              href="mailto:contato@demiurg.studio?subject=Quero%20solicitar%20uma%20proposta"
            >
              Contato
            </a>
          </nav>

          <a
            className="btn-primary md:hidden"
            href="mailto:contato@demiurg.studio?subject=Quero%20solicitar%20uma%20proposta"
          >
            Contato
          </a>
        </div>
      </header>

      {/* ═══ HERO — vídeo de fundo ═══ */}
      <section
        id="top"
        className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
      >
        {/* vídeo background */}
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {/* overlay escuro */}
        <div className="absolute inset-0 -z-10 bg-[#1E1E1E]/80" />

        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 py-20 text-center md:px-12">
          {/* logo + label */}
          <div className="hero-reveal flex flex-col items-center">
            <LogoIcon className="h-16 w-16" />
            <p className="mt-6 font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#8A8A87]">
              Design · Marketing · Estratégia Digital
            </p>
          </div>

          {/* tagline */}
          <div className="hero-reveal hero-reveal-2 mt-8 max-w-[860px]">
            <h1 className="font-heading text-[clamp(2.25rem,5.5vw,4.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#EFEFED]">
              Do visual à{" "}
              <span className="text-[#FF5C1A]">conversão.</span>
              <br />
              Do conceito ao cliente.
            </h1>
            <p className="mx-auto mt-7 max-w-[640px] font-body text-[1.0625rem] leading-[1.7] text-[#D8D8D5] md:text-[1.12rem]">
              O Demiurg Studio une design, estratégia e marketing digital em um
              único lugar. Entregamos desde a identidade da marca até campanhas
              que geram resultado real — com processo claro e sem desperdício.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-reveal hero-reveal-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="btn-primary inline-flex items-center gap-2"
              href="mailto:contato@demiurg.studio?subject=Quero%20solicitar%20uma%20proposta"
            >
              <ArrowIcon />
              Solicitar proposta
            </a>
            <a className="btn-ghost-light" href="#pacotes">
              Ver pacotes
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <div className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#8A8A87]">
            Scroll
          </span>
          <span className="h-8 w-px bg-[#555552]" />
        </div>
      </section>

      {/* ═══ SERVIÇOS ═══ */}
      <section id="servicos" className="section-space">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <SectionIntro
            label="Serviços"
            title="Do primeiro ativo de venda ao sistema completo de marca."
            body="A oferta é organizada por maturidade: comece com conversão, evolua para presença, avance para performance e consolide escala."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((group, i) => (
              <div
                key={group.tier}
                className="group rounded-lg border border-[#D8D8D5] bg-[#E8E8E6] p-6 transition-[border-color] duration-200 hover:border-[#1E1E1E]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1E1E1E] font-heading text-[0.6875rem] font-bold text-[#EFEFED]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-[#1E1E1E]">
                    {group.tier}
                  </p>
                </div>
                <p className="mt-4 font-body text-[0.9375rem] leading-[1.65] text-[#555552]">
                  {group.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 font-body text-[0.9375rem] leading-[1.45] text-[#1E1E1E]"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto h-px max-w-[1200px] bg-[#D8D8D5]" />

      {/* ═══ PACOTES ═══ */}
      <section id="pacotes" className="section-space">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <SectionIntro
            label="Pacotes"
            title="Escolha um ponto de partida. O sistema cresce com a sua ambição."
            body="Cada pacote é uma rota de produção. A composição final é ajustada ao objetivo comercial, prazo e maturidade da marca."
          />

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => {
              const isFeatured = pkg.featured;
              return (
                <a
                  key={pkg.name}
                  href={`mailto:contato@demiurg.studio?subject=Tenho%20interesse%20no%20pacote%20${encodeURIComponent(pkg.name)}`}
                  className={`group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-lg p-6 transition-all duration-200 ${
                    isFeatured
                      ? "border-2 border-[#FF5C1A] bg-[#1E1E1E] text-[#EFEFED] hover:bg-[#2A2A2A]"
                      : "border border-[#D8D8D5] bg-[#E8E8E6] text-[#1E1E1E] hover:border-[#1E1E1E] hover:bg-[#EFEFED]"
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#FF5C1A] px-3 py-1 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-[#EFEFED]">
                      Mais popular
                    </span>
                  )}
                  <div>
                    <p
                      className={`font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.1em] ${
                        isFeatured ? "text-[#8A8A87]" : "text-[#8A8A87]"
                      }`}
                    >
                      Pacote
                    </p>
                    <h3
                      className={`mt-3 font-heading text-2xl font-bold leading-[1.1] tracking-[-0.02em] ${
                        isFeatured ? "text-[#EFEFED]" : "text-[#1E1E1E]"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <ul className="mt-8 space-y-3">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className={`flex gap-3 font-body text-[0.9375rem] leading-[1.55] ${
                            isFeatured ? "text-[#D8D8D5]" : "text-[#555552]"
                          }`}
                        >
                          <span
                            className={`mt-2 h-px w-4 shrink-0 transition-colors duration-200 ${
                              isFeatured
                                ? "bg-[#FF5C1A]"
                                : "bg-[#8A8A87] group-hover:bg-[#FF5C1A]"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    className={`mt-10 inline-flex items-center gap-2 font-heading text-[0.8125rem] font-bold uppercase tracking-[0.06em] ${
                      isFeatured ? "text-[#FF5C1A]" : "text-[#1E1E1E]"
                    }`}
                  >
                    Solicitar rota <ArrowIcon />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESSO — dark block ═══ */}
      <section id="processo" className="bg-[#1E1E1E] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <div className="max-w-[760px]">
            <p className="font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#8A8A87]">
              Processo
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[#EFEFED] md:text-4xl">
              Menos dispersão. Mais forma, decisão e ritmo.
            </h2>
            <p className="mt-5 font-body text-[1.0625rem] leading-[1.7] text-[#D8D8D5]">
              O trabalho avança por etapas claras para evitar retrabalho e
              preservar o que importa: coerência, execução e conversão.
            </p>
          </div>

          <div className="mt-16 divide-y divide-[#2A2A2A] border-y border-[#2A2A2A]">
            {processSteps.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-4 py-8 md:grid-cols-12 md:items-start"
              >
                <p className="font-heading text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-[#FF5C1A] md:col-span-2">
                  {number}
                </p>
                <h3 className="font-heading text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-[#EFEFED] md:col-span-4">
                  {title}
                </h3>
                <p className="font-body text-[0.9375rem] leading-[1.65] text-[#D8D8D5] md:col-span-6">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTADOS ═══ */}
      <section id="resultados" className="section-space relative overflow-hidden">
        <div className="diagonal-corner absolute right-0 top-0 h-64 w-64" />
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <SectionIntro
            label="Resultados"
            title="Design para tornar a oferta compreensível, desejável e acionável."
            body="Não vendemos decoração. Construímos os pontos de contato que fazem uma marca ser percebida, entendida e escolhida."
          />

          <div className="mx-auto mt-16 max-w-[960px] border-y border-[#D8D8D5]">
            {[
              [
                "Clareza de oferta",
                "Mensagem, página e conteúdo passam a falar a mesma coisa, com hierarquia e foco.",
              ],
              [
                "Presença consistente",
                "Identidade, criativos, social e site deixam de parecer peças soltas.",
              ],
              [
                "Conversão mensurável",
                "Ações digitais são pensadas para levar a uma decisão, não apenas a uma impressão.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="grid gap-4 border-b border-[#D8D8D5] py-8 last:border-b-0 md:grid-cols-12"
              >
                <h3 className="font-heading text-xl font-bold leading-[1.2] text-[#1E1E1E] md:col-span-4">
                  {title}
                </h3>
                <p className="font-body text-[1.0625rem] leading-[1.7] text-[#555552] md:col-span-8">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL — dark block ═══ */}
      <section className="px-5 pb-5 md:px-12 md:pb-12">
        <div className="mx-auto max-w-[1200px] bg-[#1E1E1E] px-6 py-20 text-center md:px-12 md:py-24">
          <LogoLight className="mx-auto h-7 w-auto" />
          <p className="mt-8 font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#8A8A87]">
            Conversão
          </p>
          <h2 className="mx-auto mt-4 max-w-[780px] font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[#EFEFED] md:text-5xl">
            Se a oferta tem valor, ela precisa de uma forma à altura.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] font-body text-[1.0625rem] leading-[1.7] text-[#D8D8D5]">
            Envie seu objetivo comercial. Respondemos com uma rota de projeto
            objetiva para transformar intenção em sistema de venda.
          </p>
          <div className="mt-10">
            <a
              className="btn-primary inline-flex items-center gap-2"
              href="mailto:contato@demiurg.studio?subject=Quero%20criar%20um%20sistema%20de%20vendas"
            >
              <ArrowIcon />
              Falar com a gente
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[#D8D8D5] px-5 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 md:flex-row md:justify-between">
          <LogoDark className="h-6 w-auto opacity-50" />
          <p className="font-body text-[0.8125rem] leading-[1.5] text-[#8A8A87]">
            © {new Date().getFullYear()} Demiurg Studio — Design, marketing e
            estratégia digital.
          </p>
        </div>
      </footer>
    </main>
  );
}
