/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '200px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#d83707',
              fontWeight: 400,
              backgroundColor: '#e4e4e4',
              borderRadius: '0.4rem',
              padding: '0.2rem 0.4rem',
              marginRight: '0.1rem',
              '&:not(:where([class~="not-prose"] *))::before': {
                display: 'none',
              },
              '&:not(:where([class~="not-prose"] *))::after': {
                display: 'none',
              },
            },
          },
        },
      },
      maxWidth: {
        header: 'var(--max-width-header)',
        post: 'var(--max-width-post)',
      },
      height: {
        'header-pc': 'var(--height-header-pc)',
        'main-pc': 'calc(100vh - var(--height-header-pc))',
        'header-tablet': 'var(--height-header-tablet)',
        'main-tablet': 'calc(100vh - var(--height-header-tablet))',
      },
      top: {
        'header-pc': 'var(--height-header-pc)',
        'header-tablet': 'var(--height-header-tablet)',
      },
      textColor: {
        'main-dark': '#ececec',
        tag: '#6a6a6a',
        'tag-dark': '#ececec',
        'tag-selected': '#ffffff',
        'tag-selected-dark': '#ffffff',
        'tag-hover': '#dcdcdc',
      },
      backgroundColor: {
        main: '#ffffff',
        'main-dark': '#202123',
        tag: '#f2f2f2',
        'tag-dark': '#3c3c3c',
        'tag-selected': '#3c3c3c',
        'tag-selected-dark': '#8f8f8f',
        'tag-hover': '#dadada',
        'tag-hover-dark': '#5e5e5e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        'dark-header': '#898989',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
