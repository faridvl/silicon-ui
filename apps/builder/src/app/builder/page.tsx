'use client'

import * as React from 'react'
import { useBuilderStore } from '@/store/builder.store'
import { PageRenderer } from '@/components/PageRenderer'
import { TEMPLATES } from '@/templates'
import type { ChatMessage, TemplateId } from '@/types/silicon'

const TEMPLATE_LABELS: Record<TemplateId, string> = {
  'saas-v1': 'SaaS v1',
  'saas-v2': 'SaaS v2',
  agency: 'Agencia',
  'app-showcase': 'App',
  financial: 'Fintech',
  medical: 'Médico',
  portfolio: 'Portfolio',
  'software-company': 'B2B',
}

const WELCOME_MESSAGE = `Hola! Soy Silicon Agent. Descríbeme tu producto o empresa y generaré una landing page profesional usando el Silicon Design System.

Ejemplo: "Crea una landing para una app de finanzas personales, colores verde y oscuro, tono profesional"

O usa los templates de arriba para cargar un ejemplo al instante.`

export default function BuilderPage() {
  const { messages, currentPage, isGenerating, addMessage, setCurrentPage, setGenerating, reset } =
    useBuilderStore()
  const [input, setInput] = React.useState('')
  const [isDark, setIsDark] = React.useState(false)
  const [primaryColor, setPrimaryColor] = React.useState('#6366f1')
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isGenerating])

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const handleColorChange = (color: string) => {
    setPrimaryColor(color)
    document.documentElement.style.setProperty('--si-primary', color)
  }

  const loadTemplate = (id: TemplateId) => {
    const template = TEMPLATES[id]
    setCurrentPage(template)
    const msg: ChatMessage = {
      role: 'assistant',
      content: `Template "${TEMPLATE_LABELS[id]}" cargado. Tiene ${template.sections.length} secciones. Puedes pedirme cambios describiendo lo que quieres ajustar.`,
      pageConfig: template,
    }
    addMessage(msg)
  }

  const handleSubmit = async () => {
    const text = input.trim()
    if (!text || isGenerating) return

    const userMsg: ChatMessage = { role: 'user', content: text }
    addMessage(userMsg)
    setInput('')
    setGenerating(true)

    try {
      const apiMessages = messages.map((m) => ({ role: m.role, content: m.content }))

      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, userMessage: text }),
      })

      if (!res.ok) {
        const err = (await res.json()) as { error?: string }
        addMessage({
          role: 'assistant',
          content: `Error: ${err.error ?? 'No se pudo generar la landing page.'}`,
        })
        return
      }

      const data = (await res.json()) as { pageConfig: import('@/types/silicon').PageConfig }
      const pageConfig = data.pageConfig

      setCurrentPage(pageConfig)
      addMessage({
        role: 'assistant',
        content: `¡Listo! "${pageConfig.name}" generada con ${pageConfig.sections.length} secciones. Puedes pedirme ajustes o usar el panel derecho para explorar.`,
        pageConfig,
      })
    } catch {
      addMessage({
        role: 'assistant',
        content: 'Error de conexión. Verifica que ANTHROPIC_API_KEY está configurada en .env.local',
      })
    } finally {
      setGenerating(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void handleSubmit()
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[--si-body-bg]">
      {/* LEFT — Chat */}
      <aside className="flex w-[400px] shrink-0 flex-col border-r border-[--si-border-color] bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[--si-border-color] px-4 py-3">
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[--si-primary]"
            >
              <span className="text-xs font-bold text-white">S</span>
            </a>
            <div>
              <p className="text-sm font-bold leading-none text-[--si-heading-color]">
                Silicon Agent
              </p>
              <p className="mt-0.5 text-xs text-[--si-gray-400]">Describe tu landing page</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Color picker */}
            <label
              className="relative cursor-pointer"
              title={`Color primario: ${primaryColor}`}
            >
              <div
                className="h-7 w-7 rounded-full border-2 border-white shadow ring-1 ring-[--si-border-color] transition-transform hover:scale-110"
                style={{ backgroundColor: primaryColor }}
              />
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </label>

            {/* Dark mode */}
            <button
              onClick={toggleDark}
              title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[--si-border-color] text-sm transition-colors hover:border-[--si-primary] hover:text-[--si-primary]"
            >
              {isDark ? '☀' : '◑'}
            </button>

            {/* Reset */}
            <button
              onClick={reset}
              title="Limpiar chat e historial"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[--si-border-color] text-xs text-[--si-gray-500] transition-colors hover:border-red-300 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Template chips */}
        <div className="border-b border-[--si-border-color] px-4 py-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[--si-gray-400]">
            Templates rápidos
          </p>
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(TEMPLATES) as TemplateId[]).map((id) => (
              <button
                key={id}
                onClick={() => loadTemplate(id)}
                className="rounded-full bg-[--si-secondary] px-2.5 py-1 text-xs font-medium text-[--si-gray-700] transition-colors hover:bg-[--si-primary] hover:text-white"
              >
                {TEMPLATE_LABELS[id]}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.length === 0 && (
            <div className="whitespace-pre-line rounded-xl bg-[--si-secondary] px-4 py-3 text-sm text-[--si-gray-700]">
              {WELCOME_MESSAGE}
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'rounded-tr-sm bg-[--si-primary] text-white'
                    : 'rounded-tl-sm bg-[--si-secondary] text-[--si-gray-700]'
                }`}
              >
                <p className="whitespace-pre-line">{msg.content}</p>
                {msg.pageConfig !== undefined && (
                  <p className="mt-1.5 text-xs opacity-70">
                    ✓ {msg.pageConfig.sections.length} secciones · {msg.pageConfig.templateId}
                  </p>
                )}
              </div>
            </div>
          ))}

          {isGenerating && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-tl-sm bg-[--si-secondary] px-4 py-3">
                <div className="flex gap-1">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="h-2 w-2 animate-bounce rounded-full bg-[--si-gray-400]"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-[--si-border-color] p-4">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe tu landing page... (Enter para enviar, Shift+Enter para nueva línea)"
              rows={2}
              disabled={isGenerating}
              className="flex-1 resize-none rounded-xl border border-[--si-border-color] bg-white px-3 py-2.5 text-sm text-[--si-body-color] placeholder:text-[--si-gray-400] focus:border-[--si-primary] focus:outline-none focus:ring-2 focus:ring-[--si-primary-faded] disabled:opacity-60"
            />
            <button
              onClick={() => void handleSubmit()}
              disabled={!input.trim() || isGenerating}
              className="shrink-0 rounded-xl bg-[--si-primary] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? '···' : '→'}
            </button>
          </div>
        </div>
      </aside>

      {/* RIGHT — Preview */}
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Preview header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[--si-border-color] bg-white px-6 py-3">
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-[--si-heading-color]">Preview</p>
            {currentPage !== null && (
              <>
                <span className="rounded-full bg-[--si-primary-faded] px-2.5 py-0.5 text-xs font-semibold text-[--si-primary]">
                  {currentPage.name}
                </span>
                <span className="text-xs text-[--si-gray-400]">
                  {currentPage.sections.length} secciones
                </span>
              </>
            )}
          </div>

          <div className="flex gap-2">
            <button
              disabled={currentPage === null}
              className="rounded-lg border border-[--si-border-color] px-3 py-1.5 text-xs font-semibold text-[--si-gray-700] transition-colors hover:border-[--si-primary] hover:text-[--si-primary] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Export Next.js
            </button>
            <button
              disabled={currentPage === null}
              className="rounded-lg bg-[--si-primary] px-3 py-1.5 text-xs font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Export HTML
            </button>
          </div>
        </div>

        {/* Preview content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {currentPage !== null ? (
            <PageRenderer config={currentPage} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-7xl font-black text-[--si-gray-200]">⬡</div>
                <p className="text-sm font-semibold text-[--si-gray-500]">
                  Tu landing page aparecerá aquí
                </p>
                <p className="mt-1 text-xs text-[--si-gray-400]">
                  Describe tu proyecto en el chat o selecciona un template
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
