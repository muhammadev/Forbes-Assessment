import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111111',
          red: '#e1261c',
          paper: '#f7f7f5',
          line: '#d8d8d5',
          muted: '#666666',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        brand: ['Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'heading-1': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-2': ['28px', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'heading-3': ['24px', { lineHeight: '1.3' }],
        'heading-4': ['20px', { lineHeight: '1.35' }],
        'heading-5': ['18px', { lineHeight: '1.4' }],
        'heading-6': ['16px', { lineHeight: '1.4' }],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
}
