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
  const theme = cookies().get('theme')?.value as Theme || 'light';
  return (
    <html lang="ko" className={`${theme === 'dark' ? 'dark' : ''}`}>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark">
          <Header theme={theme} />
          <main className="flex flex-col lg:justify-center flex-grow w-full xl:max-w-6xl px-6 lg:flex-row ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
