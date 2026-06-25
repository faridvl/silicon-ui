import type { PageConfig } from '@/types/silicon'

export const appShowcaseTemplate: PageConfig = {
  id: 'tpl-app-showcase',
  templateId: 'app-showcase',
  name: 'App Showcase — Mobile App',
  description: 'Landing page para app móvil con hero centrado en app, features, pasos y pricing.',
  colors: {
    primary: '#8b5cf6',
    secondary: '#f5f3ff',
    accent: '#c4b5fd',
    dark: '#0f0f1a',
  },
  meta: {
    title: 'Habito — Construye hábitos que duran',
    description: 'La app de hábitos que usa ciencia del comportamiento para que realmente te pegues a tus metas.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'app',
      badge: 'App del año 2024 — App Store',
      headline: 'Construye hábitos que duran, no que duelen',
      subheadline:
        'Habito usa ciencia del comportamiento y recordatorios inteligentes para que por fin te pegues a tus metas. Sin culpa, sin presión.',
      ctaPrimary: { label: 'Descargar gratis', href: '/download' },
      ctaSecondary: { label: 'Ver cómo funciona', href: '#how-it-works' },
      media: { type: 'image', src: '/images/hero/app-mockup.png', alt: 'App Habito en pantalla' },
    },
    {
      type: 'features-grid',
      badge: 'Funcionalidades',
      headline: 'Diseñado para humanos, no para robots',
      subheadline: 'Funcionalidades que realmente ayudan a crear rutinas sostenibles.',
      columns: 2,
      features: [
        { icon: 'bxs-brain', title: 'Hábitos basados en ciencia', description: 'Usamos el modelo Habit Loop de James Clear para crear rutinas que se vuelven automáticas.' },
        { icon: 'bx-bell', title: 'Recordatorios contextuales', description: 'Notificaciones en el momento correcto, basadas en tu ubicación y horario de vida.' },
        { icon: 'bx-trending-up', title: 'Rachas y progreso visual', description: 'Visualiza tu constancia. Mantener la racha activa es adictivo (de la buena).' },
        { icon: 'bx-group', title: 'Hábitos en comunidad', description: 'Forma grupos con amigos y hagan los hábitos juntos. La accountability funciona.' },
      ],
    },
    {
      type: 'how-it-works',
      badge: 'Cómo funciona',
      headline: 'En 3 pasos ya estás en marcha',
      steps: [
        { step: 1, title: 'Elige tus hábitos', description: 'Selecciona de nuestra biblioteca o crea los tuyos. Empieza con 1-3 hábitos.', icon: 'bx-check-square' },
        { step: 2, title: 'Configura recordatorios', description: 'Cuándo, dónde y cómo quieres que te recuerde. Inteligente y no invasivo.', icon: 'bx-time' },
        { step: 3, title: 'Registra y celebra', description: 'Marca el hábito cumplido. Ve tu racha crecer. El progreso se siente.', icon: 'bxs-star' },
      ],
    },
    {
      type: 'testimonials',
      badge: 'Comunidad',
      headline: 'Más de 500,000 personas ya cambiaron sus hábitos',
      testimonials: [
        {
          quote: 'Llevo 147 días seguidos con mi hábito de leer 20 minutos. Nunca había llegado tan lejos. La racha es todo.',
          author: 'Sofía Ramírez',
          role: 'Diseñadora UX',
          rating: 5,
        },
        {
          quote: 'Los recordatorios contextuales son magia. Me avisa cuando llego a casa para hacer ejercicio. Funciona.',
          author: 'Diego Morales',
          role: 'Desarrollador',
          rating: 5,
        },
        {
          quote: 'Lo intenté con 5 apps distintas. Habito es la única que me hizo durar más de una semana. Y ya llevo 8 meses.',
          author: 'Isabella Vega',
          role: 'Emprendedora',
          rating: 5,
        },
      ],
    },
    {
      type: 'pricing',
      badge: 'Planes',
      headline: 'Empieza gratis, actualiza cuando quieras',
      plans: [
        {
          name: 'Free',
          price: { monthly: 0, annual: 0 },
          currency: 'USD',
          description: 'Para comenzar tu journey de hábitos.',
          features: ['3 hábitos activos', 'Recordatorios básicos', 'Racha diaria', 'Estadísticas básicas'],
          cta: { label: 'Descargar gratis', href: '/download' },
        },
        {
          name: 'Premium',
          price: { monthly: 7.99, annual: 4.99 },
          currency: 'USD',
          description: 'Para quienes se toman los hábitos en serio.',
          features: ['Hábitos ilimitados', 'Recordatorios inteligentes', 'Hábitos en comunidad', 'Estadísticas avanzadas', 'Temas y personalización', 'Sin anuncios'],
          cta: { label: 'Prueba 30 días gratis', href: '/download?plan=premium' },
          highlighted: true,
          badge: 'Más popular',
        },
      ],
    },
    {
      type: 'cta-banner',
      headline: 'Tu mejor versión empieza hoy',
      subheadline: 'Descarga Habito gratis. Disponible en iOS y Android.',
      ctaPrimary: { label: 'Descargar para iOS', href: '/download/ios' },
      ctaSecondary: { label: 'Descargar para Android', href: '/download/android' },
      variant: 'gradient',
    },
    {
      type: 'footer',
      tagline: 'Pequeños pasos, grandes cambios.',
      columns: [
        {
          title: 'App',
          links: [
            { label: 'Funcionalidades', href: '/features' },
            { label: 'Precios', href: '/pricing' },
            { label: 'Descargar', href: '/download' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Prensa', href: '/press' },
            { label: 'Contacto', href: '/contact' },
            { label: 'Privacidad', href: '/privacy' },
          ],
        },
      ],
      social: [
        { platform: 'instagram', href: 'https://instagram.com' },
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'youtube', href: 'https://youtube.com' },
      ],
      copyright: '© 2025 Habito App. Todos los derechos reservados.',
    },
  ],
}
