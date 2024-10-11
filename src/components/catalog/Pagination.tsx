"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const PAGE_SIZE = 2;

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const handlePageChange = (page: number) => {
    if (page < 0 || page >= totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-[10px] bg-white"
      >
        <IconArrowLeft color="black" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index)}
          className={`w-10 h-10 border border-gray-300 rounded-[10px] ${
            currentPage === index ? "bg-blue-500 text-white" : "bg-white text-black"
          } mx-1`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-[10px] bg-white"
      >
        <IconArrowRight color="black" />
      </button>
    </div>
  );
};

export default Pagination;
