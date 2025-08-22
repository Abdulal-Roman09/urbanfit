// src/app/dashboard/add-product/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import LoadingPage from "@/app/loading";

export default function AddProductPage() {
  const router = useRouter();
  const [loadingSession, setLoadingSession] = useState(true);
  const [user, setUser] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Check user session
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();

        if (!data?.user) {
          router.push("/login"); // লগইন না থাকলে redirect
        } else {
          setUser(data.user);
          setLoadingSession(false);
        }
      } catch (err) {
        console.error(err);
        router.push("/login");
      }
    };
    checkUser();
  }, [router]);

  const submitHandler = async (formData) => {
    setLoadingSubmit(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log(result);

      if (result.success) {
        alert("Product added successfully!");
        reset();
      } else {
        alert("Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
    setLoadingSubmit(false);
  };

  if (loadingSession) return <LoadingPage/>

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
          Add New Product
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              required
              placeholder="UrbanFit Classic T-Shirt"
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
              Price ($)
            </label>
            <input
              {...register("price")}
              type="number"
              step="0.01"
              required
              placeholder="19.99"
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
              Image URL
            </label>
            <input
              {...register("image")}
              type="text"
              placeholder="https://image-url.com"
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
              Category
            </label>
            <input
              {...register("category")}
              type="text"
              required
              placeholder="T-Shirts"
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
              Brand
            </label>
            <input
              {...register("brand")}
              type="text"
              required
              placeholder="UrbanFit"
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
              Description
            </label>
            <textarea
              {...register("description")}
              required
              placeholder="Premium cotton t-shirt designed for everyday comfort."
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
            />
          </div>
            {/* Stock, Rating, Reviews, Discount */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                Stock
              </label>
              <input
                {...register("stock")}
                type="number"
                placeholder="120"
                className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                Rating
              </label>
              <input
                {...register("rating")}
                type="number"
                step="0.1"
                placeholder="4.5"
                className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                Reviews
              </label>
              <input
                {...register("reviews")}
                type="number"
                placeholder="34"
                className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                Discount (%)
              </label>
              <input
                {...register("discount")}
                type="number"
                placeholder="0"
                className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-md text-slate-900 dark:text-white outline-teal-600 dark:bg-gray-700"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loadingSubmit}
            className="mt-6 w-full py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-md transition"
          >
            {loadingSubmit ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
