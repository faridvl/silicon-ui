import type { PageConfig } from '@/types/silicon'

export const saasV1Template: PageConfig = {
  id: 'tpl-saas-v1',
  templateId: 'saas-v1',
  name: 'SaaS v1 — Project Management',
  description: 'Landing page clásica para productos SaaS B2B con hero, features, pricing y testimonials.',
  colors: {
    primary: '#6366f1',
    secondary: '#eff2fc',
    accent: '#a5b4fc',
    dark: '#0b0f19',
  },
  meta: {
    title: 'Flowly — Gestiona proyectos sin fricción',
    description: 'La herramienta de gestión de proyectos que tu equipo va a amar.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'saas',
      badge: 'Nuevo — v2.0 disponible',
      headline: 'Gestiona proyectos sin fricción, entrega con confianza',
      subheadline:
        'Flowly centraliza tareas, sprints y documentación en un solo workspace. Tu equipo siempre alineado, sin reuniones innecesarias.',
      ctaPrimary: { label: 'Empieza gratis', href: '/signup' },
      ctaSecondary: { label: 'Ver demo', href: '/demo' },
      media: { type: 'image', src: '/images/hero/dashboard-preview.png', alt: 'Dashboard de Flowly' },
    },
    {
      type: 'logo-cloud',
      headline: 'Con la confianza de equipos en más de 50 países',
      logos: [
        { name: 'Stripe', src: '/images/logos/stripe.svg' },
        { name: 'Notion', src: '/images/logos/notion.svg' },
        { name: 'Vercel', src: '/images/logos/vercel.svg' },
        { name: 'Linear', src: '/images/logos/linear.svg' },
        { name: 'Figma', src: '/images/logos/figma.svg' },
        { name: 'Loom', src: '/images/logos/loom.svg' },
      ],
    },
    {
      type: 'features-grid',
      badge: 'Funcionalidades',
      headline: 'Todo lo que tu equipo necesita en un solo lugar',
      subheadline: 'Flowly elimina el cambio de contexto para que puedas enfocarte en lo que importa.',
      columns: 3,
      features: [
        { icon: 'bx-task', title: 'Gestión de tareas', description: 'Crea, asigna y prioriza tareas con dependencias y fechas límite automáticas.' },
        { icon: 'bx-time-five', title: 'Sprints ágiles', description: 'Planifica sprints en minutos. Backlog inteligente que se reordena solo.' },
        { icon: 'bx-chart-bar', title: 'Reportes en tiempo real', description: 'Velocidad del equipo, burndown charts y métricas de entrega al instante.' },
        { icon: 'bx-message-rounded-dots', title: 'Comentarios contextuales', description: 'Discute directamente en la tarea, sin perder el hilo en Slack.' },
        { icon: 'bx-git-branch', title: 'Integración con Git', description: 'Vincula commits y PRs a tareas. Status automático cuando mergeas.' },
        { icon: 'bx-bell', title: 'Notificaciones inteligentes', description: 'Solo recibes lo que importa. Sin spam, sin ruido de fondo.' },
      ],
    },
    {
      type: 'how-it-works',
      badge: 'Proceso',
      headline: 'En marcha en menos de 10 minutos',
      subheadline: 'Sin migraciones complicadas ni semanas de onboarding.',
      steps: [
        { step: 1, title: 'Crea tu workspace', description: 'Regístrate y configura tu organización en 2 minutos.', icon: 'bx-plus-circle' },
        { step: 2, title: 'Invita a tu equipo', description: 'Agrega miembros y asigna roles con un clic.', icon: 'bx-group' },
        { step: 3, title: 'Importa tus proyectos', description: 'Importa desde Jira, Trello o empieza desde cero.', icon: 'bx-import' },
        { step: 4, title: 'Entrega más rápido', description: 'Tu equipo ve exactamente qué hacer y cuándo.', icon: 'bx-rocket' },
      ],
    },
    {
      type: 'pricing',
      badge: 'Precios',
      headline: 'Simple y transparente',
      subheadline: 'Sin sorpresas. Cancela cuando quieras.',
      plans: [
        {
          name: 'Starter',
          price: { monthly: 0, annual: 0 },
          currency: 'USD',
          description: 'Perfecto para freelancers y equipos pequeños.',
          features: ['5 proyectos', '3 miembros', 'Tareas ilimitadas', 'Reportes básicos'],
          cta: { label: 'Empieza gratis', href: '/signup' },
        },
        {
          name: 'Pro',
          price: { monthly: 19, annual: 15 },
          currency: 'USD',
          description: 'Para equipos que necesitan más control.',
          features: ['Proyectos ilimitados', '20 miembros', 'Sprints y backlog', 'Integraciones Git', 'Reportes avanzados', 'Soporte prioritario'],
          cta: { label: 'Prueba 14 días gratis', href: '/signup?plan=pro' },
          highlighted: true,
          badge: 'Más popular',
        },
        {
          name: 'Enterprise',
          price: { monthly: 49, annual: 39 },
          currency: 'USD',
          description: 'Para organizaciones con necesidades avanzadas.',
          features: ['Todo de Pro', 'Miembros ilimitados', 'SSO / SAML', 'Auditoría de logs', 'SLA 99.9%', 'Cuenta manager'],
          cta: { label: 'Hablar con ventas', href: '/contact' },
        },
      ],
    },
    {
      type: 'testimonials',
      badge: 'Testimonios',
      headline: 'Equipos que ya entregaron más rápido',
      testimonials: [
        {
          quote: 'Flowly redujo nuestro tiempo de planning a la mitad. El equipo nunca había estado tan alineado.',
          author: 'María Torres',
          role: 'CTO',
          company: 'Finloop',
          rating: 5,
        },
        {
          quote: 'Migramos desde Jira en un día. No hay vuelta atrás. La UX es lo que Jira debería haber sido.',
          author: 'Carlos Ruiz',
          role: 'Engineering Manager',
          company: 'Shopwise',
          rating: 5,
        },
        {
          quote: 'Los reportes de velocidad nos ayudan a hacer promesas realistas a los clientes. Fundamental.',
          author: 'Ana Gómez',
          role: 'Product Lead',
          company: 'Solvit',
          rating: 5,
        },
      ],
    },
    {
      type: 'cta-banner',
      headline: '¿Listo para entregar más rápido?',
      subheadline: 'Únete a más de 12,000 equipos que ya usan Flowly.',
      ctaPrimary: { label: 'Empieza gratis', href: '/signup' },
      ctaSecondary: { label: 'Ver demo', href: '/demo' },
      variant: 'primary',
    },
    {
      type: 'footer',
      tagline: 'Gestión de proyectos para equipos modernos.',
      columns: [
        {
          title: 'Producto',
          links: [
            { label: 'Funcionalidades', href: '/features' },
            { label: 'Precios', href: '/pricing' },
            { label: 'Changelog', href: '/changelog' },
            { label: 'Roadmap', href: '/roadmap' },
          ],
        },
        {
          title: 'Compañía',
          links: [
            { label: 'Nosotros', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Trabaja con nosotros', href: '/jobs' },
            { label: 'Contacto', href: '/contact' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacidad', href: '/privacy' },
            { label: 'Términos', href: '/terms' },
            { label: 'Seguridad', href: '/security' },
          ],
        },
      ],
      social: [
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'github', href: 'https://github.com' },
        { platform: 'linkedin', href: 'https://linkedin.com' },
      ],
      copyright: '© 2025 Flowly, Inc. Todos los derechos reservados.',
    },
  ],
}
