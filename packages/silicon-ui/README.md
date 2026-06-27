# @silicon/ui

React component library built on the **Silicon v1.7.0** design system — 35+ components, 10 page sections, Tailwind CSS, dark mode, and full TypeScript support.

---

## Installation

### From git (recommended while pre-release)

```bash
# pnpm
pnpm add "github:faridvl/silicon-ui#path:packages/silicon-ui"

# npm
npm install "https://gitpkg.now.sh/faridvl/silicon-ui/packages/silicon-ui?main"
```

### From npm (coming soon)

```bash
pnpm add @silicon/ui
```

---

## Setup

### 1. Import the CSS tokens

In your root `globals.css` (or `app/layout.tsx`):

```css
@import '@silicon/ui/styles';
```

Or in your layout:

```tsx
import '@silicon/ui/styles'
```

### 2. Configure Tailwind

Add the silicon-ui source to your `tailwind.config.ts` content paths so Tailwind picks up the class names used by the components:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@silicon/ui/dist/**/*.{js,mjs}',
  ],
} satisfies Config
```

### 3. Dark mode (optional)

Silicon uses the `class` strategy. Toggle dark mode by adding/removing the `dark` class on `<html>`:

```ts
document.documentElement.classList.toggle('dark')
```

---

## Usage

```tsx
import { Button, Badge, Card, CardHeader, CardTitle, CardContent } from '@silicon/ui'
import '@silicon/ui/styles'

export default function Page() {
  return (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Dashboard</CardTitle>
          <Badge variant="success">Live</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get started</Button>
        <Button variant="outline" className="ml-2">Learn more</Button>
      </CardContent>
    </Card>
  )
}
```

---

## Components

### Base UI (22 components)

| Component | Variants / Notes |
|-----------|-----------------|
| `Button` | `primary` `secondary` `outline` `ghost` `danger` `dark` `light` · sizes `sm` `md` `lg` `xl` `icon` · `loading` prop |
| `Badge` | `primary` `success` `warning` `danger` `info` `dark` `light` · sizes `sm` `md` |
| `Card` | Composable: `CardHeader` `CardTitle` `CardDescription` `CardContent` `CardFooter` |
| `Alert` | `default` `primary` `success` `warning` `danger` `info` · `AlertTitle` `AlertDescription` |
| `Avatar` | Sizes `xs` `sm` `md` `lg` `xl` · `AvatarImage` `AvatarFallback` |
| `Input` | With `Label` `Textarea` `FormGroup` `FormHint` `FormError` |
| `Select` | Sizes `sm` `md` `lg` · `error` prop |
| `Checkbox` | With integrated label |
| `Radio` | With integrated label (exported from Checkbox) |
| `Switch` | Sizes `sm` `md` `lg` · CSS-only, no JS |
| `Accordion` | Compound: `AccordionItem` `AccordionTrigger` `AccordionContent` · `type="single\|multiple"` |
| `Tabs` | Compound: `TabsList` `TabsTrigger` `TabsContent` |
| `Modal` | `createPortal` + framer-motion · sizes `sm` `md` `lg` `xl` `full` |
| `Toast` | `ToastProvider` + `useToast()` hook · 6 positions · `variant` prop |
| `Dropdown` | Compound: `DropdownTrigger` `DropdownContent` `DropdownItem` `DropdownLabel` `DropdownSeparator` |
| `Tooltip` | Standalone API: `<Tooltip content="..." side="top">` |
| `Pagination` | `page` `totalPages` `onPageChange` `siblingCount` |
| `Progress` | `value` `max` · variants `primary` `success` `warning` `danger` `info` |
| `Spinner` | Sizes `sm` `md` `lg` `xl` · `label` for a11y |
| `Skeleton` | `animate-pulse` div |
| `Breadcrumb` | Composable: `BreadcrumbList` `BreadcrumbItem` `BreadcrumbLink` `BreadcrumbPage` `BreadcrumbSeparator` |
| `Table` | Composable: `TableHeader` `TableBody` `TableFooter` `TableRow` `TableHead` `TableCell` `TableCaption` |
| `Separator` | `horizontal` (default) · `vertical` |
| `Icon` | Boxicons wrapper · `name` `type="regular\|solid\|logos"` `size` |
| `AspectRatio` | `ratio` prop (e.g. `16/9`) |
| `Carousel` | Compound: `CarouselContent` `CarouselItem` `CarouselPrevious` `CarouselNext` `CarouselIndicators` · `loop` `autoPlay` |

### Page Sections (10 components)

| Component | Variants |
|-----------|----------|
| `HeroSection` | `saas` `agency` `app` `financial` `minimal` |
| `FeaturesGrid` | `light` `dark` `gray` · `iconStyle`: `boxed` `circle` `flat` · `columns`: `2` `3` `4` |
| `PricingSection` | `light` `dark` `gray` · monthly/annual toggle |
| `TestimonialsCarousel` | `light` `dark` `gray` · `layout`: `carousel` `grid` |
| `CTABanner` | `primary` `dark` `gradient` |
| `StatsSection` | `light` `dark` `gray` · `layout`: `row` `grid` |
| `FAQAccordion` | `light` `dark` `gray` |
| `LogoCloud` | `light` `dark` `gray` |
| `FooterSection` | `light` `dark` |
| `HowItWorksSteps` | `light` `dark` `gray` |

---

## Customization

### Change primary color at runtime

All components reference `--si-primary`. Swap it anywhere in your CSS or via JS:

```css
:root {
  --si-primary: #6366f1; /* indigo (default) */
}
```

```ts
document.documentElement.style.setProperty('--si-primary', '#0ea5e9')
```

### Full list of CSS tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--si-primary` | `#6366f1` | Brand color |
| `--si-body-bg` | `#ffffff` | Page background |
| `--si-body-color` | `#6b7280` | Body text |
| `--si-heading-color` | `#0b0f19` | Headings |
| `--si-border-color` | `#e5e7eb` | Borders |
| `--si-card-bg` | `#ffffff` | Card surface |
| `--si-success` | `#22c55e` | Success state |
| `--si-danger` | `#ef4444` | Error state |
| `--si-warning` | `#ffba08` | Warning state |
| `--si-dark` | `#0b0f19` | Dark sections |

---

## TypeScript

All props interfaces are exported:

```ts
import type { ButtonProps, HeroSectionProps, PricingPlan } from '@silicon/ui'
```

The library is built with `strict: true` and `exactOptionalPropertyTypes: true`.

---

## Storybook

To explore components interactively, clone this repo and run Storybook:

```bash
git clone https://github.com/faridvl/silicon-ui.git
cd silicon-ui
pnpm install
pnpm --filter @silicon/ui storybook
# → opens at http://localhost:6006
```

---

## License

MIT
