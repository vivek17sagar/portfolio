import React from "react";
import Loader from "./Loader";

const Stepper = () => {
  return (
    <div>
      <ol className="flex items-center">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-yellow-400">
          <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-yellow-400 shrink-0">
            <svg
              className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-white -rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>

        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
          <Loader />
        </li>
      </ol>
    </div>
  );
};

export default Stepper;
