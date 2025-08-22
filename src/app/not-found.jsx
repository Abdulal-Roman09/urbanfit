// app/not-found.jsx
"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 text-center">
      <FaExclamationTriangle className="w-16 h-16 text-red-500 mb-6" />
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition"
      >
         Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
