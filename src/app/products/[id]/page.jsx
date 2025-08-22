// app/products/[id]/page.jsx
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

const ProductDetailsPage = async ({ params }) => {
  const { id } = params;

  const allProducts = dbConnect("products");
  const product = await allProducts.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500 dark:text-red-400">
        Product not found 🚫
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 py-5 md:py-10">
        {/* Product Image */}
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.image || "/images/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            {product.label && (
              <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                {product.label}
              </span>
            )}

            <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              {product.name}
            </h1>

            <p className="text-2xl text-gray-800 dark:text-gray-200 mt-2">
              ${product.price}{" "}
              {product.discount > 0 && (
                <span className="text-sm text-red-600 dark:text-red-400 line-through ml-2">
                  ${((product.price * 100) / (100 - product.discount)).toFixed(2)}
                </span>
              )}
            </p>

            {product.brand && (
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                <strong>Brand:</strong> {product.brand}
              </p>
            )}
            {product.category && (
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                <strong>Category:</strong> {product.category}
              </p>
            )}
            {product.material && (
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                <strong>Material:</strong> {product.material}
              </p>
            )}

            {/* Stock */}
            <p
              className={`mt-2 font-medium ${
                product.stock > 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {product.stock > 0 ? "In Stock ✅" : "Out of Stock ❌"}
            </p>

            {/* Rating */}
            {product.rating && (
              <p className="mt-1 text-yellow-500 dark:text-yellow-400">
                ⭐ {product.rating} ({product.reviews} reviews)
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description || "No description available for this product."}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className={`px-6 py-3 rounded-lg text-white font-medium transition ${
                product.stock > 0
                  ? "bg-teal-600 hover:bg-teal-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={product.stock <= 0}
            >
              🛒 Add to Cart
            </button>

            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              🔙 Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
