import type { PageConfig } from '@/types/silicon'

export const medicalTemplate: PageConfig = {
  id: 'tpl-medical',
  templateId: 'medical',
  name: 'Medical — Clínica / Salud Digital',
  description: 'Landing page para clínica o servicio de salud digital con hero minimal, features y FAQ.',
  colors: {
    primary: '#10b981',
    secondary: '#f0fdf4',
    accent: '#34d399',
    dark: '#064e3b',
  },
  meta: {
    title: 'Sanar — Atención médica online cuando la necesitas',
    description: 'Consultas médicas por videollamada con especialistas certificados. En 15 minutos o menos.',
  },
  sections: [
    {
      type: 'hero',
      variant: 'minimal',
      badge: 'Más de 500 médicos disponibles',
      headline: 'Tu médico en 15 minutos, desde donde estés',
      subheadline:
        'Sanar conecta a pacientes con médicos certificados vía videollamada. Sin turno, sin sala de espera, sin estrés. Disponible 24/7.',
      ctaPrimary: { label: 'Consultar ahora', href: '/consult' },
      ctaSecondary: { label: 'Ver especialidades', href: '/specialties' },
    },
    {
      type: 'features-grid',
      badge: 'Cómo te cuidamos',
      headline: 'Atención médica que se adapta a tu vida',
      subheadline: 'Tecnología y medicina al servicio de tu bienestar.',
      columns: 3,
      features: [
        { icon: 'bx-video', title: 'Consultas por videollamada', description: 'Habla cara a cara con un médico en minutos. Desde tu celular, tablet o PC.' },
        { icon: 'bxs-id-card', title: 'Recetas digitales', description: 'Recibe tu receta con firma digital en el mismo momento de la consulta.' },
        { icon: 'bx-history', title: 'Historial clínico digital', description: 'Toda tu historia clínica en un lugar seguro y accesible desde cualquier dispositivo.' },
        { icon: 'bxs-user-check', title: 'Médicos certificados', description: 'Todos los profesionales tienen matrícula verificada y pasan por un proceso de validación.' },
        { icon: 'bx-lock-alt', title: 'Datos 100% seguros', description: 'Encriptación de extremo a extremo. Tus datos médicos nunca son vendidos ni compartidos.' },
        { icon: 'bx-support', title: 'Soporte 24/7', description: 'Equipo de soporte disponible todo el día para ayudarte con cualquier consulta.' },
      ],
    },
    {
      type: 'stats',
      stats: [
        { value: '500', label: 'Médicos activos', suffix: '+' },
        { value: '98', label: 'Satisfacción de pacientes', suffix: '%' },
        { value: '12min', label: 'Tiempo promedio de espera' },
        { value: '40', label: 'Especialidades disponibles', suffix: '+' },
      ],
      layout: 'grid',
    },
    {
      type: 'testimonials',
      badge: 'Pacientes',
      headline: 'Miles de pacientes confían en Sanar',
      testimonials: [
        {
          quote: 'Eran las 2am y mi bebé tenía fiebre. En 10 minutos tenía un pediatra online tranquilizándome y con indicaciones claras. Invaluable.',
          author: 'Fernanda López',
          role: 'Madre de 2',
          rating: 5,
        },
        {
          quote: 'Trabajo de noche y nunca podía sacar turno. Con Sanar consulto cuando yo puedo. Finalmente me revisé el colesterol que venía postergando hace 2 años.',
          author: 'Jorge Castillo',
          role: 'Enfermero',
          rating: 5,
        },
        {
          quote: 'Me diagnosticaron una infección de oídos por videollamada y recibí la receta en 5 minutos. Misma tarde ya estaba comprando el antibiótico.',
          author: 'Lucía Herrera',
          role: 'Estudiante',
          rating: 5,
        },
      ],
    },
    {
      type: 'faq',
      badge: 'FAQ',
      headline: 'Todo lo que necesitas saber',
      items: [
        { question: '¿Qué especialidades están disponibles?', answer: 'Medicina general, pediatría, ginecología, dermatología, cardiología, psicología, nutrición, traumatología y más de 40 especialidades. Si necesitas una especialidad específica, puedes filtrar al momento de reservar.' },
        { question: '¿Las consultas son cubiertas por mi obra social?', answer: 'Sí, tenemos convenio con más de 50 obras sociales y prepagas. Al registrarte puedes verificar si tu cobertura aplica. Si no tenés cobertura, el costo de la consulta es de $3,500.' },
        { question: '¿Cómo funciona la receta digital?', answer: 'Una vez finalizada la consulta, el médico emite la receta con su firma digital. La recibes por email y en tu perfil de Sanar. Es válida en todas las farmacias adheridas al sistema de recetas electrónicas.' },
        { question: '¿Qué pasa si necesito un examen físico?', answer: 'Para casos donde se requiera examen físico, el médico te derivará a un centro cercano o coordinará una visita domiciliaria. Sanar también tiene red de laboratorios asociados para análisis.' },
        { question: '¿Mis datos médicos están seguros?', answer: 'Absolutamente. Cumplimos con la Ley 25.326 de Protección de Datos Personales y la Ley 26.529 de Derechos del Paciente. Utilizamos encriptación AES-256 y nunca vendemos ni compartimos tu información.' },
      ],
    },
    {
      type: 'cta-banner',
      headline: 'Tu salud no puede esperar',
      subheadline: 'Primera consulta con un 30% de descuento. Sin compromisos.',
      ctaPrimary: { label: 'Consultar ahora', href: '/consult' },
      ctaSecondary: { label: 'Ver especialidades', href: '/specialties' },
      variant: 'primary',
    },
    {
      type: 'footer',
      tagline: 'Salud accesible para todos.',
      columns: [
        {
          title: 'Especialidades',
          links: [
            { label: 'Medicina General', href: '/specialty/general' },
            { label: 'Pediatría', href: '/specialty/pediatrics' },
            { label: 'Psicología', href: '/specialty/psychology' },
            { label: 'Nutrición', href: '/specialty/nutrition' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Para empresas', href: '/b2b' },
            { label: 'Médicos', href: '/for-doctors' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contacto', href: '/contact' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacidad', href: '/privacy' },
            { label: 'Términos', href: '/terms' },
            { label: 'Consentimiento', href: '/consent' },
          ],
        },
      ],
      social: [
        { platform: 'instagram', href: 'https://instagram.com' },
        { platform: 'facebook', href: 'https://facebook.com' },
        { platform: 'twitter', href: 'https://twitter.com' },
      ],
      copyright: '© 2025 Sanar Salud Digital S.A. Matrícula SSSALUD Nº xxxx. Las consultas no reemplazan la atención médica de emergencia.',
    },
  ],
}
