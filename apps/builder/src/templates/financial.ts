import type { PageConfig } from '@/types/silicon'

export const financialTemplate: PageConfig = {
  id: 'tpl-financial',
  templateId: 'financial',
  name: 'Financial — Fintech / Inversiones',
  description: 'Landing page para fintech con hero serio, stats de confianza, features y FAQ regulatorio.',
  colors: {
    primary: '#0ea5e9',
    secondary: '#f0f9ff',
    accent: '#38bdf8',
    dark: '#0c1a2e',
  },
  meta: {
    title: 'Inversio — Invierte con inteligencia',
    description: 'La plataforma de inversión que democratiza el acceso a mercados globales.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'financial',
      badge: 'Regulado por la CNV · Argentina',
      headline: 'Tu dinero trabajando mientras tú duermes',
      subheadline:
        'Inversio te da acceso a CEDEARs, bonos, FCI y acciones de EE.UU. con comisiones mínimas y una interfaz que cualquiera puede usar.',
      ctaPrimary: { label: 'Abrir cuenta gratis', href: '/signup' },
      ctaSecondary: { label: 'Ver rendimientos', href: '/returns' },
    },
    {
      type: 'stats',
      stats: [
        { value: '$1.2B', label: 'Activos bajo gestión' },
        { value: '180K', label: 'Inversores activos', suffix: '+' },
        { value: '99.9', label: 'Uptime de plataforma', suffix: '%' },
        { value: '12', label: 'Años de experiencia', suffix: '+' },
      ],
      layout: 'row',
    },
    {
      type: 'features-grid',
      badge: 'Por qué Inversio',
      headline: 'Invertir bien no debería ser complicado',
      subheadline: 'Herramientas profesionales con una experiencia de usuario que no requiere un MBA.',
      columns: 3,
      features: [
        { icon: 'bx-shield-quarter', title: 'Fondos asegurados', description: 'Tus activos están custodiados por un agente regulado y asegurados contra insolvencia.' },
        { icon: 'bxs-hand-up', title: 'Sin mínimo de inversión', description: 'Empieza con lo que tengas. Incluso $1 es suficiente para comenzar.' },
        { icon: 'bx-transfer-alt', title: 'Transferencias instantáneas', description: 'Acredita pesos o dólares desde cualquier banco en menos de 2 minutos.' },
        { icon: 'bx-trending-up', title: 'Carteras inteligentes', description: 'Portfolios diversificados creados por expertos, rebalanceados automáticamente.' },
        { icon: 'bx-bar-chart-alt-2', title: 'Análisis en tiempo real', description: 'Cotizaciones live, historial de precios y fundamentals de cada instrumento.' },
        { icon: 'bx-receipt', title: 'Tax report listo', description: 'Descarga tu informe anual de ganancias para presentar a AFIP con un clic.' },
      ],
    },
    {
      type: 'testimonials',
      badge: 'Inversores',
      headline: 'Lo que dicen nuestros inversores',
      testimonials: [
        {
          quote: 'Empecé con $5,000. Hoy llevo 2 años y mi portafolio creció un 68% con CEDEARs diversificados. La interfaz hace todo muy fácil.',
          author: 'Roberto Paz',
          role: 'Contador',
          rating: 5,
        },
        {
          quote: 'Lo que más valoro es la transparencia en comisiones. Con Inversio pago exactamente lo que me dicen. Sin sorpresas.',
          author: 'Natalia Fuentes',
          role: 'Arquitecta',
          rating: 5,
        },
        {
          quote: 'Las carteras inteligentes son perfectas si no tienes tiempo de analizar. Mi portafolio moderado lleva 18 meses de retornos positivos.',
          author: 'Andrés Montoya',
          role: 'Ingeniero',
          rating: 5,
        },
      ],
    },
    {
      type: 'faq',
      badge: 'FAQ',
      headline: 'Preguntas frecuentes',
      items: [
        { question: '¿Inversio está regulado?', answer: 'Sí. Inversio opera como Agente de Liquidación y Compensación (ALyC) registrado en la Comisión Nacional de Valores (CNV) de Argentina bajo la matrícula ALyC-xxxx. Todos los activos son custodiados por Caja de Valores S.A.' },
        { question: '¿Qué instrumentos puedo comprar?', answer: 'Acciones locales (Merval), CEDEARs (acciones de empresas extranjeras en Argentina), bonos soberanos y corporativos, Fondos Comunes de Inversión (FCI), Cauciones bursátiles y Obligaciones Negociables.' },
        { question: '¿Cuánto tarda en acreditarse mi dinero?', answer: 'Las transferencias bancarias acreditan en 2-10 minutos hábiles. Los depósitos de dólares cash en menos de 24 horas. Los retiros tardan 24-48 horas hábiles.' },
        { question: '¿Cuáles son las comisiones?', answer: 'Comisión de trading: 0.25% por operación (mínimo $50). Mantenimiento de cuenta: $0. Retiros: $0. Pago de dividendos y cupones: $0. Sin costos ocultos.' },
        { question: '¿Qué pasa si Inversio cierra?', answer: 'Tus activos son tuya propiedad y están registrados a tu nombre en Caja de Valores. En caso de cierre de Inversio, los activos son transferibles a otro ALyC sin pérdida.' },
      ],
    },
    {
      type: 'cta-banner',
      headline: 'Empieza a invertir hoy mismo',
      subheadline: 'Apertura de cuenta 100% online en 5 minutos. Sin papeles.',
      ctaPrimary: { label: 'Abrir cuenta gratis', href: '/signup' },
      ctaSecondary: { label: 'Conocer los instrumentos', href: '/instruments' },
      variant: 'primary',
    },
    {
      type: 'footer',
      tagline: 'Inversiones inteligentes para todos.',
      columns: [
        {
          title: 'Instrumentos',
          links: [
            { label: 'CEDEARs', href: '/cedears' },
            { label: 'Bonos', href: '/bonds' },
            { label: 'FCI', href: '/funds' },
            { label: 'Acciones', href: '/stocks' },
          ],
        },
        {
          title: 'Plataforma',
          links: [
            { label: 'Comisiones', href: '/fees' },
            { label: 'Seguridad', href: '/security' },
            { label: 'App móvil', href: '/app' },
            { label: 'API', href: '/api' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Regulación CNV', href: '/regulation' },
            { label: 'Términos', href: '/terms' },
            { label: 'Privacidad', href: '/privacy' },
            { label: 'Riesgos', href: '/risks' },
          ],
        },
      ],
      social: [
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'linkedin', href: 'https://linkedin.com' },
        { platform: 'instagram', href: 'https://instagram.com' },
      ],
      copyright: '© 2025 Inversio S.A. ALyC Nº xxxx-CNV. Las inversiones tienen riesgo. Rendimientos pasados no garantizan resultados futuros.',
    },
  ],
}
