import type { PageConfig } from '@/types/silicon'

export const portfolioTemplate: PageConfig = {
  id: 'tpl-portfolio',
  templateId: 'portfolio',
  name: 'Portfolio — Freelancer / Creativo',
  description: 'Landing page personal para freelancers y creativos con hero bold, servicios, stats y CTA.',
  colors: {
    primary: '#ec4899',
    secondary: '#fdf2f8',
    accent: '#f9a8d4',
    dark: '#1a0a12',
  },
  meta: {
    title: 'Camila Rivas — Diseñadora UX/UI',
    description: 'Diseño interfaces que la gente realmente quiere usar. Freelance disponible.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'agency',
      headline: 'Diseño que convierte visitantes en clientes',
      subheadline:
        'Soy Camila, diseñadora UX/UI con 6 años de experiencia en productos digitales. Ayudo a startups y empresas a crear interfaces que la gente realmente quiere usar.',
      ctaPrimary: { label: 'Ver mis proyectos', href: '/work' },
      ctaSecondary: { label: 'Trabajar juntos', href: '/contact' },
      media: { type: 'image', src: '/images/hero/portfolio-hero.jpg', alt: 'Proyectos de Camila Rivas' },
    },
    {
      type: 'features-grid',
      badge: 'Servicios',
      headline: 'Lo que puedo hacer por tu producto',
      columns: 3,
      features: [
        { icon: 'bx-search-alt', title: 'UX Research', description: 'Entrevistas, mapas de empatía y análisis heurístico para entender a tus usuarios antes de diseñar.' },
        { icon: 'bx-layer', title: 'UI Design', description: 'Interfaces visuales en Figma. Sistemas de diseño consistentes y escalables.' },
        { icon: 'bxs-map-pin', title: 'Diseño de experiencia', description: 'Flujos, wireframes y prototipos interactivos que validan la solución antes de desarrollar.' },
        { icon: 'bx-mobile-alt', title: 'Diseño responsive', description: 'Mobile-first siempre. Cada pantalla diseñada para el dispositivo correcto.' },
        { icon: 'bx-test-tube', title: 'A/B Testing', description: 'Propongo hipótesis, diseño variantes y analizo los resultados para mejorar conversión.' },
        { icon: 'bx-code-alt', title: 'Handoff a desarrollo', description: 'Specs detalladas, assets exportados y documentación para que el equipo dev lo implemente bien.' },
      ],
    },
    {
      type: 'stats',
      stats: [
        { value: '6', label: 'Años de experiencia', suffix: '+' },
        { value: '80', label: 'Proyectos entregados', suffix: '+' },
        { value: '40', label: 'Clientes en 12 países', suffix: '+' },
        { value: '4.9', label: 'Rating promedio en Upwork', suffix: '/5' },
      ],
      layout: 'row',
    },
    {
      type: 'testimonials',
      badge: 'Clientes',
      headline: 'Lo que dicen quienes trabajaron conmigo',
      testimonials: [
        {
          quote: 'Camila redeseñó nuestro onboarding y la tasa de activación subió un 34% en el primer mes. No solo diseña lindo, diseña para resultados.',
          author: 'Pablo Reyes',
          role: 'CEO',
          company: 'Sendflow',
          rating: 5,
        },
        {
          quote: 'El sistema de diseño que entregó Camila nos ahorró semanas de trabajo en el equipo de producto. Documentación impecable.',
          author: 'Romina Soto',
          role: 'Head of Product',
          company: 'Trackify',
          rating: 5,
        },
        {
          quote: 'Trabaja increíblemente bien en remoto. Comunicación proactiva, entrega a tiempo y el nivel de detalle en los diseños es de primer nivel.',
          author: 'Thomas Müller',
          role: 'CTO',
          company: 'Neobank GmbH',
          rating: 5,
        },
      ],
    },
    {
      type: 'cta-banner',
      headline: '¿Tienes un proyecto que necesita buen diseño?',
      subheadline: 'Cuéntame sobre tu producto. Respondo en menos de 24 horas.',
      ctaPrimary: { label: 'Enviar propuesta', href: '/contact' },
      ctaSecondary: { label: 'Ver CV', href: '/cv.pdf' },
      variant: 'dark',
    },
    {
      type: 'footer',
      tagline: 'Diseño UX/UI para productos digitales.',
      columns: [
        {
          title: 'Navegación',
          links: [
            { label: 'Proyectos', href: '/work' },
            { label: 'Servicios', href: '/services' },
            { label: 'Sobre mí', href: '/about' },
            { label: 'Contacto', href: '/contact' },
          ],
        },
        {
          title: 'Trabajo',
          links: [
            { label: 'Perfil Upwork', href: 'https://upwork.com' },
            { label: 'Dribbble', href: 'https://dribbble.com' },
            { label: 'Behance', href: 'https://behance.net' },
          ],
        },
      ],
      social: [
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'linkedin', href: 'https://linkedin.com' },
        { platform: 'instagram', href: 'https://instagram.com' },
      ],
      copyright: '© 2025 Camila Rivas. Diseñadora UX/UI Freelance.',
    },
  ],
}
