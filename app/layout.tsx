import Footer from './component/Footer';
import MainHeader from './component/MainHeader';
import SubHeader from './component/SubHeader';
import './globals.css';

export const metadata = {
  title: "Yun's blog",
  description: '생각하고 기록하는 공간',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <MainHeader />
          <SubHeader />
          <div className="flex flex-grow w-full xl:max-w-7xl">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
