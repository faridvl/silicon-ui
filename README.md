# Silicon UI

React component library and AI-powered landing page builder based on the **Silicon WordPress theme v1.7.0**.

## What's in this repo

```
silicon-system/
├── apps/
│   └── builder/          # Next.js 15 — AI agent UI + live preview
├── packages/
│   ├── silicon-ui/       # @silicon/ui — React component library
│   ├── config-typescript/ # Shared tsconfigs
│   └── config-tailwind/  # Shared Tailwind preset with Silicon tokens
```

## The idea

`@silicon/ui` is a standalone installable component library. For each client project you create an independent Next.js app and install `@silicon/ui` as a dependency — each landing page deploys separately with its own domain.

The **builder** app is an AI agent (powered by Claude) that takes a text description and generates a full `PageConfig` JSON, which the builder renders as a live preview. From there you can export a ready-to-deploy Next.js project.

## Getting started

**Requirements:** Node 20+, pnpm 10+

```bash
# Install all dependencies
pnpm install

# Start the builder (http://localhost:3000)
pnpm dev
```

Before running, create `apps/builder/.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

## Using @silicon/ui in a client project

```bash
# In your client project
npm install @silicon/ui
```

```tsx
import { Button, Card, Badge } from '@silicon/ui'

export default function Page() {
  return (
    <Card>
      <Badge variant="primary">New</Badge>
      <Button variant="primary" size="lg">Get started</Button>
    </Card>
  )
}
```

Import the design tokens (CSS custom properties) in your global CSS:

```css
@import '@silicon/ui/styles';
```

## Component library — current status

### Base components (Fase 1 — all done ✅)

| Component | Notes |
|-----------|-------|
| Accordion | Compound + Context, CSS grid-rows animation |
| Alert | AlertTitle + AlertDescription |
| AspectRatio | Padding-bottom trick |
| Avatar | AvatarImage + AvatarFallback |
| Badge | CVA variants |
| Breadcrumb | Composable (List, Item, Link, Page, Separator) |
| Button | Loading state, iconLeft/iconRight |
| Card | Composable (Header, Title, Description, Content, Footer) |
| Carousel | Compound + Context, framer-motion |
| Checkbox | With integrated label |
| Dropdown | Compound + Context, framer-motion, click-outside |
| Icon | Boxicons wrapper (regular / solid / logos) |
| Input / Form | Input, Textarea, Label, FormGroup, FormHint, FormError |
| Modal | createPortal + framer-motion, Escape key, body scroll lock |
| Pagination | Page generation with ellipsis |
| Progress | Color variants |
| Radio | With integrated label |
| Select | Native `<select>` with Silicon styles |
| Separator | Horizontal / vertical |
| Skeleton | animate-pulse |
| Spinner | Border-based, accessible sr-only label |
| Switch | CSS-only toggle, sizes sm/md/lg |
| Table | Composable (Header, Body, Footer, Row, Head, Cell, Caption) |
| Tabs | Compound + Context |
| Toast | createPortal + useToast hook + ToastProvider, 6 positions |
| Tooltip | Standalone and compound API |

### Section components (Fase 2 — in progress 🔄)

| Component | Variants | Status |
|-----------|----------|--------|
| HeroSection | saas, agency, app, financial, minimal | ✅ Done |
| FeaturesGrid | light, dark, gray · icon: boxed, circle, flat | ✅ Done |
| PricingSection | light, dark, gray · monthly/annual toggle · highlighted plan | ✅ Done |
| TestimonialsCarousel | light, dark, gray · carousel/grid · rating stars | ✅ Done |
| CTABanner | primary, dark, gradient | ⏳ Pending |
| StatsSection | row, grid | ⏳ Pending |
| FAQAccordion | — | ⏳ Pending |
| LogoCloud | — | ⏳ Pending |
| FooterSection | — | ⏳ Pending |
| HowItWorksSteps | — | ⏳ Pending |

## Development roadmap

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Foundation — 25 base components + design tokens | ✅ Done |
| 2 | Section components — HeroSection, FeaturesGrid, PricingSection, etc. | 🔄 In progress |
| 3 | Page templates — 10 full templates (SaaS, Agency, Financial…) | ⏳ Pending |
| 4 | Builder UI — functional chat + live preview + color editor | ⏳ Pending |
| 5 | Export system — Next.js project, static HTML, ZIP | ⏳ Pending |
| 6 | Developer experience — Storybook + `/components` catalog page | ⏳ Pending |

## Tech stack

- **Monorepo:** Turborepo + pnpm workspaces
- **Components:** React 18 + TypeScript strict + CVA + Tailwind CSS
- **Builder:** Next.js 15 (App Router) + Zustand + Vercel AI SDK
- **AI Agent:** Anthropic Claude (claude-sonnet-4-6)
- **Animations:** Framer Motion
- **Design source:** Silicon WordPress theme v1.7.0 (Bootstrap 5 based)

## Commands

```bash
pnpm dev           # Start all packages in watch mode
pnpm build         # Build all packages
pnpm type-check    # TypeScript check across the monorepo
pnpm format        # Prettier format
pnpm --filter @silicon/ui dev      # Watch silicon-ui only
pnpm --filter @silicon/builder dev # Watch builder only
```

## Design tokens

All Silicon color/spacing/shadow values are exposed as CSS custom properties:

```css
--si-primary        /* #6366f1 — indigo */
--si-secondary      /* #eff2fc */
--si-success        /* #22c55e */
--si-warning        /* #ffba08 */
--si-danger         /* #ef4444 */
--si-dark           /* #0b0f19 */
--si-body-bg        /* switches in dark mode */
--si-heading-color  /* switches in dark mode */
--si-border-color   /* switches in dark mode */
```

In Tailwind: `bg-[--si-primary]`, `text-[--si-heading-color]`, etc.

## License

Private — based on Silicon theme license (ThemeForest Regular/Extended License).
