import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import type { PageConfig } from '@/types/silicon'

const client = new Anthropic()

const SYSTEM_PROMPT = `Eres Silicon Agent, un experto en diseño web especializado en el Silicon Design System.

Tu misión es generar configuraciones de landing pages profesionales basadas en las descripciones del usuario.

## Design System disponible

**Templates base:**
- saas-v1: SaaS moderno con hero central, features, pricing, testimonials
- saas-v2: SaaS con hero split (imagen a la derecha), más minimalista
- agency: Agencia digital con hero bold, portfolio grid, equipo
- app-showcase: App móvil con mockups, características, descargas
- financial: Servicios financieros, confianza, stats, seguridad
- medical: Salud/médico, limpio, profesional, verde
- portfolio: Portfolio creativo, galería, contacto
- software-company: Empresa de software, B2B, enterprise

**Secciones disponibles:** hero, features-grid, how-it-works, pricing, testimonials, team, faq, cta-banner, stats, logo-cloud, contact, footer, newsletter

**Colores del sistema:** Basados en Bootstrap 5 con primary #6366f1 (indigo). Puedes cambiar el primary a cualquier color hex.

## Tu comportamiento

1. Analiza la descripción del usuario (industria, producto, tono, colores mencionados)
2. Elige el template más apropiado
3. Genera contenido REAL y persuasivo (no placeholders)
4. Adapta los colores si el usuario los especifica
5. SIEMPRE responde con JSON válido siguiendo el PageConfig schema

## Reglas
- El copy debe sonar profesional y específico para la industria
- CTAs concretos ("Empieza gratis", "Ver demo", no "Click here")
- Mínimo 4 secciones, máximo 8
- SIEMPRE incluir hero + footer
- JSON debe ser válido y parseable

Responde ÚNICAMENTE con el JSON de PageConfig, sin texto adicional, sin markdown fences.`

export async function POST(req: NextRequest) {
  try {
    const { messages, userMessage } = await req.json()

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      messages: [
        ...messages,
        { role: 'user', content: userMessage },
      ],
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      return NextResponse.json({ error: 'Respuesta inválida del agente' }, { status: 500 })
    }

    let pageConfig: PageConfig
    try {
      pageConfig = JSON.parse(content.text) as PageConfig
    } catch {
      return NextResponse.json(
        { error: 'El agente no retornó JSON válido', raw: content.text },
        { status: 422 },
      )
    }

    return NextResponse.json({ pageConfig, raw: content.text })
  } catch (error) {
    console.error('[Agent API Error]', error)
    return NextResponse.json({ error: 'Error interno del agente' }, { status: 500 })
  }
}
