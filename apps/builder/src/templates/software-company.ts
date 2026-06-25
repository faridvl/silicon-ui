import type { PageConfig } from '@/types/silicon'

export const softwareCompanyTemplate: PageConfig = {
  id: 'tpl-software-company',
  templateId: 'software-company',
  name: 'Software Company — B2B Enterprise',
  description: 'Landing page para empresa de software B2B con hero enterprise, logo cloud, features dark, proceso y pricing.',
  colors: {
    primary: '#6366f1',
    secondary: '#eff2fc',
    accent: '#818cf8',
    dark: '#0b0f19',
  },
  meta: {
    title: 'Nexus ERP — El sistema que escala con tu empresa',
    description: 'ERP moderno para empresas en crecimiento. Integra operaciones, finanzas y RRHH en un solo sistema.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'saas',
      badge: 'Enterprise · Implementación en 30 días',
      headline: 'El ERP que tu equipo va a querer usar',
      subheadline:
        'Nexus unifica operaciones, finanzas, inventario y recursos humanos en una plataforma moderna. Sin silos de información, sin hojas de cálculo, sin excusas.',
      ctaPrimary: { label: 'Solicitar demo', href: '/demo' },
      ctaSecondary: { label: 'Ver casos de éxito', href: '/customers' },
      media: { type: 'image', src: '/images/hero/erp-dashboard.png', alt: 'Dashboard Nexus ERP' },
    },
    {
      type: 'logo-cloud',
      headline: 'Usado por empresas que ya pasaron la planilla de Excel',
      logos: [
        { name: 'Arcor', src: '/images/logos/arcor.svg' },
        { name: 'Grupo Clarín', src: '/images/logos/clarin.svg' },
        { name: 'Telecom', src: '/images/logos/telecom.svg' },
        { name: 'La Anónima', src: '/images/logos/anonima.svg' },
        { name: 'Molinos Río', src: '/images/logos/molinos.svg' },
        { name: 'Techint', src: '/images/logos/techint.svg' },
      ],
    },
    {
      type: 'features-grid',
      badge: 'Módulos',
      headline: 'Una plataforma para toda la operación',
      subheadline: 'Módulos integrados nativamente. Sin necesidad de integraciones costosas entre sistemas.',
      columns: 3,
      features: [
        { icon: 'bx-dollar-circle', title: 'Finanzas y Contabilidad', description: 'Plan de cuentas, asientos automáticos, balances en tiempo real y cierre mensual sin estrés.' },
        { icon: 'bx-package', title: 'Inventario y Logística', description: 'Control de stock multi-depósito, órdenes de compra y trazabilidad de productos end-to-end.' },
        { icon: 'bx-group', title: 'RRHH y Liquidación', description: 'Legajos digitales, control de asistencia, cálculo de haberes y SICORE automatizado.' },
        { icon: 'bx-cart', title: 'Ventas y CRM', description: 'Pipeline de ventas, presupuestos digitales, facturación electrónica AFIP integrada.' },
        { icon: 'bx-cog', title: 'Producción y MRP', description: 'Planificación de producción, órdenes de fabricación y control de capacidad de planta.' },
        { icon: 'bx-bar-chart-alt-2', title: 'BI y Reportes', description: 'Dashboards ejecutivos, reportes personalizados y exports a Excel o Power BI.' },
      ],
    },
    {
      type: 'how-it-works',
      badge: 'Implementación',
      headline: 'En marcha en 30 días, no en 18 meses',
      subheadline: 'Nuestra metodología de implementación ágil garantiza que empiezas a usar el sistema rápido.',
      steps: [
        { step: 1, title: 'Relevamiento', description: 'Mapeamos tus procesos actuales e identificamos los módulos que necesitas.', icon: 'bx-search' },
        { step: 2, title: 'Configuración', description: 'Parametrizamos el sistema con tu plan de cuentas, productos y estructura.', icon: 'bx-cog' },
        { step: 3, title: 'Migración de datos', description: 'Importamos tus datos históricos desde cualquier sistema anterior.', icon: 'bx-transfer' },
        { step: 4, title: 'Capacitación y go-live', description: 'Training del equipo y lanzamiento acompañado por nuestros consultores.', icon: 'bxs-graduation' },
      ],
    },
    {
      type: 'pricing',
      badge: 'Planes',
      headline: 'Precios según el tamaño de tu empresa',
      subheadline: 'Sin costo por módulo. Pagas por usuarios y ya tienes acceso a todo.',
      plans: [
        {
          name: 'PyME',
          price: { monthly: 299, annual: 239 },
          currency: 'USD',
          description: 'Para empresas de hasta 50 empleados.',
          features: ['Hasta 20 usuarios', 'Todos los módulos', 'Soporte email + chat', 'Updates incluidos', 'Hosting en la nube'],
          cta: { label: 'Solicitar demo', href: '/demo' },
        },
        {
          name: 'Mediana Empresa',
          price: { monthly: 799, annual: 639 },
          currency: 'USD',
          description: 'Para empresas de 50 a 500 empleados.',
          features: ['Hasta 100 usuarios', 'Todos los módulos', 'Soporte prioritario 24/7', 'Implementación guiada', 'BI y reportes avanzados', 'API completa'],
          cta: { label: 'Solicitar demo', href: '/demo?plan=mediana' },
          highlighted: true,
          badge: 'Más elegido',
        },
        {
          name: 'Enterprise',
          price: { monthly: 0, annual: 0 },
          currency: 'USD',
          description: 'Para grupos empresariales y +500 empleados.',
          features: ['Usuarios ilimitados', 'On-premise o cloud', 'SLA personalizado', 'Customer Success Manager', 'Customizaciones a medida', 'Integración con sistemas legados'],
          cta: { label: 'Hablar con ventas', href: '/contact' },
        },
      ],
    },
    {
      type: 'testimonials',
      badge: 'Clientes',
      headline: 'Empresas que digitalizaron su operación con Nexus',
      testimonials: [
        {
          quote: 'Antes teníamos 12 hojas de Excel conectadas con macros. Hoy con Nexus cerramos el mes en 2 días. Antes tardábamos 3 semanas.',
          author: 'Gabriela Ríos',
          role: 'CFO',
          company: 'Distribuidora del Sur',
          rating: 5,
        },
        {
          quote: 'La implementación en 30 días fue real. Estábamos escépticos pero cumplieron. El equipo de Nexus sabe de manufactura de verdad.',
          author: 'Fernando Orellana',
          role: 'Gerente de Operaciones',
          company: 'Metalúrgica Patagónica',
          rating: 5,
        },
        {
          quote: 'El módulo de RRHH nos ahorró 40 horas mensuales de liquidación. Y los errores en el cálculo de haberes bajaron a cero.',
          author: 'Patricia Suárez',
          role: 'Directora de RRHH',
          company: 'Grupo Comercial Norte',
          rating: 5,
        },
      ],
    },
    {
      type: 'cta-banner',
      headline: '¿Listo para dejar atrás las planillas de Excel?',
      subheadline: 'Demo personalizada de 45 minutos con un consultor especializado en tu industria.',
      ctaPrimary: { label: 'Solicitar demo gratuita', href: '/demo' },
      ctaSecondary: { label: 'Ver todos los módulos', href: '/modules' },
      variant: 'gradient',
    },
    {
      type: 'footer',
      tagline: 'ERP moderno para empresas argentinas en crecimiento.',
      columns: [
        {
          title: 'Módulos',
          links: [
            { label: 'Finanzas', href: '/modules/finance' },
            { label: 'Inventario', href: '/modules/inventory' },
            { label: 'RRHH', href: '/modules/hr' },
            { label: 'Ventas', href: '/modules/sales' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Clientes', href: '/customers' },
            { label: 'Partners', href: '/partners' },
            { label: 'Blog', href: '/blog' },
            { label: 'Empleos', href: '/jobs' },
          ],
        },
        {
          title: 'Soporte',
          links: [
            { label: 'Documentación', href: '/docs' },
            { label: 'Estado del sistema', href: '/status' },
            { label: 'Contacto', href: '/contact' },
            { label: 'Privacidad', href: '/privacy' },
          ],
        },
      ],
      social: [
        { platform: 'linkedin', href: 'https://linkedin.com' },
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'youtube', href: 'https://youtube.com' },
      ],
      copyright: '© 2025 Nexus Software S.A. Todos los derechos reservados.',
    },
  ],
}
