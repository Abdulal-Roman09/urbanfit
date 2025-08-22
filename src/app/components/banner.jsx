// app/components/Banner.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-white  dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
            Elevate Your Style with{" "}
            <strong className="text-teal-600">UrbanFit</strong>
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg dark:text-gray-200">
            Discover the latest streetwear trends, premium casuals, and
            sustainable fashion curated just for you. Step out in style, every day.
          </p>

          <div className="mt-6 flex justify-center gap-4 sm:mt-8">
            <Link
              className="inline-block rounded border border-teal-600 bg-teal-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-teal-700 hover:scale-105"
              href="#shop"
            >
              Shop Now
            </Link>

            <Link
              className="inline-block rounded border border-gray-200 px-6 py-3 font-medium text-gray-700 shadow transition-all hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#collection"
            >
              Explore Collection
            </Link>
          </div>

          {/* Optional Banner Image */}
          {/* <div className="mt-12 relative h-80 sm:h-96 lg:h-[28rem]">
            <Image
              src="/images/urbanfit-banner.jpg"
              alt="UrbanFit Clothing"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
