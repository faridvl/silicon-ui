import type { Config } from 'tailwindcss'

/**
 * Silicon Design System — Tailwind preset
 * Tokens extraídos de silicon-v1.7.0/assets/scss/_variables.scss
 * Estos colores/valores replican 1:1 el sistema de diseño del tema original.
 */
const siliconPreset: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          faded: 'rgba(99,102,241,0.12)',
        },
        secondary: {
          DEFAULT: '#eff2fc',
        },
        success: '#22c55e',
        info: '#4c82f7',
        warning: '#ffba08',
        danger: '#ef4444',
        dark: {
          DEFAULT: '#0b0f19',
          800: '#1e2433',
          700: '#2c3345',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        sm: '0 .125rem .25rem rgba(0,0,0,.075)',
        DEFAULT: '0 .5rem 1.125rem -.5rem rgba(0,0,0,.15)',
        lg: '0 1.125rem 2.5rem -.5rem rgba(0,0,0,.15)',
        xl: '0 1.5rem 3.5rem -.5rem rgba(0,0,0,.2)',
        dark: '0 .5rem 1.125rem -.5rem rgba(0,0,0,.4)',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        pill: '50rem',
      },
      screens: {
        xs: '0px',
        sm: '500px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
}

export default siliconPreset
