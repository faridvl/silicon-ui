# @silicon/ui — AI Reference

> Paste this file into your project's `CLAUDE.md` or pass it as context to any AI agent.
> It covers everything needed to use `@silicon/ui` without reading source code.

---

## Installation

```bash
pnpm add "github:faridvl/silicon-ui#path:packages/silicon-ui"
```

In `globals.css` or layout:
```css
@import '@silicon/ui/styles';
```

In `tailwind.config.ts` content:
```ts
'./node_modules/@silicon/ui/dist/**/*.{js,mjs}'
```

---

## Import pattern

All components export from the package root:

```tsx
import { Button, Badge, HeroSection, useToast } from '@silicon/ui'
```

---

## Design rules

- Colors: **never hardcode hex**. Use CSS tokens: `text-[--si-primary]`, `bg-[--si-body-bg]`
- Classes: always compose with `cn()` from `@silicon/ui` if building on top
- Dark mode: `class` strategy — toggle `.dark` on `<html>`
- Primary color: override `--si-primary` CSS var to rebrand instantly

---

## Base components

### Button
```tsx
<Button variant="primary" size="md" loading={false} iconLeft={<Icon />}>
  Label
</Button>
```
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `danger` | `dark` | `light`
- `size`: `sm` | `md` | `lg` | `xl` | `icon`
- `loading`: shows spinner, disables button
- `iconLeft` / `iconRight`: any ReactNode

### Badge
```tsx
<Badge variant="success" size="sm">New</Badge>
```
- `variant`: `primary` | `success` | `warning` | `danger` | `info` | `dark` | `light`
- `size`: `sm` | `md`

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>body</CardContent>
  <CardFooter>footer</CardFooter>
</Card>
```

### Alert
```tsx
<Alert variant="success">
  <AlertTitle>Done</AlertTitle>
  <AlertDescription>Your changes were saved.</AlertDescription>
</Alert>
```
- `variant`: `default` | `primary` | `success` | `warning` | `danger` | `info`

### Input / Form
```tsx
<FormGroup>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <FormHint>We never share your email.</FormHint>
  <FormError>Please enter a valid email.</FormError>
</FormGroup>

<Textarea rows={4} placeholder="Message..." />
```

### Select
```tsx
<Select inputSize="md" error={false}>
  <option value="a">Option A</option>
</Select>
```
- `inputSize`: `sm` | `md` | `lg`

### Checkbox / Radio
```tsx
<Checkbox label="Accept terms" defaultChecked />
<Radio name="plan" value="pro" label="Pro plan" />
```

### Switch
```tsx
<Switch label="Enable notifications" size="md" />
```
- `size`: `sm` | `md` | `lg`

### Accordion
```tsx
<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer.</AccordionContent>
  </AccordionItem>
</Accordion>
```
- `type`: `single` | `multiple`

### Tabs
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Modal
```tsx
const [open, setOpen] = useState(false)

<Modal open={open} onOpenChange={setOpen} size="md">
  <ModalHeader>
    <ModalTitle>Confirm</ModalTitle>
    <ModalDescription>This cannot be undone.</ModalDescription>
  </ModalHeader>
  <ModalBody>body content</ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger">Delete</Button>
  </ModalFooter>
</Modal>
```
- `size`: `sm` | `md` | `lg` | `xl` | `full`

### Toast
```tsx
// Wrap your app:
<ToastProvider position="bottom-right">
  <App />
</ToastProvider>

// In any component:
const { toast } = useToast()
toast({ title: 'Saved!', description: 'Changes persisted.', variant: 'success' })
```
- `position`: `top-left` | `top-center` | `top-right` | `bottom-left` | `bottom-center` | `bottom-right`
- `variant`: `default` | `success` | `warning` | `danger` | `info`

### Dropdown
```tsx
<Dropdown align="start">
  <DropdownTrigger asChild>
    <Button variant="secondary">Options</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownLabel>Account</DropdownLabel>
    <DropdownItem>Profile</DropdownItem>
    <DropdownSeparator />
    <DropdownItem className="text-[--si-danger]">Sign out</DropdownItem>
  </DropdownContent>
</Dropdown>
```
- `align`: `start` | `center` | `end`

### Tooltip
```tsx
<Tooltip content="More info" side="top">
  <Button variant="ghost">?</Button>
</Tooltip>
```
- `side`: `top` | `bottom` | `left` | `right`

### Pagination
```tsx
const [page, setPage] = useState(1)
<Pagination page={page} totalPages={20} onPageChange={setPage} siblingCount={1} />
```

### Progress
```tsx
<Progress value={65} max={100} variant="primary" />
```
- `variant`: `primary` | `success` | `warning` | `danger` | `info`

### Spinner
```tsx
<Spinner size="md" label="Loading..." />
```
- `size`: `sm` | `md` | `lg` | `xl`

### Skeleton
```tsx
<Skeleton className="h-4 w-48 rounded" />
```

### Avatar
```tsx
<Avatar size="md">
  <AvatarImage src="/user.jpg" alt="John" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```
- `size`: `xs` | `sm` | `md` | `lg` | `xl`

### Table
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Acme Corp</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Breadcrumb
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Carousel
```tsx
<Carousel loop autoPlay autoPlayInterval={3000}>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselIndicators />
</Carousel>
```

### Separator
```tsx
<Separator orientation="horizontal" />
<Separator orientation="vertical" className="h-8" />
```

### Icon (Boxicons)
```tsx
// Requires Boxicons CSS loaded in the consumer project
<Icon name="rocket" type="solid" size="2xl" />
```
- `type`: `regular` | `solid` | `logos`
- `size`: `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl`

### AspectRatio
```tsx
<AspectRatio ratio={16 / 9} className="w-full rounded-xl overflow-hidden">
  <img src="..." className="h-full w-full object-cover" />
</AspectRatio>
```

---

## Page Sections

All sections accept a `variant` prop and are full-width by default.

### HeroSection
```tsx
<HeroSection
  variant="saas"
  badge="New — v2.0"
  headline="Build faster with Silicon"
  subheadline="A complete design system for React."
  ctaPrimary={{ label: 'Get started', href: '/signup' }}
  ctaSecondary={{ label: 'View demo', href: '/demo' }}
/>
```
- `variant`: `saas` | `agency` | `app` | `financial` | `minimal`
- `media`: `{ type: 'image' | 'video', src: string, alt?: string }`

### FeaturesGrid
```tsx
<FeaturesGrid
  variant="light"
  badge="Features"
  headline="Everything you need"
  subheadline="..."
  features={[{ icon: 'bolt', title: 'Fast', description: '...' }]}
  columns={3}
  iconStyle="boxed"
/>
```
- `variant`: `light` | `dark` | `gray`
- `columns`: `2` | `3` | `4`
- `iconStyle`: `boxed` | `circle` | `flat`

### PricingSection
```tsx
<PricingSection
  variant="light"
  badge="Pricing"
  headline="Simple pricing"
  plans={[
    {
      name: 'Pro',
      price: { monthly: 19, annual: 15 },
      currency: '$',
      description: '...',
      features: ['Unlimited projects', 'Priority support'],
      cta: { label: 'Start trial', href: '#' },
      highlighted: true,
      badge: 'Popular',
    }
  ]}
  annualDiscount="Save 20%"
/>
```

### TestimonialsCarousel
```tsx
<TestimonialsCarousel
  variant="gray"
  layout="grid"
  headline="What our users say"
  testimonials={[
    { quote: '...', author: 'Jane', role: 'CEO', company: 'Acme', rating: 5 }
  ]}
/>
```
- `layout`: `carousel` | `grid`

### CTABanner
```tsx
<CTABanner
  variant="gradient"
  headline="Ready to get started?"
  subheadline="Join thousands of teams building with Silicon."
  ctaPrimary={{ label: 'Start free', href: '#' }}
  ctaSecondary={{ label: 'Talk to sales', href: '#' }}
/>
```
- `variant`: `primary` | `dark` | `gradient`

### StatsSection
```tsx
<StatsSection
  variant="light"
  layout="row"
  headline="Trusted at scale"
  stats={[
    { value: '10K', label: 'Teams', suffix: '+' },
    { value: '99.9', label: 'Uptime', suffix: '%' },
  ]}
/>
```
- `layout`: `row` | `grid`

### FAQAccordion
```tsx
<FAQAccordion
  variant="light"
  badge="FAQ"
  headline="Common questions"
  items={[{ question: 'Is it free?', answer: 'Yes.' }]}
/>
```

### LogoCloud
```tsx
<LogoCloud
  variant="light"
  headline="Trusted by"
  logos={[{ name: 'Vercel', src: '/logos/vercel.svg' }]}
/>
```

### FooterSection
```tsx
<FooterSection
  variant="dark"
  logo="Acme"
  tagline="Building the future."
  columns={[
    { title: 'Product', links: [{ label: 'Features', href: '#' }] }
  ]}
  social={[{ platform: 'twitter', href: '#' }]}
  copyright="© 2025 Acme Inc."
/>
```
- Supported social platforms: `twitter` `github` `linkedin` `facebook` `instagram` `youtube`

### HowItWorksSteps
```tsx
<HowItWorksSteps
  variant="light"
  badge="How it works"
  headline="Up and running in minutes"
  steps={[
    { step: 1, title: 'Install', description: '...', icon: 'download' },
    { step: 2, title: 'Configure', description: '...', icon: 'settings' },
    { step: 3, title: 'Ship', description: '...', icon: 'rocket' },
  ]}
/>
```

---

## CSS Tokens reference

| Token | Default |
|-------|---------|
| `--si-primary` | `#6366f1` |
| `--si-primary-faded` | `rgba(99,102,241,0.12)` |
| `--si-body-bg` | `#ffffff` |
| `--si-secondary-bg` | `#f9fafb` |
| `--si-body-color` | `#6b7280` |
| `--si-heading-color` | `#0b0f19` |
| `--si-border-color` | `#e5e7eb` |
| `--si-card-bg` | `#ffffff` |
| `--si-dark` | `#0b0f19` |
| `--si-success` | `#22c55e` |
| `--si-danger` | `#ef4444` |
| `--si-warning` | `#ffba08` |
| `--si-info` | `#4c82f7` |

All tokens have dark-mode overrides via `.dark` on `<html>`.

---

## TypeScript exports

```ts
import type {
  ButtonProps, BadgeProps, CardProps, AlertProps, AvatarProps,
  InputProps, SelectProps, CheckboxProps, SwitchProps,
  AccordionProps, TabsProps, ModalProps, ToastData, DropdownProps,
  PaginationProps, ProgressProps, SpinnerProps, CarouselProps,
  HeroSectionProps, HeroVariant,
  FeaturesGridProps, FeatureItem, FeaturesVariant,
  PricingSectionProps, PricingPlan, PricingVariant,
  TestimonialsCarouselProps, TestimonialItem,
  CTABannerProps, CTABannerVariant,
  StatsSectionProps, StatItem,
  FAQAccordionProps, FAQItem,
  LogoCloudProps, LogoItem,
  FooterSectionProps, FooterColumn, FooterSocial,
  HowItWorksStepsProps, HowItWorksStep,
} from '@silicon/ui'
```
