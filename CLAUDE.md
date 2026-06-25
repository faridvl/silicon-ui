# Silicon System — CLAUDE.md

> Harness de referencia para Claude Code. Leer siempre antes de hacer cambios.

## ¿Qué es este proyecto?

Monorepo que convierte el template WordPress **Silicon v1.7.0** en un sistema de diseño React reutilizable, con un agente de IA que genera landing pages completas a partir de una descripción de texto.

**Flujo completo:**
1. `packages/silicon-ui` → librería de componentes React (instalable vía npm/workspace)
2. `apps/builder` → app Next.js con agente Claude que genera `PageConfig` JSON
3. Proyectos hijo → cada cliente obtiene un Next.js independiente con `@silicon/ui` instalado

**Referencia visual del design system:** `c:\Users\Personal\Desktop\themeforest-THIkwW5z-silicon-multipurpose-technology-wordpress-theme (1)\silicon-v1.7.0`

---

## Estructura del monorepo

```
silicon-system/
├── apps/
│   └── builder/                    ← Next.js 15 — UI del agente + previewer
│       ├── src/app/                ← App Router
│       │   ├── page.tsx            ← Home / landing del builder
│       │   ├── builder/page.tsx    ← Interfaz principal: chat + preview
│       │   ├── components/page.tsx ← Catálogo de componentes (próximo)
│       │   └── api/agent/route.ts  ← API Route del Claude Agent
│       ├── src/types/silicon.ts    ← Tipos: PageConfig, SectionConfig, etc.
│       ├── src/store/builder.store.ts ← Zustand store del builder
│       ├── tailwind.config.ts      ← Usa silicon-preset + content paths
│       └── src/app/globals.css     ← CSS tokens de Silicon
│
├── packages/
│   ├── silicon-ui/                 ← LA LIBRERÍA — npm installable
│   │   ├── src/
│   │   │   ├── components/         ← Un directorio por componente
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Badge/
│   │   │   │   ├── Card/
│   │   │   │   └── index.ts        ← Re-exports de todos los componentes
│   │   │   ├── tokens/
│   │   │   │   └── index.css       ← CSS custom properties (fuente de verdad de colores)
│   │   │   ├── hooks/              ← Hooks compartidos (useMediaQuery, useDarkMode, etc.)
│   │   │   ├── lib/
│   │   │   │   └── utils.ts        ← cn() helper (clsx + tailwind-merge)
│   │   │   └── index.ts            ← Barrel export de toda la librería
│   │   ├── tsup.config.ts          ← Build: CJS + ESM + types
│   │   └── package.json            ← name: "@silicon/ui"
│   │
│   ├── config-typescript/          ← tsconfig compartido
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   └── react-library.json
│   │
│   └── config-tailwind/            ← Tailwind preset de Silicon
│       └── silicon-preset.ts       ← Colores, fonts, shadows, breakpoints de Silicon
│
├── turbo.json                      ← Pipeline de Turborepo
├── pnpm-workspace.yaml
├── package.json                    ← Root: scripts globales
└── CLAUDE.md                       ← Este archivo
```

---

## Comandos

```bash
# Instalar todas las dependencias (desde raíz)
pnpm install

# Desarrollo: todos los packages en paralelo
pnpm dev

# Solo el builder
pnpm --filter @silicon/builder dev

# Solo silicon-ui en watch mode
pnpm --filter @silicon/ui dev

# Build completo (respeta dependencias con Turborepo)
pnpm build

# Type check global
pnpm type-check

# Formatear código
pnpm format
```

---

## Convenciones de documentación

> **Regla obligatoria:** Después de cada componente o fase completada:
> 1. `CLAUDE.md` — marcar el ítem como ✅, actualizar el estado de la fase
> 2. `README.md` — actualizar la tabla de componentes y el roadmap
> 3. Hacer **commit + push** con los cambios del componente y los docs juntos en el mismo commit

---

## Convenciones de código

### TypeScript
- `strict: true` en todos los paquetes — sin excepciones
- `exactOptionalPropertyTypes: true` — no pasar `undefined` donde no se acepta
- No usar `any`. Si es necesario, usar `unknown` y narrowing
- Props interfaces con sufijo `Props`: `ButtonProps`, `CardProps`
- Tipos del dominio en `src/types/silicon.ts` (PageConfig, SectionConfig, etc.)

### Componentes React (silicon-ui)
- Siempre `React.forwardRef` para componentes HTML nativos
- Siempre `displayName` en componentes con forwardRef
- Variantes con `cva` (class-variance-authority) — nunca condiciones ternarias inline para clases
- `cn()` de `lib/utils.ts` para merge de clases — nunca template literals crudos
- Un directorio por componente: `ComponentName/ComponentName.tsx` + `ComponentName/index.ts`
- El `index.ts` solo re-exporta, no tiene lógica

### Nomenclatura
```
Componentes:    PascalCase         (Button, HeroSection, PricingCard)
Hooks:          camelCase + use    (useBuilderStore, useDarkMode)
Tipos:          PascalCase + sufijo descriptivo (PageConfig, ButtonProps, HeroVariant)
Archivos:       PascalCase para componentes, camelCase para utils/hooks
CSS variables:  --si-* prefix      (--si-primary, --si-border-color)
Tailwind:       clases de Tailwind + css variables via [--si-*]
```

### Imports (orden)
```typescript
// 1. React
import * as React from 'react'

// 2. Next.js
import { useRouter } from 'next/navigation'

// 3. Third-party
import { motion } from 'framer-motion'

// 4. Workspace packages
import { Button } from '@silicon/ui'

// 5. Internos (@/ alias)
import { useBuilderStore } from '@/store/builder.store'
import type { PageConfig } from '@/types/silicon'
```

### CSS / Tokens
- Los colores de Silicon son CSS custom properties: `--si-primary`, `--si-body-bg`, etc.
- En Tailwind usarlos como: `bg-[--si-primary]`, `text-[--si-heading-color]`
- **Nunca** hardcodear colores hex en componentes — siempre usar el token
- Dark mode: clase `.dark` en `<html>` — los tokens cambian automáticamente

---

## Arquitectura del AI Agent

### Flujo
```
Usuario describe → POST /api/agent → Claude Sonnet → PageConfig JSON → Builder renderiza
```

### Archivos clave del agente
- `apps/builder/src/app/api/agent/route.ts` — API Route, system prompt, llamada a Anthropic
- `apps/builder/src/types/silicon.ts` — Schema del PageConfig (contrato agente↔builder)
- `apps/builder/src/store/builder.store.ts` — Estado global del chat + página actual

### Variable de entorno requerida
```
ANTHROPIC_API_KEY=sk-ant-...
```
Crear `apps/builder/.env.local` con esta variable antes de levantar el builder.

### PageConfig — el contrato central
Todo lo que genera el agente es un `PageConfig`. Si cambias este tipo, actualiza:
1. `src/types/silicon.ts` — la definición
2. `src/app/api/agent/route.ts` — el system prompt del agente
3. Los componentes de preview que consumen el config

---

## Plan de desarrollo y estado actual

### FASE 1 — Fundación ✅ COMPLETA
- [x] Setup monorepo (Turborepo + pnpm)
- [x] Config TypeScript compartida
- [x] Tailwind preset con tokens de Silicon
- [x] CSS tokens (`--si-*` custom properties)
- [x] `Button` component con CVA
- [x] `Badge` component con CVA
- [x] `Card` component (composable)
- [x] App builder (Next.js 15) con skeleton UI
- [x] `PageConfig` types definidos
- [x] Zustand store del builder
- [x] API route del agente (esqueleto)
- [x] 25 componentes base de silicon-ui (todos con type-check ok)
- [x] Dependencias instaladas y compilación verificada

### FASE 2 — Section Components 🔄 EN PROGRESO
Secciones completas como `HeroSection`, `FeaturesGrid`, `PricingSection`, etc.
Cada sección acepta su config type de `silicon.ts` como props.

Orden de prioridad:
1. ✅ `HeroSection` — 5 variantes (saas, agency, app, financial, minimal), media support, decorative bg
2. ✅ `FeaturesGrid` — variantes light/dark/gray, iconStyle boxed/circle/flat, columns 2/3/4
3. ✅ `PricingSection` — variantes light/dark/gray, toggle mensual/anual, plan destacado
4. ✅ `TestimonialsCarousel` — variantes light/dark/gray, layouts carousel/grid, rating stars, animación framer-motion
5. `CTABanner`
6. `StatsSection`
7. `FAQAccordion`
8. `LogoCloud`
9. `FooterSection`
10. `HowItWorksSteps`

### FASE 3 — Templates ⏳ PENDIENTE
10 templates que componen secciones: saas-v1, saas-v2, agency, app-showcase, financial, medical, portfolio, software-company.

### FASE 4 — Builder UI completo ⏳ PENDIENTE
- Chat funcional con el agente
- Preview en tiempo real de `PageConfig`
- Dark/light mode toggle
- Panel de edición de colores
- Historial de chats

### FASE 5 — Export System ⏳ PENDIENTE
- Export como proyecto Next.js standalone
- Export como HTML estático
- Export ZIP

### FASE 6 — Developer Experience ⏳ PENDIENTE
- **Storybook** en `packages/silicon-ui` — catálogo aislado por componente con controles interactivos (variant, size, loading, etc.) y docs automáticos
- **Página `/components`** en `apps/builder` — vista rápida integrada en el builder para ver componentes en contexto con el design system real
- Ambos conviven: Storybook en `localhost:6006`, `/components` en `localhost:3000/components`
- Storybook deployable en GitHub Pages como documentación pública de `@silicon/ui`

---

## Componentes de silicon-ui (Fase 1 — todos completos ✅)

```
✅ Accordion     — compound + Context, animación CSS grid-rows
✅ Alert         — con AlertTitle y AlertDescription
✅ AspectRatio   — wrapper con padding-bottom trick
✅ Avatar        — con AvatarImage y AvatarFallback
✅ Badge
✅ Breadcrumb    — composable (List, Item, Link, Page, Separator)
✅ Button        — con loading state e iconLeft/iconRight
✅ Card          — composable (Header, Title, Description, Content, Footer)
✅ Carousel      — compound + Context, framer-motion (sin Embla)
✅ Checkbox      — con label integrado
✅ Dropdown      — compound + Context, framer-motion, click-outside
✅ Icon          — wrapper Boxicons (regular / solid / logos)
✅ Input         — con Textarea, Label, FormGroup, FormHint, FormError
✅ Modal         — createPortal + framer-motion, Escape key, body scroll lock
✅ Pagination    — con generación de páginas y ellipsis
✅ Progress      — con variantes de color
✅ Radio         — con label integrado (en Checkbox/)
✅ Select        — native <select> con estilos Silicon
✅ Separator     — horizontal / vertical
✅ Skeleton      — animate-pulse
✅ Spinner       — border-based, accesible con sr-only label
✅ Switch        — CSS-only toggle (sin JS extra), tamaños sm/md/lg
✅ Table         — composable (Header, Body, Footer, Row, Head, Cell, Caption)
✅ Tabs          — compound + Context
✅ Toast         — createPortal + useToast hook + ToastProvider, 6 posiciones
✅ Tooltip       — standalone y compound API
```

### Notas de implementación relevantes
- `Carousel` usa framer-motion (no Embla) — suficiente para el caso de uso actual
- `Icon` requiere que el consumer importe el CSS de Boxicons externamente
- `Modal` y `Toast` tienen guard SSR (`useState mounted`) para `createPortal`
- `Dropdown` separa el `motion.div` de animación del `div` de ref para respetar `exactOptionalPropertyTypes: true`

---

## Cómo crear un nuevo componente en silicon-ui

1. Crear directorio: `packages/silicon-ui/src/components/NombreComponente/`
2. Crear `NombreComponente.tsx` con `forwardRef` + CVA para variantes
3. Crear `index.ts` que re-exporta del `.tsx`
4. Agregar el export en `packages/silicon-ui/src/components/index.ts`
5. Verificar que el tipo de props es exportado también

### Template de componente
```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const componentVariants = cva('base-classes', {
  variants: { variant: { default: 'classes' } },
  defaultVariants: { variant: 'default' },
})

export interface NombreComponenteProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const NombreComponente = React.forwardRef<HTMLDivElement, NombreComponenteProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(componentVariants({ variant }), className)} {...props} />
  ),
)
NombreComponente.displayName = 'NombreComponente'

export { NombreComponente, componentVariants }
```

---

## Cómo crear un proyecto hijo (landing de cliente)

```bash
# 1. Crear proyecto nuevo
npx create-next-app@latest landing-cliente --typescript --tailwind --app

# 2. Instalar silicon-ui (cuando esté publicado en npm)
npm install @silicon/ui

# 3. O instalar localmente durante desarrollo
# En package.json del cliente:
# "@silicon/ui": "file:../../silicon-system/packages/silicon-ui"

# 4. Importar estilos en globals.css
# @import '@silicon/ui/styles';

# 5. Usar componentes
# import { Button, Card, Badge } from '@silicon/ui'
```

---

## Source del design system original

El tema WordPress original está en:
`c:\Users\Personal\Desktop\themeforest-THIkwW5z-silicon-multipurpose-technology-wordpress-theme (1)\silicon-v1.7.0`

Archivos de referencia clave:
- `assets/scss/_variables.scss` — todos los tokens de color, spacing, tipografía
- `assets/scss/components/` — 25 archivos de estilos de componentes
- `plugins/silicon-elementor/modules/` — 35+ widgets (referencia de props y estructura)
- `dummy-data/` — 18 demos XML (referencia de qué secciones componen cada tipo de landing)

Siempre consultar el original cuando implementes un componente nuevo para asegurar fidelidad visual.
