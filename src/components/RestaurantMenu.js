import React, { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = ({ data }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="font-sans text-gray-900 border-b-8"
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 text-lg font-medium "
          onClick={() => toggleAccordion(0)}
          aria-expanded={openAccordion === 0}
          aria-controls="accordion-collapse-body-1"
        >
          <span className="">
            {data.title}({data.itemCards.length})
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${openAccordion === 0 ? "block" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5">
          <RestaurantMenuItem data={data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
