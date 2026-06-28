import React from 'react';
import Image from 'next/image';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[calc(100vw-2rem)] sm:w-full md:max-w-md max-h-[90vh] overflow-y-auto transform transition-all">
        <div className="p-3 sm:p-6">
          <div className="flex justify-between items-center mb-3 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-serif italic flex items-center" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
              Buy Me A Milk Tea
            </h3>
            <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              ×
            </button>
          </div>

          <div className="text-center">
            <p className="mb-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">
              创作不易 可以请作者喝一杯奶茶吗
            </p>

            <div className="flex justify-center mb-4 sm:mb-5">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 p-1 sm:p-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg shadow-md">
                <Image
                  src="/donation-qr.svg"
                  alt="赞赏码"
                  fill
                  className="object-contain p-1 sm:p-2"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 bg-gray-50 py-1.5 px-3 sm:py-2 sm:px-4 rounded-full inline-block shadow-sm">
              微信扫描上方赞赏码，请作者喝一杯奶茶。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
