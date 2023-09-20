/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme.js';

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '200px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['NotoSans', 'NotoSans-KR', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              whiteSpace: 'pre-wrap',
            },
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
            img: {
              width: '100%',
              maxWidth: '56rem',
              margin: '2rem auto 4rem',
              borderRadius: '0.4rem'
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
        'header-mo': 'var(--height-header-mo)',
        'main-pc': 'calc(100vh - var(--height-header-pc))',
        'main-mo': 'calc(100vh - var(--height-header-mo))',
      },
      textColor: {
        'main-dark': '#ececec',
        'navbar-hover': '#8f8f8f',
        tag: 'var(--tag-color)',
        'tag-dark': 'var(--dark-tag-color)',
        'tag-selected': 'var(--tag-color-selected)',
        'tag-selected-dark': 'var(--dark-tag-color-selected)',
        'tag-hover': 'var(--tag-color-hover)',
      },
      backgroundColor: {
        main: '#ffffff',
        'main-dark': '#202123',
        'tag-selected': 'var(--tag-bgc-selected)',
        'tag-selected-dark': 'var(--dark-tag-bgc-selected)',
        'tag-hover': 'var(--tag-bgc-hover)',
        'tag-hover-dark': 'var(--dark-tag-bgc-hover)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        'dark-header': '#898989',
        tag: 'var(--tag-border-color)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
