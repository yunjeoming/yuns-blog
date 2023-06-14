import Footer from './component/Footer';
import './globals.css';
import { cookies } from 'next/dist/client/components/headers';
import { Theme } from '@/types/Common';
import { Header } from './component/Header';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: {
    template: "%s | Yun's blog",
    default: "Yun's blog"
  },
  description: '생각하고 기록하는 공간',
  authors: {
    name: 'yunjeoming'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = (cookies().get('theme')?.value as Theme) || 'light';
  return (
    <html lang="ko" className={`${theme === 'dark' ? 'dark' : ''}`}>
      <head>
        <link rel="icon" href="/static/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark">
          <Header theme={theme} />
          <main className="flex-grow flex flex-col items-center w-full px-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
