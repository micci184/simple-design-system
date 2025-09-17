import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: {
          DEFAULT: 'var(--color-background-default)',
          secondary: 'var(--color-background-default-secondary)',
          brand: {
            DEFAULT: 'var(--color-background-brand-default)',
            tertiary: 'var(--color-background-brand-tertiary)',
          },
          neutral: {
            tertiary: 'var(--color-background-neutral-tertiary)'
          }
        },
        // Text
        text: {
          DEFAULT: 'var(--color-text-default)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          onBrand: 'var(--color-text-on-brand)',
          onBrandSecondary: 'var(--color-text-on-brand-secondary)'
        },
        // Borders / Strokes
        border: {
          DEFAULT: 'var(--color-border-default)',
          brand: 'var(--color-border-brand)',
          neutralSecondary: 'var(--color-border-neutral-secondary)'
        },
        // Misc
        icon: {
          DEFAULT: 'var(--color-icon-default)'
        },
        slate: {
          200: 'var(--color-slate-200)'
        },
        placeholder: {
          image: 'var(--color-image-placeholder)'
        }
      },
      spacing: {
        '050': 'var(--spacing-050)',
        '200': 'var(--spacing-200)',
        '300': 'var(--spacing-300)',
        '400': 'var(--spacing-400)',
        '600': 'var(--spacing-600)',
        '800': 'var(--spacing-800)',
        '1200': 'var(--spacing-1200)',
        '1600': 'var(--spacing-1600)',
        '4000': 'var(--spacing-4000)'
      },
      borderRadius: {
        '200': 'var(--radius-200)',
        'full': 'var(--radius-full)'
      },
      borderWidth: {
        DEFAULT: 'var(--border-width)'
      },
      fontFamily: {
        sans: ['var(--font-family-base)', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        body: ['var(--font-size-body)', { lineHeight: 'var(--line-height-body)' }],
        heading: ['var(--font-size-heading)', { lineHeight: 'var(--line-height-heading)', fontWeight: 'var(--font-weight-heading)' }],
        subheading: ['var(--font-size-subheading)', { lineHeight: 'var(--line-height-subheading)', fontWeight: 'var(--font-weight-subheading)' }],
        subtitle: ['var(--font-size-subtitle)', { lineHeight: 'var(--line-height-subtitle)', fontWeight: 'var(--font-weight-subtitle)' }],
        hero: ['var(--font-size-hero)', { lineHeight: 'var(--line-height-hero)', fontWeight: 'var(--font-weight-hero)' }]
      },
      boxShadow: {
        // Shadow tokens not found in current MCP response; add mappings here once available
        // e.g., 'sm': 'var(--shadow-sm)'
      },
      // Expose icon size if needed
      extend: {
        // no-op nested extend guard (kept for future token sync)
      }
    }
  },
  plugins: []
} satisfies Config
