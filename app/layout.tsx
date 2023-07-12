import Footer from './component/Footer';
import './globals.css';
import { Header } from './component/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | Yun's blog",
    default: "Yun's blog",
  },
  description: '생각하고 기록하는 공간',
  authors: {
    name: 'yunjeoming',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/static/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark">
          <Header />
          <main className="flex-grow flex flex-col items-center w-full px-6">{children}</main>
          <Footer />
        </div>
        <script
          async={true}
          dangerouslySetInnerHTML={{
            __html: `
            const localStorageTheme = localStorage.getItem("theme");
            const theme = localStorageTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            if (theme === 'dark') {
              document.body.classList.add(theme)
            }`,
          }}
        ></script>
      </body>
    </html>
  );
}
