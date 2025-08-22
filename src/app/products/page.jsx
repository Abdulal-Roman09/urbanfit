import Products from "@/components/products";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Products Grid */}
      <div className="contaier mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Products />
      </div>
    </div>
  );
};

export default page;
