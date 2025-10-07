"use client";
import Link from "next/link";
import React from "react";
import { IRegister } from "../interface/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../schema/authForm.schema";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/app/api/apiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  // initialising router to rout user to login form once the user is registered successfuly.
  const router = useRouter();

  // mutating the registration data received from the client to backend.
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    mutationKey: ["registerNewUser"],
    onSuccess: () => {
      router.replace("/auth/login");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });

  // validating the proper inpust on the registration form.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  // function that mutates the registration data to the backend.
  const sendData = (data: IRegister) => {
    mutate(data);
  };
  return (
    <div className="max-w-110 w-full flex flex-col items-center justify-center gap-4 bg-neutral-100 rounded-md shadow-lg/50 shadow-blue-400 py-6 px-4">
      <h1 className="font-semibold text-xl text-stone-700">Register</h1>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-full flex flex-col mt-2 gap-4"
      >
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Full name
          </label>
          <input
            type="text"
            {...register("full_name")}
            placeholder="Jhon Doe"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
          {errors && errors.full_name ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.full_name.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("birth")}
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-300 outline-none"
          />
          {errors && errors.birth ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.birth.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">E-mail</label>
          <input
            type="text"
            {...register("email")}
            placeholder="demomail@gmail.com"
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
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
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
          {errors && errors.password ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("confirmPassword")}
            className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
          />
          {errors && errors.confirmPassword ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.confirmPassword.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={`w-full ${
              isPending ? "cursor-not-alowed" : "cursor-pointer"
            } px-5 py-2 flex items-center justify-center font-medium text-md text-stone-800 bg-blue-300 rounded-sm ease duration-300 hover:bg-blue-400`}
          >
            Register
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
