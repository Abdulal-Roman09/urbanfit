"use client";

import { FaSpinner } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 text-center">
      <FaSpinner className="w-12 h-12 text-teal-600 animate-spin mb-6" />
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        Loading...
      </h1>

    </div>
  );
};

export default LoadingPage;
