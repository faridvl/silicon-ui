import type { PageConfig } from '@/types/silicon'

export const agencyTemplate: PageConfig = {
  id: 'tpl-agency',
  templateId: 'agency',
  name: 'Agency — Marketing Digital',
  description: 'Landing page para agencia creativa con hero bold, stats de impacto, servicios y testimonials.',
  colors: {
    primary: '#f97316',
    secondary: '#fff7ed',
    accent: '#fb923c',
    dark: '#0f172a',
  },
  meta: {
    title: 'Kreativ Studio — Agencia de Marketing Digital',
    description: 'Diseño, branding y performance marketing para marcas que quieren crecer.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'agency',
      badge: 'Agencia boutique · Buenos Aires',
      headline: 'Marcas que se recuerdan, campañas que convierten',
      subheadline:
        'Combinamos estrategia, diseño y performance para que tu marca destaque en un mercado saturado. Resultados medibles desde el día uno.',
      ctaPrimary: { label: 'Ver nuestro trabajo', href: '/portfolio' },
      ctaSecondary: { label: 'Agendar llamada', href: '/contact' },
    },
    {
      type: 'logo-cloud',
      headline: 'Marcas que confiaron en nosotros',
      logos: [
        { name: 'Mercado Libre', src: '/images/logos/mercadolibre.svg' },
        { name: 'Rappi', src: '/images/logos/rappi.svg' },
        { name: 'Naranja X', src: '/images/logos/naranjax.svg' },
        { name: 'Tiendanube', src: '/images/logos/tiendanube.svg' },
        { name: 'Ualá', src: '/images/logos/uala.svg' },
      ],
    },
    {
      type: 'features-grid',
      badge: 'Servicios',
      headline: 'Todo lo que necesitas para crecer online',
      subheadline: 'Un equipo multidisciplinario que cubre todo el funnel, de la marca a la conversión.',
      columns: 3,
      features: [
        { icon: 'bx-palette', title: 'Branding & Identidad', description: 'Logos, sistemas de diseño y guías de marca que comunican quién eres.' },
        { icon: 'bxs-megaphone', title: 'Performance Marketing', description: 'Campañas de Google Ads y Meta con optimización continua y reportes semanales.' },
        { icon: 'bx-search-alt', title: 'SEO & Contenido', description: 'Estrategia de contenido y optimización técnica para ranking orgánico sostenible.' },
        { icon: 'bx-code-block', title: 'Web & Landing Pages', description: 'Diseño y desarrollo web orientado a conversión, velocidad y experiencia.' },
        { icon: 'bx-film', title: 'Producción de Contenido', description: 'Video, fotografía y copy para redes sociales que generan engagement real.' },
        { icon: 'bx-bar-chart-alt-2', title: 'Analytics & CRO', description: 'Medimos todo, optimizamos lo que importa. Data-driven desde la semana uno.' },
      ],
    },
    {
      type: 'stats',
      stats: [
        { value: '8', label: 'Años de experiencia', suffix: '+' },
        { value: '200', label: 'Proyectos entregados', suffix: '+' },
        { value: '3.2x', label: 'ROAS promedio en campañas' },
        { value: '95', label: 'Clientes que renuevan', suffix: '%' },
      ],
      layout: 'grid',
    },
    {
      type: 'testimonials',
      badge: 'Clientes',
      headline: 'Lo que dicen quienes ya crecieron con nosotros',
      testimonials: [
        {
          quote: 'Kreativ transformó nuestra identidad visual. El nuevo branding nos abrió puertas con clientes enterprise que antes ni nos consideraban.',
          author: 'Luciana Méndez',
          role: 'CEO',
          company: 'Tecnostack',
          rating: 5,
        },
        {
          quote: 'En 6 meses triplicamos el tráfico orgánico y bajamos el CAC un 40%. El equipo de SEO de Kreativ es de otro nivel.',
          author: 'Martín Salas',
          role: 'Director de Marketing',
          company: 'EduPlay',
          rating: 5,
        },
        {
          quote: 'Las campañas de Meta que gestionan nos generan un ROAS de 4.8x consistentemente. Y siempre están disponibles.',
          author: 'Valentina Cruz',
          role: 'E-commerce Manager',
          company: 'ModaRápida',
          rating: 5,
        },
      ],
    },
    {
      type: 'cta-banner',
      headline: '¿Tienes un proyecto en mente?',
      subheadline: 'Cuéntanos sobre tu marca. Primera consulta sin costo.',
      ctaPrimary: { label: 'Agendar consulta gratuita', href: '/contact' },
      ctaSecondary: { label: 'Ver portafolio', href: '/portfolio' },
      variant: 'dark',
    },
    {
      type: 'footer',
      tagline: 'Estrategia, diseño y performance bajo un mismo techo.',
      columns: [
        {
          title: 'Servicios',
          links: [
            { label: 'Branding', href: '/services/branding' },
            { label: 'Performance Ads', href: '/services/ads' },
            { label: 'SEO', href: '/services/seo' },
            { label: 'Web Design', href: '/services/web' },
          ],
        },
        {
          title: 'Agencia',
          links: [
            { label: 'Portafolio', href: '/portfolio' },
            { label: 'Nosotros', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contacto', href: '/contact' },
          ],
        },
      ],
      social: [
        { platform: 'instagram', href: 'https://instagram.com' },
        { platform: 'linkedin', href: 'https://linkedin.com' },
        { platform: 'twitter', href: 'https://twitter.com' },
      ],
      copyright: '© 2025 Kreativ Studio. Todos los derechos reservados.',
    },
  ],
}
