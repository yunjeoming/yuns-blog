import Footer from './component/Footer';
import Header from './component/Header';
import './globals.css';

export const metadata = {
  title: "Yun's blog",
  description: '생각하고 기록하는 공간',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col justify-center items-center pt-14 sm:pt-16">
          <Header />
          <div className="flex flex-grow w-full xl:max-w-7xl">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
