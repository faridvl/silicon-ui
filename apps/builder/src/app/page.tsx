export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[--si-body-bg]">
      <div className="text-center max-w-2xl px-6">
        <span className="inline-flex items-center gap-2 rounded-pill bg-[--si-primary-faded] px-4 py-1.5 text-sm font-semibold text-[--si-primary] mb-6">
          Silicon Builder v0.1
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-[--si-heading-color] mb-4">
          Genera landing pages con IA
        </h1>
        <p className="text-lg text-[--si-gray-500] mb-8">
          Describe tu producto y el agente Silicon creará una landing page profesional
          lista para deployar, usando el design system Silicon.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/builder"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-[--si-primary] px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] transition-all hover:brightness-110"
          >
            Abrir Builder
          </a>
          <a
            href="/components"
            className="inline-flex items-center justify-center gap-2 rounded-pill border-2 border-[--si-primary] px-8 py-3 text-sm font-semibold text-[--si-primary] transition-all hover:bg-[--si-primary] hover:text-white"
          >
            Ver Componentes
          </a>
        </div>
      </div>
    </main>
  )
}
