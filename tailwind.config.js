/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'success-100': 'var(--color-success-100)',
          'success-200': 'var(--color-success-200)',
          'destructive-100': 'var(--color-destructive-100)',
          'destructive-200': 'var(--color-destructive-200)',
          'primary-100': 'var(--color-primary-100)',
          'primary-200': 'var(--color-primary-200)',
          'light-100': 'var(--color-light-100)',
          'light-400': 'var(--color-light-400)',
          'light-600': 'var(--color-light-600)',
          'light-800': 'var(--color-light-800)',
          'dark-100': 'var(--color-dark-100)',
          'dark-200': 'var(--color-dark-200)',
          'dark-300': 'var(--color-dark-300)',
          border: "var(--color-border)",
          input: "var(--color-input)",
          ring: "var(--color-ring)",
          background: "var(--color-background)",
          foreground: "var(--color-foreground)",
          primary: {
            DEFAULT: "var(--color-primary)",
            foreground: "var(--color-primary-foreground)",
          },
          secondary: {
            DEFAULT: "var(--color-secondary)",
            foreground: "var(--color-secondary-foreground)",
          },
          muted: {
            DEFAULT: "var(--color-muted)",
            foreground: "var(--color-muted-foreground)",
          },
          accent: {
            DEFAULT: "var(--color-accent)",
            foreground: "var(--color-accent-foreground)",
          },
          destructive: {
            DEFAULT: "var(--color-destructive)",
          },
        },
        fontFamily: {
          'mona-sans': "var(--font-mona-sans)",
        },
        backgroundImage: {
          'pattern': "var(--bg-pattern)",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
    plugins: [
      require('tailwindcss-animate')
    ],
  }