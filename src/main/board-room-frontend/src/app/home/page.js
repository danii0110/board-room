"use client";

import Link from "next/link";
import React, { useState } from "react";

const data = Array.from({length:50}, (_, index) => ({
    id: index + 1,
    title: `게시글 제목 ${index + 1}`,
    author: `작성자 ${index + 1}`,
    date: `2024-11-${(index % 30) + 1}`,
    views : Math.floor(Math.random() * 1000),
}));

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i<= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrev = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
    };
    
      // 다음 페이지로 이동
    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
          setCurrentPage(currentPage + 1);
        }
    };
    
    return (
        <div className="container mx-auto p-4 pt-24">
            <table className="min-w-full border-collapse">
                <thead className="bg-customOrange text-white">
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-300 rounded-tl-md rounded-bl-md text-center">No</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-center">제목</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-center">작성자</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-center">작성일</th>
                        <th className="px-4 py-2 border-b border-gray-300 rounded-tr-md rounded-br-md text-center">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 flex justify-center border-b border-gray-300 text-center">{indexOfFirstItem + index + 1}</td>
                            <td className="px-4 py-2 border-t border-b border-gray-300 text-center">{item.title}</td>
                            <td className="px-4 py-2 border-t border-b border-gray-300 text-center">{item.author}</td>
                            <td className="px-4 py-2 border-t border-b border-gray-300 text-center">{item.date}</td>
                            <td className="px-4 py-2 border-t border-b border-gray-300 text-center">{item.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div className="mt-6 flex items-center">
        {/* Pagination */}
              <div className="flex-grow flex justify-center items-center space-x-1">
          {/* Prev 화살표 */}
                <button
                  onClick={handlePrev}
                   disabled={currentPage === 1}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400 disabled:bg-gray-300"
                >
                  &lt;
                </button>

          {/* 페이지 번호 */}
          <ul className="flex space-x-1">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 text-sm rounded-md ${
                    currentPage === number
                      ? "bg-gray-500 text-white"
                      : "bg-white border border-gray-300 text-black hover:bg-gray-600"
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>

          {/* Next 화살표 */}
          <button
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400 disabled:bg-gray-300"
          >
            &gt;
          </button>
        </div>

        {/* 글쓰기 버튼 */}
        <div className="ml-auto">
          <button
            onClick={() => alert("글쓰기 페이지")}
            className="px-4 py-2 bg-customOrange text-white rounded-md hover:bg-orange-400"
          >
          글쓰기
          </button>
        </div>
      </div>
    </div>
    );
}