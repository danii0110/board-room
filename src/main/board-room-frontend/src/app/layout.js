"use client";

import Image from "next/image";
import "./globals.css";
import Modal from "./components/modal";
import { useState } from "react";

// export const metadata = {
//   title: "My Next.js App",
//   description: "A Next.js app with a left sidebar",
// };

export default function RootLayout({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <html lang="en">
      <body>
        <div className="layout-container relative">
          {/* 로그인 버튼 */}
          <div className="absolute top-5 right-6">
            <button 
              onClick={handleOpenModal}
              className="bg-customOrange text-white py-2 px-4 rounded hover:bg-orange-400">
              로그인
            </button>
          </div>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="flex flex-col items-center">
              <Image src="/logo.png" alt="로고 이미지" width={200} height={80} />
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="useremail" className="block-mb-1">
                  이메일
                </label>
                <input  
                  id="useremail"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="block-mb-1">
                  비밀번호
                </label>
                <input 
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-customOrange text-white py-2 px-4 rounded hover:bg-orange-400"
              >
              로그인
              </button>
              <div className="border-t border-gray-300"></div>
            </form>
          </Modal>

          {/* 구분선 */}
          <div className="absolute top-20 left-[250px] w-[calc(100%-250px)] border-t border-gray-300"></div>

          {/* 왼쪽 사이드바 */}
          <aside className="sidebar w-[250px] fixed h-full bg-gray-100">
            <nav>
              <ul className="flex flex-col items-center space-y-5 p-5 m-4">
                <Image src="/logo.png" alt="로고 이미지" width={200} height={80} />
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* 메인 콘텐츠 영역 */}
          <main className="content ml-[250px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
