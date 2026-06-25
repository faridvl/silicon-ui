export default function BuilderPage() {
  return (
    <div className="flex h-screen bg-[--si-body-bg]">
      {/* Panel izquierdo: Chat con el agente */}
      <aside className="w-[420px] flex flex-col border-r border-[--si-border-color] bg-white">
        <div className="flex items-center gap-3 border-b border-[--si-border-color] px-6 py-4">
          <div className="h-8 w-8 rounded-lg bg-[--si-primary] flex items-center justify-center">
            <span className="text-xs font-bold text-white">S</span>
          </div>
          <div>
            <p className="text-sm font-bold text-[--si-heading-color]">Silicon Agent</p>
            <p className="text-xs text-[--si-gray-400]">Describe tu landing page</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <div className="rounded-xl bg-[--si-secondary] px-4 py-3 text-sm text-[--si-gray-700]">
            Hola! Soy Silicon Agent. Descríbeme tu producto o empresa y generaré una
            landing page profesional usando el Silicon Design System.
            <br /><br />
            <span className="font-semibold">Ejemplo:</span> "Crea una landing para una
            app de finanzas personales, colores verde y oscuro, tono profesional"
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-[--si-border-color] p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Describe tu landing page..."
              className="flex-1 rounded-lg border border-[--si-border-color] bg-white px-4 py-2.5 text-sm text-[--si-body-color] placeholder:text-[--si-gray-400] focus:border-[--si-primary] focus:outline-none focus:ring-2 focus:ring-[--si-primary-faded]"
            />
            <button className="rounded-lg bg-[--si-primary] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all">
              Generar
            </button>
          </div>
        </div>
      </aside>

      {/* Panel derecho: Preview */}
      <main className="flex-1 flex flex-col">
        <div className="flex items-center justify-between border-b border-[--si-border-color] bg-white px-6 py-4">
          <p className="text-sm font-semibold text-[--si-heading-color]">Preview</p>
          <div className="flex gap-2">
            <button className="rounded-lg border border-[--si-border-color] px-4 py-2 text-xs font-semibold text-[--si-gray-700] hover:border-[--si-primary] hover:text-[--si-primary] transition-colors">
              Export Next.js
            </button>
            <button className="rounded-lg bg-[--si-primary] px-4 py-2 text-xs font-semibold text-white hover:brightness-110 transition-all">
              Export HTML
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center text-[--si-gray-400]">
            <div className="mb-4 text-5xl">🎨</div>
            <p className="text-sm font-medium">
              Tu landing page aparecerá aquí
            </p>
            <p className="text-xs mt-1">
              Describe tu proyecto en el chat para comenzar
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
