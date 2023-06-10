import Footer from './component/Footer';
import { Header } from './component/Header';
import './globals.css';
import { cookies } from 'next/dist/client/components/headers';
import { Theme } from '@/types/Blog';

export const metadata = {
  title: "Yun's blog",
  description: '생각하고 기록하는 공간',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = (cookies().get('theme')?.value as Theme) || 'light';
  return (
    <html lang="ko" className={`${theme === 'dark' ? 'dark' : ''}`}>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark">
          <Header theme={theme} />
          <main className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-baseline flex-grow w-full xl:max-w-header px-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
