import { zipSync, strToU8 } from 'fflate'
import type { PageConfig } from '@/types/silicon'

const SILICON_TOKENS_CSS = `/* Silicon Design System — CSS custom properties */
:root {
  --si-primary: #6366f1;
  --si-primary-faded: rgba(99, 102, 241, 0.12);
  --si-secondary: #eff2fc;
  --si-success: #22c55e;
  --si-info: #4c82f7;
  --si-warning: #ffba08;
  --si-danger: #ef4444;
  --si-dark: #0b0f19;
  --si-white: #ffffff;
  --si-gray-100: #f3f4f6;
  --si-gray-200: #e5e7eb;
  --si-gray-300: #d1d5db;
  --si-gray-400: #9ca3af;
  --si-gray-500: #6b7280;
  --si-gray-600: #4b5563;
  --si-gray-700: #374151;
  --si-gray-800: #1f2937;
  --si-gray-900: #111827;
  --si-body-bg: #ffffff;
  --si-body-color: #374151;
  --si-heading-color: #0b0f19;
  --si-font-family: 'Manrope', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --si-font-size-base: 1rem;
  --si-line-height-base: 1.625;
  --si-border-color: #e5e7eb;
  --si-border-radius: 0.5rem;
  --si-border-radius-sm: 0.25rem;
  --si-border-radius-lg: 0.75rem;
  --si-border-radius-xl: 1rem;
  --si-border-radius-pill: 50rem;
  --si-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --si-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 0, 0, 0.15);
  --si-shadow-lg: 0 1.125rem 2.5rem -0.5rem rgba(0, 0, 0, 0.15);
  --si-shadow-xl: 0 1.5rem 3.5rem -0.5rem rgba(0, 0, 0, 0.2);
  --si-spacer: 1rem;
  --si-transition-base: all 0.25s ease-in-out;
  --si-transition-fade: opacity 0.15s linear;
}

.dark {
  --si-body-bg: #0b0f19;
  --si-body-color: #9ca3af;
  --si-heading-color: #ffffff;
  --si-border-color: rgba(255, 255, 255, 0.1);
}

*, *::before, *::after { box-sizing: border-box; }

body {
  font-family: var(--si-font-family);
  background-color: var(--si-body-bg);
  color: var(--si-body-color);
  margin: 0;
  line-height: 1.625;
}
`

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

function escapeStr(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n')
}

export async function POST(req: Request): Promise<Response> {
  const body = (await req.json()) as {
    pageConfig: PageConfig
    renderedHtml: string
    primaryColor?: string
  }

  const { pageConfig, renderedHtml, primaryColor } = body

  const slug = toSlug(pageConfig.name)
  const title = escapeStr(pageConfig.meta?.title ?? pageConfig.name)
  const description = escapeStr(pageConfig.meta?.description ?? pageConfig.description ?? '')
  const colorOverride =
    primaryColor !== undefined ? `\n:root { --si-primary: ${primaryColor}; }` : ''

  const packageJson = JSON.stringify(
    {
      name: slug,
      version: '0.1.0',
      private: true,
      scripts: {
        dev: 'next dev',
        build: 'next build',
        start: 'next start',
      },
      dependencies: {
        next: '15.1.3',
        react: '^18.3.1',
        'react-dom': '^18.3.1',
      },
    },
    null,
    2,
  )

  const nextConfigJs = `/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig
`

  const layoutTsx = `import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: '${title}',
  description: '${description}',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
`

  const pageTsx = `export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(renderedHtml)} }}
    />
  )
}
`

  const globalsCss = `/* Silicon Design System — CSS tokens */
${SILICON_TOKENS_CSS}${colorOverride}
`

  const readmeMd = `# ${pageConfig.name}

Generated with **Silicon Builder**.

## Setup

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000 in your browser.

## Files

- \`app/page.tsx\` — Rendered landing page (static HTML via dangerouslySetInnerHTML)
- \`app/globals.css\` — Silicon Design System CSS tokens
- \`page-config.json\` — Original page configuration (for reference / rebuilding)

## Customizing

The page is a static snapshot. To make it fully editable with React components,
integrate [\`@silicon/ui\`](https://github.com/farid-villacis/silicon-system) and
replace the \`dangerouslySetInnerHTML\` with \`<PageRenderer config={pageConfig} />\`.
`

  const files: Record<string, Uint8Array> = {
    [`${slug}/package.json`]: strToU8(packageJson),
    [`${slug}/next.config.js`]: strToU8(nextConfigJs),
    [`${slug}/app/layout.tsx`]: strToU8(layoutTsx),
    [`${slug}/app/page.tsx`]: strToU8(pageTsx),
    [`${slug}/app/globals.css`]: strToU8(globalsCss),
    [`${slug}/page-config.json`]: strToU8(JSON.stringify(pageConfig, null, 2)),
    [`${slug}/README.md`]: strToU8(readmeMd),
  }

  const zipData = zipSync(files)

  return new Response(zipData, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${slug}-nextjs.zip"`,
    },
  })
}
