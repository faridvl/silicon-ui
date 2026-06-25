import type { PageConfig } from '@/types/silicon'

export const saasV2Template: PageConfig = {
  id: 'tpl-saas-v2',
  templateId: 'saas-v2',
  name: 'SaaS v2 — Analytics Platform',
  description: 'Landing page orientada a datos con stats prominentes, features en dark, FAQ y CTA gradient.',
  colors: {
    primary: '#6366f1',
    secondary: '#eff2fc',
    accent: '#a5b4fc',
    dark: '#0b0f19',
  },
  meta: {
    title: 'Datawise — Analytics que puedes entender',
    description: 'Convierte tus datos en decisiones. Dashboards potentes, setup en minutos.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'saas',
      badge: 'Ahora con IA generativa',
      headline: 'Analytics que entiende tu negocio, no solo tus números',
      subheadline:
        'Datawise conecta tus fuentes de datos y genera insights accionables en lenguaje natural. Sin analistas, sin esperas.',
      ctaPrimary: { label: 'Probar gratis 14 días', href: '/signup' },
      ctaSecondary: { label: 'Ver demo en vivo', href: '/demo' },
      media: { type: 'image', src: '/images/hero/analytics-dashboard.png', alt: 'Dashboard de Datawise' },
    },
    {
      type: 'stats',
      stats: [
        { value: '2.4M', label: 'Consultas procesadas al día', suffix: '+' },
        { value: '98', label: 'Uptime garantizado', suffix: '%' },
        { value: '40', label: 'Reducción en tiempo de reporte', suffix: '%' },
        { value: '5K', label: 'Empresas activas', suffix: '+' },
      ],
      layout: 'row',
    },
    {
      type: 'features-grid',
      badge: 'Plataforma',
      headline: 'Potencia de data warehouse, simplicidad de hoja de cálculo',
      subheadline: 'Todas las herramientas que necesitas para tomar decisiones basadas en datos.',
      columns: 4,
      features: [
        { icon: 'bx-plug', title: 'Conectores nativos', description: '150+ integraciones: Stripe, Shopify, PostgreSQL, BigQuery y más.' },
        { icon: 'bxs-magic-wand', title: 'AI Insights', description: 'Pregunta en lenguaje natural. La IA analiza y responde.' },
        { icon: 'bx-line-chart', title: 'Dashboards live', description: 'Visualizaciones interactivas que se actualizan en tiempo real.' },
        { icon: 'bx-bell', title: 'Alertas inteligentes', description: 'Notificaciones cuando una métrica sale del rango esperado.' },
      ],
    },
    {
      type: 'pricing',
      badge: 'Planes',
      headline: 'Paga por lo que usas',
      subheadline: 'Escala tu plan conforme crece tu volumen de datos.',
      plans: [
        {
          name: 'Growth',
          price: { monthly: 29, annual: 23 },
          currency: 'USD',
          description: 'Para startups y equipos en crecimiento.',
          features: ['5 fuentes de datos', '10 dashboards', '1M filas / mes', 'Alertas básicas', 'Soporte email'],
          cta: { label: 'Empieza gratis', href: '/signup' },
        },
        {
          name: 'Scale',
          price: { monthly: 99, annual: 79 },
          currency: 'USD',
          description: 'Para empresas con volumen de datos alto.',
          features: ['Fuentes ilimitadas', 'Dashboards ilimitados', '50M filas / mes', 'AI Insights', 'Alertas avanzadas', 'Soporte prioritario'],
          cta: { label: 'Prueba 14 días', href: '/signup?plan=scale' },
          highlighted: true,
          badge: 'Recomendado',
        },
        {
          name: 'Enterprise',
          price: { monthly: 299, annual: 239 },
          currency: 'USD',
          description: 'Para organizaciones con necesidades enterprise.',
          features: ['Todo de Scale', 'Filas ilimitadas', 'On-premise option', 'SLA 99.95%', 'Customer success', 'Contrato personalizado'],
          cta: { label: 'Contactar ventas', href: '/contact' },
        },
      ],
    },
    {
      type: 'faq',
      badge: 'FAQ',
      headline: 'Preguntas frecuentes',
      items: [
        { question: '¿Con qué fuentes de datos se conecta Datawise?', answer: 'Soportamos más de 150 conectores nativos: bases de datos (PostgreSQL, MySQL, BigQuery), SaaS (Stripe, Shopify, HubSpot, Salesforce), hojas de cálculo (Google Sheets, Excel) y APIs REST personalizadas.' },
        { question: '¿Mis datos están seguros?', answer: 'Sí. Usamos cifrado AES-256 en reposo y TLS 1.3 en tránsito. Cumplimos con SOC 2 Type II, GDPR y CCPA. Tus datos nunca se comparten ni se usan para entrenar modelos.' },
        { question: '¿Cuánto tiempo tarda el setup?', answer: 'La mayoría de los equipos conectan su primera fuente de datos en menos de 10 minutos. No se requieren conocimientos de SQL ni de infraestructura.' },
        { question: '¿Puedo exportar mis dashboards?', answer: 'Sí, puedes exportar dashboards como PDF, PNG o incrustarlos en cualquier web o app con nuestro SDK de embeds. También soportamos exportación de datos en CSV y JSON.' },
        { question: '¿Hay un límite de usuarios?', answer: 'En Growth tienes hasta 5 usuarios. En Scale son usuarios ilimitados. En Enterprise puedes invitar a toda tu organización sin costo adicional por seat.' },
      ],
    },
    {
      type: 'cta-banner',
      headline: 'Tus datos tienen la respuesta. Datawise la encuentra.',
      subheadline: 'Empieza gratis. Sin tarjeta de crédito.',
      ctaPrimary: { label: 'Crear cuenta gratis', href: '/signup' },
      ctaSecondary: { label: 'Hablar con el equipo', href: '/contact' },
      variant: 'gradient',
    },
    {
      type: 'footer',
      tagline: 'Analytics que cualquier equipo puede usar.',
      columns: [
        {
          title: 'Producto',
          links: [
            { label: 'Integraciones', href: '/integrations' },
            { label: 'Precios', href: '/pricing' },
            { label: 'Seguridad', href: '/security' },
            { label: 'Estado del sistema', href: '/status' },
          ],
        },
        {
          title: 'Recursos',
          links: [
            { label: 'Documentación', href: '/docs' },
            { label: 'Blog', href: '/blog' },
            { label: 'Casos de éxito', href: '/customers' },
            { label: 'Webinars', href: '/webinars' },
          ],
        },
        {
          title: 'Compañía',
          links: [
            { label: 'Nosotros', href: '/about' },
            { label: 'Empleos', href: '/jobs' },
            { label: 'Privacidad', href: '/privacy' },
            { label: 'Términos', href: '/terms' },
          ],
        },
      ],
      social: [
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'linkedin', href: 'https://linkedin.com' },
        { platform: 'github', href: 'https://github.com' },
      ],
      copyright: '© 2025 Datawise Technologies. Todos los derechos reservados.',
    },
  ],
}
