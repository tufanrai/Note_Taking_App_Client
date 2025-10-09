"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  fetchUserData,
  removeUserData,
  updateUserData,
} from "@/app/api/apiUrls";
import { IRegister, IUser } from "../interface/interfaces";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema, UpdateUser } from "../schema/authForm.schema";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProfileCard = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const endPoint = Cookies.get("userId") ?? "";
  const queryUpate = useQueryClient();
  const router = useRouter();

  // fetch user's data
  const { data, error } = useQuery({
    queryKey: ["fetchUserData"],
    queryFn: fetchUserData,
  });

  // mutate new datas
  const { mutate, isPending } = useMutation({
    mutationFn: updateUserData,
    mutationKey: ["updateUser"],
    onSuccess: (data) => {
      toast.success(data?.message);
      queryUpate.invalidateQueries({ queryKey: ["fetchUserData"] });
      console.log(data);
      setTimeout(() => {
        setEdit(!edit);
        window.location.reload();
      }, 500);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  // validate inputs
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(UpdateUser),
  });

  // data fetching function
  const sendUpdatedData = (data: IUser) => {
    mutate({
      endPoint,
      full_name: data.full_name,
      email: data.email,
      birth: data.birth,
    });
  };

  // remove note
  const deleteData = () => {
    removeUserData(endPoint);
    toast.success("note deleted successfuly", { duration: 1000 });
    Cookies.remove("ticket");
    Cookies.remove("userId");
    setTimeout(() => {
      toast.error("token expired, please login");
      router.replace("/auth/login");
    }, 1000);
  };

  return (
    <div className="max-w-110 w-full md:rounded-md md:shadow-sm/30 p-6">
      <h1 className="font-bold text-xl italic text-stone-600">Profile</h1>
      <div className="w-full flex items-center justify-end gap-2 px-4 py-1">
        <Link
          className="mr-auto cursor-pointer ease duration-200 w-6 h-6 flex items-center justify-center rounded-sm bg-neutral-200 hover:bg-neutral-300"
          href={"/setting"}
        >
          <IoChevronBackSharp className=" font-black text-lg text-stone-800" />
        </Link>
        <button
          onClick={() => setEdit(!edit)}
          className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
        >
          <MdOutlineEdit />
        </button>
        <button
          onClick={() => deleteData}
          className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 cursor-pointer ease duration-200 hover:bg-rose-400"
        >
          <GoTrash className="font-bold text-lg" />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="rounded-full w-15 h-15 flex items-center justify-center bg-stone-400 overflow-hidden">
          <FaUserLarge className="font-black text-3xl text-stone-600" />
        </div>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(sendUpdatedData)}
          className="w-full flex flex-col items-start justify-center gap-1 mt-4 px-2"
        >
          {edit && edit ? (
            <input
              type="text"
              {...register("full_name")}
              defaultValue={data?.data?.full_name}
              className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
            />
          ) : (
            <>
              <span className="font-medium text-md text-stone-800/50 px-5 py-2">
                {data?.data?.full_name}
              </span>
              <hr className="w-full h-1 border-neutral-300" />
            </>
          )}
          {edit && edit ? (
            <input
              type="text"
              {...register("email")}
              defaultValue={data?.data?.email}
              className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
            />
          ) : (
            <>
              <span className="font-medium text-md text-stone-800/50 px-5 py-2">
                {data?.data?.email}
              </span>
              <hr className="w-full h-1 border-neutral-300" />
            </>
          )}
          {edit && edit ? (
            <input
              type="date"
              {...register("birth")}
              defaultValue={data?.data?.birth}
              className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
            />
          ) : (
            <>
              <span className="font-medium text-md text-stone-800/50 px-5 py-2">
                {data?.data?.birth}
              </span>
              <hr className="w-full h-1 border-neutral-300" />
            </>
          )}
          {edit && edit ? (
            <div className="w-full flex items-center justify-end gap-4 px-5 py-2">
              <button
                type="reset"
                onClick={() => setEdit(!edit)}
                className="font-medium text-sm text-stone-800 bg-rose-400 ease duration-300 hover:bg-rose-500 cursor-pointer flex items-center justify-center rounded-md px-5 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className={`font-medium text-sm text-stone-800 bg-blue-400 ease duration-300 hover:bg-blue-500 ${
                  isPending ? "cursor-not-allowed" : "cursor-pointer"
                } flex items-center justify-center rounded-md px-5 py-2`}
              >
                Update
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;
