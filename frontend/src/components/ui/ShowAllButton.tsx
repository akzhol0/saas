import React from "react";

type ShowAllButtonProps = {
  filteredMaxNumber: number;
};

const ShowAllButton = ({ filteredMaxNumber }: ShowAllButtonProps) => {
  return (
    <button
      className="group inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-6 py-3
        text-gray-800 transition hover:border-gray-500 hover:bg-gray-50 cursor-pointer"
    >
      {filteredMaxNumber === 4 ? <p>Посмотреть все</p> : <p>Закрыть</p>}
      <svg
        className={`h-5 w-5 transition-transform 
        ${filteredMaxNumber === 4 ? "group-hover:translate-y-1" : "group-hover:-translate-y-1"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {filteredMaxNumber === 4 ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 15l-7-7-7 7"
          />
        )}
      </svg>
    </button>
  );
};

export default ShowAllButton;
