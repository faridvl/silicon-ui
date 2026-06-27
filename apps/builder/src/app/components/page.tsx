'use client'

import * as React from 'react'
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Alert, AlertTitle, AlertDescription,
  Avatar, AvatarFallback,
  Badge,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Checkbox, Radio,
  Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownLabel, DropdownSeparator,
  Input, Textarea, Label, FormGroup, FormHint, FormError,
  Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter,
  Pagination,
  Progress,
  Select,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Tabs, TabsList, TabsTrigger, TabsContent,
  ToastProvider, useToast,
  Tooltip,
  HeroSection,
  FeaturesGrid,
  PricingSection,
  TestimonialsCarousel,
  CTABanner,
  StatsSection,
  FAQAccordion,
  LogoCloud,
  FooterSection,
  HowItWorksSteps,
} from '@silicon/ui'

// ── Helpers ──────────────────────────────────────────────────────────────────

function logoSvg(name: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 36"><text x="4" y="26" font-family="system-ui,sans-serif" font-size="16" font-weight="700" fill="#1f2937">${name}</text></svg>`
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

interface ShowBlockProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  noPad?: boolean
}

function ShowBlock({ id, title, subtitle, children, noPad }: ShowBlockProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[--si-heading-color]">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-[--si-gray-500]">{subtitle}</p>}
      </div>
      <div
        className={
          noPad
            ? 'overflow-hidden rounded-xl border border-[--si-border-color]'
            : 'rounded-xl border border-[--si-border-color] bg-[--si-secondary]/30 p-6'
        }
      >
        {children}
      </div>
    </section>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-[--si-border-color] bg-[--si-body-bg] px-6 py-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-[--si-gray-400]">{label}</span>
    </div>
  )
}

// ── Interactive demos ────────────────────────────────────────────────────────

function ModalDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>
          <ModalTitle>Confirmación de acción</ModalTitle>
          <ModalDescription>Esta operación no se puede deshacer.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-[--si-body-color]">
            ¿Estás seguro de que deseas continuar? Se eliminarán todos los datos asociados.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>Eliminar</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

function ToastDemo() {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      {(['default', 'success', 'warning', 'danger', 'info'] as const).map((v) => (
        <Button
          key={v}
          size="sm"
          variant={v === 'default' ? 'secondary' : v === 'danger' ? 'danger' : 'outline'}
          onClick={() =>
            toast({
              title: v.charAt(0).toUpperCase() + v.slice(1),
              description: `Notificación de tipo ${v}`,
              variant: v,
            })
          }
        >
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>
      ))}
    </div>
  )
}

function PaginationDemo() {
  const [page, setPage] = React.useState(3)
  return <Pagination page={page} totalPages={10} onPageChange={setPage} />
}

// ── Nav items ────────────────────────────────────────────────────────────────

const BASE_ITEMS = [
  'Button', 'Badge', 'Alert', 'Card', 'Avatar', 'Spinner', 'Skeleton', 'Progress',
  'Checkbox', 'Switch', 'Input', 'Select', 'Separator', 'Tabs', 'Accordion',
  'Modal', 'Toast', 'Tooltip', 'Breadcrumb', 'Pagination', 'Table', 'Dropdown',
]
const SECTION_ITEMS = [
  'HeroSection', 'FeaturesGrid', 'PricingSection', 'TestimonialsCarousel',
  'CTABanner', 'StatsSection', 'FAQAccordion', 'LogoCloud', 'HowItWorksSteps', 'FooterSection',
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ComponentsPage() {
  const [isDark, setIsDark] = React.useState(false)

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <ToastProvider position="bottom-right">
      <div className="flex h-screen flex-col bg-[--si-body-bg]">

        {/* ── Top Nav ── */}
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-[--si-border-color] bg-[--si-body-bg] px-6">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-[--si-primary]"
            >
              <span className="text-xs font-bold text-white">S</span>
            </a>
            <span className="text-sm font-bold text-[--si-heading-color]">Silicon UI</span>
            <Separator orientation="vertical" className="h-5" />
            <span className="text-sm text-[--si-gray-400]">Catálogo de Componentes</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/builder"
              className="text-sm text-[--si-gray-500] transition-colors hover:text-[--si-primary]"
            >
              ← Volver al Builder
            </a>
            <button
              onClick={toggleDark}
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[--si-border-color] text-sm transition-colors hover:border-[--si-primary] hover:text-[--si-primary]"
            >
              {isDark ? '☀' : '◑'}
            </button>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="flex flex-1 overflow-hidden">

          {/* ── Sidebar ── */}
          <aside className="hidden w-52 shrink-0 overflow-y-auto border-r border-[--si-border-color] p-4 lg:block">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[--si-gray-400]">
              Base
            </p>
            <ul className="mb-6 space-y-0.5">
              {BASE_ITEMS.map((name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase()}`}
                    className="block rounded-md px-2.5 py-1 text-sm text-[--si-gray-600] transition-colors hover:bg-[--si-secondary] hover:text-[--si-heading-color]"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[--si-gray-400]">
              Secciones
            </p>
            <ul className="space-y-0.5">
              {SECTION_ITEMS.map((name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase()}`}
                    className="block rounded-md px-2.5 py-1 text-sm text-[--si-gray-600] transition-colors hover:bg-[--si-secondary] hover:text-[--si-heading-color]"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Main Content ── */}
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-4xl space-y-12 p-8">

              {/* ─── BASE COMPONENTS HEADER ─── */}
              <div>
                <h1 className="text-2xl font-extrabold text-[--si-heading-color]">Componentes base</h1>
                <p className="mt-1 text-sm text-[--si-gray-500]">
                  25 componentes atómicos reutilizables del Silicon Design System.
                </p>
              </div>

              {/* ─── Button ─── */}
              <ShowBlock id="button" title="Button" subtitle="7 variantes · 5 tamaños · loading state · iconos">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(['primary', 'secondary', 'outline', 'ghost', 'danger', 'dark', 'light'] as const).map((v) => (
                      <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-end gap-2">
                    {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
                      <Button key={s} size={s}>Size {s}</Button>
                    ))}
                    <Button size="icon" title="Icon button">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button loading>Cargando</Button>
                    <Button variant="outline" disabled>Deshabilitado</Button>
                    <Button
                      variant="secondary"
                      iconLeft={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>}
                    >
                      Con icono
                    </Button>
                  </div>
                </div>
              </ShowBlock>

              {/* ─── Badge ─── */}
              <ShowBlock id="badge" title="Badge" subtitle="7 variantes · 2 tamaños">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {(['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light'] as const).map((v) => (
                      <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(['primary', 'success', 'warning'] as const).map((v) => (
                      <Badge key={v} variant={v} size="sm">Small {v}</Badge>
                    ))}
                  </div>
                </div>
              </ShowBlock>

              {/* ─── Alert ─── */}
              <ShowBlock id="alert" title="Alert" subtitle="Feedback con título y descripción">
                <div className="space-y-3">
                  {([
                    { variant: 'success' as const, title: 'Operación exitosa', desc: 'Los cambios se guardaron correctamente.' },
                    { variant: 'warning' as const, title: 'Atención requerida', desc: 'Revisa la configuración antes de continuar.' },
                    { variant: 'danger' as const, title: 'Error al procesar', desc: 'No se pudo completar la operación. Intenta de nuevo.' },
                    { variant: 'info' as const, title: 'Información', desc: 'El proceso puede tardar unos minutos en completarse.' },
                  ]).map(({ variant, title, desc }) => (
                    <Alert key={variant} variant={variant}>
                      <AlertTitle>{title}</AlertTitle>
                      <AlertDescription>{desc}</AlertDescription>
                    </Alert>
                  ))}
                </div>
              </ShowBlock>

              {/* ─── Card ─── */}
              <ShowBlock id="card" title="Card" subtitle="Composable: Header · Title · Description · Content · Footer">
                <div className="max-w-sm">
                  <Card>
                    <CardHeader>
                      <CardTitle>Plan Profesional</CardTitle>
                      <CardDescription>Para equipos en crecimiento</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-extrabold text-[--si-heading-color]">
                        $49<span className="text-base font-normal text-[--si-gray-500]">/mes</span>
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm text-[--si-body-color]">
                        <li>✓ Usuarios ilimitados</li>
                        <li>✓ 100 GB de almacenamiento</li>
                        <li>✓ Soporte prioritario 24/7</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Empezar ahora</Button>
                    </CardFooter>
                  </Card>
                </div>
              </ShowBlock>

              {/* ─── Avatar ─── */}
              <ShowBlock id="avatar" title="Avatar" subtitle="5 tamaños · con imagen y fallback">
                <div className="flex flex-wrap items-end gap-4">
                  {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                    <div key={size} className="flex flex-col items-center gap-1.5">
                      <Avatar size={size}>
                        <AvatarFallback>{size.toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-[--si-gray-400]">{size}</span>
                    </div>
                  ))}
                </div>
              </ShowBlock>

              {/* ─── Spinner ─── */}
              <ShowBlock id="spinner" title="Spinner" subtitle="Indicador de carga accesible">
                <div className="flex flex-wrap items-center gap-6">
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Spinner size="md" className="text-[--si-success]" />
                  <Spinner size="md" className="text-[--si-danger]" />
                </div>
              </ShowBlock>

              {/* ─── Skeleton ─── */}
              <ShowBlock id="skeleton" title="Skeleton" subtitle="Placeholder animado mientras carga">
                <div className="space-y-3">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <div className="flex gap-3 pt-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                </div>
              </ShowBlock>

              {/* ─── Progress ─── */}
              <ShowBlock id="progress" title="Progress" subtitle="4 variantes de color">
                <div className="space-y-3">
                  {([
                    { variant: 'primary' as const, value: 72, label: 'Primary — 72%' },
                    { variant: 'success' as const, value: 90, label: 'Success — 90%' },
                    { variant: 'warning' as const, value: 45, label: 'Warning — 45%' },
                    { variant: 'danger' as const, value: 20, label: 'Danger — 20%' },
                  ]).map(({ variant, value, label }) => (
                    <div key={variant} className="space-y-1">
                      <div className="flex justify-between text-xs text-[--si-gray-500]">
                        <span>{label}</span>
                      </div>
                      <Progress variant={variant} value={value} />
                    </div>
                  ))}
                </div>
              </ShowBlock>

              {/* ─── Checkbox ─── */}
              <ShowBlock id="checkbox" title="Checkbox & Radio" subtitle="Con label · deshabilitado">
                <div className="flex flex-wrap gap-6">
                  <div className="space-y-2">
                    <Checkbox label="Opción A" defaultChecked />
                    <Checkbox label="Opción B" />
                    <Checkbox label="Deshabilitada" disabled />
                    <Checkbox label="Checked + Disabled" defaultChecked disabled />
                  </div>
                  <div className="space-y-2">
                    <Radio name="demo" label="Radio 1" defaultChecked />
                    <Radio name="demo" label="Radio 2" />
                    <Radio name="demo" label="Deshabilitado" disabled />
                  </div>
                </div>
              </ShowBlock>

              {/* ─── Switch ─── */}
              <ShowBlock id="switch" title="Switch" subtitle="3 tamaños · CSS-only toggle">
                <div className="flex flex-wrap items-center gap-6">
                  <Switch size="sm" label="Small" defaultChecked />
                  <Switch size="md" label="Medium" defaultChecked />
                  <Switch size="lg" label="Large" defaultChecked />
                  <Switch size="md" label="Deshabilitado" disabled />
                </div>
              </ShowBlock>

              {/* ─── Input ─── */}
              <ShowBlock id="input" title="Input" subtitle="Variantes · Label · Hint · Error · Textarea">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="hola@ejemplo.com" />
                    <FormHint>Nunca compartiremos tu email.</FormHint>
                  </FormGroup>
                  <FormGroup>
                    <Label>Contraseña</Label>
                    <Input type="password" variant="error" placeholder="Min. 8 caracteres" />
                    <FormError>La contraseña es demasiado corta.</FormError>
                  </FormGroup>
                  <FormGroup>
                    <Label>Deshabilitado</Label>
                    <Input disabled placeholder="Campo deshabilitado" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Mensaje</Label>
                    <Textarea placeholder="Escribe tu mensaje aquí..." />
                  </FormGroup>
                </div>
              </ShowBlock>

              {/* ─── Select ─── */}
              <ShowBlock id="select" title="Select" subtitle="Native select con estilos Silicon">
                <div className="max-w-xs space-y-3">
                  <FormGroup>
                    <Label>País</Label>
                    <Select>
                      <option value="">Selecciona un país</option>
                      <option>España</option>
                      <option>México</option>
                      <option>Argentina</option>
                      <option>Colombia</option>
                    </Select>
                  </FormGroup>
                  <Select inputSize="sm" error>
                    <option>Error state</option>
                  </Select>
                </div>
              </ShowBlock>

              {/* ─── Separator ─── */}
              <ShowBlock id="separator" title="Separator" subtitle="Horizontal y vertical">
                <div className="space-y-4">
                  <Separator />
                  <div className="flex h-8 items-center gap-4">
                    <span className="text-sm text-[--si-gray-500]">Izquierda</span>
                    <Separator orientation="vertical" />
                    <span className="text-sm text-[--si-gray-500]">Centro</span>
                    <Separator orientation="vertical" />
                    <span className="text-sm text-[--si-gray-500]">Derecha</span>
                  </div>
                </div>
              </ShowBlock>

              {/* ─── Tabs ─── */}
              <ShowBlock id="tabs" title="Tabs" subtitle="Compound: List · Trigger · Content">
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">General</TabsTrigger>
                    <TabsTrigger value="tab2">Seguridad</TabsTrigger>
                    <TabsTrigger value="tab3">Notificaciones</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <p className="text-sm text-[--si-body-color]">
                      Configura tu nombre, foto de perfil e información de contacto.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <p className="text-sm text-[--si-body-color]">
                      Gestiona tu contraseña, autenticación de dos factores y sesiones activas.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <p className="text-sm text-[--si-body-color]">
                      Controla qué notificaciones recibes por email, push y SMS.
                    </p>
                  </TabsContent>
                </Tabs>
              </ShowBlock>

              {/* ─── Accordion ─── */}
              <ShowBlock id="accordion" title="Accordion" subtitle="Compound · type single o multiple · animación CSS grid-rows">
                <Accordion type="single" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Cuánto tiempo tarda la configuración inicial?</AccordionTrigger>
                    <AccordionContent>
                      La configuración inicial toma menos de 5 minutos. Solo necesitas crear una cuenta
                      y conectar tus herramientas existentes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Puedo cancelar mi suscripción en cualquier momento?</AccordionTrigger>
                    <AccordionContent>
                      Sí, puedes cancelar tu suscripción en cualquier momento desde el panel de configuración.
                      No hay penalizaciones ni compromisos de permanencia.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Ofrecen soporte técnico?</AccordionTrigger>
                    <AccordionContent>
                      Ofrecemos soporte por email 24/7 y chat en vivo durante horario de negocio.
                      Los planes Enterprise incluyen un gestor de cuenta dedicado.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ShowBlock>

              {/* ─── Modal ─── */}
              <ShowBlock id="modal" title="Modal" subtitle="createPortal · framer-motion · Escape key · scroll lock">
                <ModalDemo />
              </ShowBlock>

              {/* ─── Toast ─── */}
              <ShowBlock id="toast" title="Toast" subtitle="5 variantes · 6 posiciones · auto-dismiss · createPortal">
                <ToastDemo />
              </ShowBlock>

              {/* ─── Tooltip ─── */}
              <ShowBlock id="tooltip" title="Tooltip" subtitle="4 posiciones · delay configurable">
                <div className="flex flex-wrap gap-4">
                  {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
                    <Tooltip key={side} content={`Aparece ${side === 'top' ? 'arriba' : side === 'bottom' ? 'abajo' : side === 'left' ? 'a la izquierda' : 'a la derecha'}`} side={side}>
                      <Button variant="outline" size="sm">{side.charAt(0).toUpperCase() + side.slice(1)}</Button>
                    </Tooltip>
                  ))}
                </div>
              </ShowBlock>

              {/* ─── Breadcrumb ─── */}
              <ShowBlock id="breadcrumb" title="Breadcrumb" subtitle="Composable: List · Item · Link · Page · Separator">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Productos</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Silicon UI v2</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </ShowBlock>

              {/* ─── Pagination ─── */}
              <ShowBlock id="pagination" title="Pagination" subtitle="Genera páginas con ellipsis automático">
                <PaginationDemo />
              </ShowBlock>

              {/* ─── Table ─── */}
              <ShowBlock id="table" title="Table" subtitle="Composable: Header · Body · Row · Head · Cell">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead className="text-right">MRR</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: 'Acme Corp', status: 'Activo', plan: 'Enterprise', mrr: '$4,200' },
                      { name: 'Beta Inc', status: 'Trial', plan: 'Pro', mrr: '$490' },
                      { name: 'Gamma SL', status: 'Inactivo', plan: 'Free', mrr: '$0' },
                    ].map((row) => (
                      <TableRow key={row.name}>
                        <TableCell className="font-medium text-[--si-heading-color]">{row.name}</TableCell>
                        <TableCell>
                          <Badge
                            variant={row.status === 'Activo' ? 'success' : row.status === 'Trial' ? 'warning' : 'light'}
                            size="sm"
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{row.plan}</TableCell>
                        <TableCell className="text-right font-mono">{row.mrr}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ShowBlock>

              {/* ─── Dropdown ─── */}
              <ShowBlock id="dropdown" title="Dropdown" subtitle="Compound · click-outside · framer-motion · Escape key">
                <Dropdown>
                  <DropdownTrigger className="inline-flex h-10 items-center gap-2 rounded-lg border border-[--si-border-color] bg-[--si-body-bg] px-4 text-sm font-medium text-[--si-heading-color] transition-colors hover:bg-[--si-secondary]">
                    Opciones
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9" /></svg>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownLabel>Cuenta</DropdownLabel>
                    <DropdownItem>Mi Perfil</DropdownItem>
                    <DropdownItem>Configuración</DropdownItem>
                    <DropdownItem>Facturación</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem className="text-[--si-danger] hover:bg-red-50 hover:text-[--si-danger]">
                      Cerrar sesión
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </ShowBlock>

              {/* ─── SECTION COMPONENTS HEADER ─── */}
              <div className="border-t border-[--si-border-color] pt-6">
                <h1 className="text-2xl font-extrabold text-[--si-heading-color]">Componentes de sección</h1>
                <p className="mt-1 text-sm text-[--si-gray-500]">
                  10 secciones completas para construir landing pages. Se muestran a ancho completo.
                </p>
              </div>
            </div>

            {/* Secciones full-width */}
            <div className="space-y-0">

              {/* ─── HeroSection ─── */}
              <div id="herosection" className="scroll-mt-14">
                <SectionLabel label="HeroSection — 5 variantes: saas · agency · app · financial · minimal" />
                <HeroSection
                  variant="saas"
                  badge="Silicon UI v2"
                  headline="Construye landing pages profesionales en minutos"
                  subheadline="El design system de Silicon convertido en componentes React listos para producción."
                  ctaPrimary={{ label: 'Empezar gratis', href: '#' }}
                  ctaSecondary={{ label: 'Ver demo', href: '#' }}
                />
              </div>

              {/* ─── FeaturesGrid ─── */}
              <div id="featuresgrid" className="scroll-mt-14">
                <SectionLabel label="FeaturesGrid — variantes: light · dark · gray · columns 2/3/4 · iconStyle boxed/circle/flat" />
                <FeaturesGrid
                  badge="Características"
                  headline="Todo lo que necesitas para escalar"
                  subheadline="Componentes de alta calidad diseñados para producción."
                  columns={3}
                  iconStyle="boxed"
                  features={[
                    { icon: 'bx-rocket', title: 'Velocidad de desarrollo', description: 'Componentes listos para usar. De idea a producción en horas, no semanas.' },
                    { icon: 'bx-palette', title: 'Design System completo', description: 'Tokens CSS, Tailwind preset y 35+ componentes con variantes y tamaños.' },
                    { icon: 'bx-code-alt', title: 'TypeScript nativo', description: 'Strict mode, CVA, forwardRef y tipos exportados para máxima seguridad.' },
                    { icon: 'bx-shield-quarter', title: 'Accesibilidad', description: 'Roles ARIA, soporte de teclado y foco visible en todos los componentes.' },
                    { icon: 'bx-moon', title: 'Dark mode', description: 'Modo oscuro automático vía clase .dark en el HTML. Sin configuración extra.' },
                    { icon: 'bx-customize', title: 'Personalizable', description: 'CVA + cn() para variantes y overrides. Sin CSS-in-JS, solo Tailwind.' },
                  ]}
                />
              </div>

              {/* ─── PricingSection ─── */}
              <div id="pricingsection" className="scroll-mt-14">
                <SectionLabel label="PricingSection — toggle mensual/anual · plan destacado · variantes light/dark/gray" />
                <PricingSection
                  badge="Precios"
                  headline="Simple y transparente"
                  subheadline="Sin sorpresas. Cancela cuando quieras."
                  annualDiscount="Ahorra 20%"
                  plans={[
                    {
                      name: 'Free',
                      price: { monthly: 0, annual: 0 },
                      currency: '$',
                      description: 'Para proyectos personales y exploración.',
                      features: ['3 proyectos', '1 usuario', 'Componentes base', 'Comunidad'],
                      cta: { label: 'Empezar gratis', href: '#' },
                    },
                    {
                      name: 'Pro',
                      price: { monthly: 29, annual: 23 },
                      currency: '$',
                      description: 'Para equipos pequeños que necesitan más.',
                      features: ['Proyectos ilimitados', '5 usuarios', 'Todos los componentes', 'Soporte email'],
                      cta: { label: 'Empezar Pro', href: '#' },
                      highlighted: true,
                      badge: 'Más popular',
                    },
                    {
                      name: 'Enterprise',
                      price: { monthly: 99, annual: 79 },
                      currency: '$',
                      description: 'Para organizaciones con necesidades avanzadas.',
                      features: ['Todo en Pro', 'Usuarios ilimitados', 'SSO / SAML', 'SLA 99.99%'],
                      cta: { label: 'Contactar ventas', href: '#' },
                    },
                  ]}
                />
              </div>

              {/* ─── TestimonialsCarousel ─── */}
              <div id="testimonialscarousel" className="scroll-mt-14">
                <SectionLabel label="TestimonialsCarousel — layouts: carousel · grid · rating stars · variantes light/dark/gray" />
                <TestimonialsCarousel
                  layout="grid"
                  badge="Testimonials"
                  headline="Lo que dicen nuestros clientes"
                  testimonials={[
                    { quote: 'Silicon UI redujo nuestro tiempo de desarrollo de landing pages en un 70%. Los componentes son bellísimos y el TypeScript es impecable.', author: 'Ana García', role: 'CTO', company: 'Startup X', rating: 5 },
                    { quote: 'El design system más completo que he visto para React. El dark mode funciona perfecto y los tokens CSS son muy fáciles de personalizar.', author: 'Carlos Méndez', role: 'Frontend Lead', company: 'Tech Corp', rating: 5 },
                    { quote: 'Pasamos de Figma a producción en 2 días con Silicon. La coherencia visual entre componentes es increíble.', author: 'María López', role: 'Product Designer', company: 'Design Co', rating: 4 },
                  ]}
                />
              </div>

              {/* ─── CTABanner ─── */}
              <div id="ctabanner" className="scroll-mt-14">
                <SectionLabel label="CTABanner — variantes: primary · dark · gradient · decorative blobs" />
                <CTABanner
                  variant="gradient"
                  headline="¿Listo para construir algo increíble?"
                  subheadline="Únete a cientos de equipos que ya usan Silicon UI para lanzar más rápido."
                  ctaPrimary={{ label: 'Empezar gratis', href: '#' }}
                  ctaSecondary={{ label: 'Ver docs', href: '#' }}
                />
              </div>

              {/* ─── StatsSection ─── */}
              <div id="statssection" className="scroll-mt-14">
                <SectionLabel label="StatsSection — layouts: row (flex + dividers) · grid (cards) · variantes light/dark/gray" />
                <StatsSection
                  layout="row"
                  stats={[
                    { value: '35+', label: 'Componentes' },
                    { value: '10', label: 'Secciones de página' },
                    { value: '8', label: 'Templates listos' },
                    { value: '100%', label: 'TypeScript' },
                  ]}
                />
              </div>

              {/* ─── FAQAccordion ─── */}
              <div id="faqaccordion" className="scroll-mt-14">
                <SectionLabel label="FAQAccordion — Accordion interno · badge + headline · variantes light/dark/gray" />
                <FAQAccordion
                  badge="FAQ"
                  headline="Preguntas frecuentes"
                  items={[
                    { question: '¿Qué es Silicon UI?', answer: 'Silicon UI es una librería de componentes React basada en el tema WordPress Silicon v1.7.0, convertida a un design system moderno con Tailwind CSS y TypeScript.' },
                    { question: '¿Cómo instalo Silicon UI?', answer: 'Instala el paquete con npm install @silicon/ui e importa los componentes que necesites. Los tokens CSS se importan automáticamente.' },
                    { question: '¿Es compatible con Next.js?', answer: 'Sí, Silicon UI es compatible con Next.js 14 y 15, tanto con Pages Router como con App Router. Los componentes con portales incluyen guards SSR.' },
                    { question: '¿Puedo personalizar los colores?', answer: 'Sí. Cambia --si-primary y el resto de tokens CSS en tu globals.css o dinámicamente via JavaScript para personalización en tiempo real.' },
                  ]}
                />
              </div>

              {/* ─── LogoCloud ─── */}
              <div id="logocloud" className="scroll-mt-14">
                <SectionLabel label="LogoCloud — logos grayscale hover-color · link opcional · variantes light/dark/gray" />
                <LogoCloud
                  headline="Con la confianza de equipos líderes del sector"
                  logos={[
                    { name: 'Stripe', src: logoSvg('Stripe') },
                    { name: 'Vercel', src: logoSvg('Vercel') },
                    { name: 'Linear', src: logoSvg('Linear') },
                    { name: 'Figma', src: logoSvg('Figma') },
                    { name: 'Notion', src: logoSvg('Notion') },
                    { name: 'Loom', src: logoSvg('Loom') },
                  ]}
                />
              </div>

              {/* ─── HowItWorksSteps ─── */}
              <div id="howitworkssteps" className="scroll-mt-14">
                <SectionLabel label="HowItWorksSteps — pasos numerados · connector line desktop · variantes light/dark/gray" />
                <HowItWorksSteps
                  badge="Cómo funciona"
                  headline="De la descripción a producción en 3 pasos"
                  steps={[
                    { step: 1, title: 'Describe tu producto', description: 'Escribe en lenguaje natural qué hace tu producto, qué tono quieres y qué secciones necesitas.', icon: 'bx-edit' },
                    { step: 2, title: 'El agente genera', description: 'Claude analiza tu descripción y genera un PageConfig JSON con las secciones y contenido perfectos.', icon: 'bx-chip' },
                    { step: 3, title: 'Exporta y deploya', description: 'Descarga el HTML estático o el proyecto Next.js completo. Listo para deployar en minutos.', icon: 'bx-rocket' },
                  ]}
                />
              </div>

              {/* ─── FooterSection ─── */}
              <div id="footersection" className="scroll-mt-14">
                <SectionLabel label="FooterSection — variantes light/dark · columns de links · social icons · copyright" />
                <FooterSection
                  variant="dark"
                  tagline="El design system de Silicon, ahora en React."
                  columns={[
                    { title: 'Producto', links: [{ label: 'Componentes', href: '#' }, { label: 'Templates', href: '#' }, { label: 'Pricing', href: '#' }] },
                    { title: 'Desarrolladores', links: [{ label: 'Documentación', href: '#' }, { label: 'GitHub', href: '#' }, { label: 'npm', href: '#' }] },
                    { title: 'Empresa', links: [{ label: 'Blog', href: '#' }, { label: 'Changelog', href: '#' }, { label: 'Contacto', href: '#' }] },
                  ]}
                  social={[
                    { platform: 'github', href: '#' },
                    { platform: 'twitter', href: '#' },
                    { platform: 'linkedin', href: '#' },
                  ]}
                  copyright="© 2025 Silicon UI. Todos los derechos reservados."
                />
              </div>

            </div>

            <div className="h-20" />
          </main>
        </div>
      </div>
    </ToastProvider>
  )
}
