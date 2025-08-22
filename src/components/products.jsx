// app/components/Products.jsx
import Image from "next/image";
import Link from "next/link";
import { dbConnect } from "../lib/dbConnect";

const Products = async () => {
  const collection = dbConnect("products");
  const data = await collection.find({}).toArray();

  return (
    <div className="bg-gray-900 py-10  ">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Explore Our Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover the latest collection at the best prices
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div
              key={item._id.toString()}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Product Image */}
              <Link href={`/products/${item._id}`}>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={item.image }
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-5">
                {item.label && (
                  <span className="inline-block bg-teal-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {item.label}
                  </span>
                )}

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
                  {item.name}
                </h3>

                <p className="mt-1 text-gray-700 dark:text-gray-300 font-medium">
                  ${item.price}
                  {item.discount > 0 && (
                    <span className="ml-2 text-sm text-red-500 line-through">
                      ${((item.price * 100) / (100 - item.discount)).toFixed(2)}
                    </span>
                  )}
                </p>

                {/* Action Button */}
                <Link
                  href={`/products/${item._id}`}
                  className="mt-4 block w-full rounded-lg bg-teal-600 px-4 py-2.5 text-center text-sm font-medium text-white shadow hover:bg-teal-500 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
