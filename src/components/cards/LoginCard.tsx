"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ILog } from "../interface/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schema/authForm.schema";
import { useMutation } from "@tanstack/react-query";
import { logUser } from "@/app/api/apiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LuEye, LuEyeClosed, LuMail } from "react-icons/lu";

const LoginCard = () => {
  // initialising router to rout user from login to dashboard on success.
  const router = useRouter();

  const [seePassword, setSeePassword] = useState<boolean>(false);

  //  mutating the data received from the login form on the client to the server.
  const { mutate, isPending } = useMutation({
    mutationFn: logUser,
    mutationKey: ["validateUser"],
    onSuccess: (data) => {
      toast.success(data.message);
      Cookies.set("ticket", data.accessToken);
      Cookies.set("userId", data.data._id);
      Cookies.set("name", data?.data?.full_name);
      setTimeout(() => {
        reset();
        router.replace("/");
      }, 3000);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // validating the proper inputs on the login form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // function that mutates login form data to the backend
  const sendData = (data: ILog) => {
    mutate(data);
  };
  return (
    <div className="max-w-110 w-full flex flex-col items-center justify-center gap-4 rounded-md shadow-lg/50 bg-neutral-100 shadow-blue-400 py-6 px-4">
      <h1 className="font-semibold text-xl text-stone-700">Login</h1>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-full flex flex-col mt-2 gap-4"
      >
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">E-mail</label>
          <div className="w-full relative">
            <LuMail className="absolute top-2 right-4 font-bold text-lg text-stone-800" />
            <input
              type="text"
              {...register("email")}
              placeholder="demomail@gmail.com"
              className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
            />
          </div>
          {errors && errors.email ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">Password</label>
          <div className="w-full relative">
            {seePassword && seePassword ? (
              <>
                <LuEye
                  className="absolute top-2 right-4 font-bold text-lg text-stone-800"
                  onClick={() => setSeePassword(!seePassword)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
                />
              </>
            ) : (
              <>
                <LuEyeClosed
                  className="absolute top-2 right-4 font-bold text-lg text-stone-800"
                  onClick={() => setSeePassword(!seePassword)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
                />
              </>
            )}
          </div>
          {errors && errors.password ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={`w-full px-5 py-2 flex ${
              isPending ? "cursor-not-allowed" : "cursor-pointer"
            } items-center justify-center font-medium text-md text-stone-800 bg-blue-300 rounded-sm ease duration-300 hover:bg-blue-400`}
          >
            Login
          </button>
        </div>
      </form>
      <hr className="w-full border-neutral-300 h-[2px] mt-3 mb-1" />
      <p className="font-medium text-sm text-stone-600 mb-8 mt-3">
        Don&apos;t have an account?{" "}
        <Link href={"/auth/register"}>
          <b>Register</b>
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
