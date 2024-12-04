"use client";

import React from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        // 모달 내용 영역을 클릭한 경우 이벤트 전파 중지
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleOverlayClick} // 클릭 이벤트 추가
        >
            <div
                className="bg-white rounded-lg p-6 w-1/3"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 중지
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
}
