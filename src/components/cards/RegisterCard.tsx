"use client";
import Link from "next/link";
import React from "react";

const LoginCard = () => {
  return (
    <div className="max-w-110 w-full flex flex-col items-center justify-center gap-4 rounded-md shadow-sm/30 py-6 px-4">
      <h1 className="font-semibold text-xl text-stone-700">Register</h1>
      <form className="w-full flex flex-col mt-2 gap-4">
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Full name
          </label>
          <input
            type="text"
            placeholder="Jhon Doe"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-300 outline-none"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">E-mail</label>
          <input
            type="text"
            placeholder="demomail@gmail.com"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
        </div>
        <div>
          <button className="w-full px-5 py-2 flex items-center justify-center font-medium text-md text-stone-800 bg-neutral-300 rounded-sm ease duration-300 hover:bg-neutral-400">
            Login
          </button>
        </div>
      </form>
      <hr className="w-full border-neutral-300 h-[2px] mt-3 mb-1" />
      <p className="font-medium text-sm text-stone-600 mb-8 mt-3">
        Already have an account?{" "}
        <Link href={"/auth/login"}>
          <b>Login</b>
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
