import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with a left sidebar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          {/* 왼쪽 사이드바 */}
          <aside className="sidebar">
            <nav>
              <ul className="flex flex-col items-center space-y-5 p-5 m-4">
                <Image src="/logo.png" alt="로고 이미지" width={250} height={100} />
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* 메인 콘텐츠 영역 */}
          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
