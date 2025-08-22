"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { registerUser } from "../actions/auth/registerUser";
import { useRouter } from "next/navigation"; 
import { signIn } from "next-auth/react"; 

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter(); 

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const res = await registerUser(data);

    if (res.success) {
      // success হলে home page এ পাঠাবে
      router.push("/");
    } else {
      alert(res.message || "Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="max-w-[480px] w-full">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h1 className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
            Register
          </h1>

          {/* Social Register Buttons */}
<div className="mt-6 flex flex-col gap-3">
  <button
    type="button"
    onClick={() => signIn("google", { callbackUrl: "/" })}
    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
  >
    <FaGoogle /> Sign up with Google
  </button>
  <button
    type="button"
    onClick={() => signIn("github", { callbackUrl: "/" })}
    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
  >
    <FaGithub /> Sign up with GitHub
  </button>
</div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-2 text-gray-400 dark:text-gray-300 text-sm">
            <span className="flex-grow border-t border-gray-300 dark:border-gray-600"></span>
            <span>or</span>
            <span className="flex-grow border-t border-gray-300 dark:border-gray-600"></span>
          </div>

          {/* Register Form */}
          <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-slate-900 dark:text-white text-sm font-medium mb-2 block">
                Full Name
              </label>
              <input
                {...register("fullname")}
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full text-slate-900 dark:text-white text-sm border border-slate-300 dark:border-gray-600 px-4 py-3 rounded-md outline-teal-600 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="text-slate-900 dark:text-white text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                required
                placeholder="Enter your email"
                className="w-full text-slate-900 dark:text-white text-sm border border-slate-300 dark:border-gray-600 px-4 py-3 rounded-md outline-teal-600 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="text-slate-900 dark:text-white text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                required
                placeholder="Enter your password"
                className="w-full text-slate-900 dark:text-white text-sm border border-slate-300 dark:border-gray-600 px-4 py-3 rounded-md outline-teal-600 dark:bg-gray-700"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                {...register("agree")}
                type="checkbox"
                id="agree"
                className="h-4 w-4 shrink-0 text-teal-600 focus:ring-teal-500 border-slate-300 dark:border-gray-600 rounded"
                required
              />
              <label
                htmlFor="agree"
                className="text-slate-900 dark:text-white text-sm"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div className="!mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition"
              >
                Register
              </button>
            </div>

            <p className="text-slate-900 dark:text-white text-sm !mt-6 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-teal-600 dark:text-teal-400 hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
