"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "@/app/api/apiUrls";

const ProfileCard = () => {
  const [edit, setEdit] = useState<boolean>(false);

  const { data, error } = useQuery({
    queryKey: ["fetchUserData"],
    queryFn: fetchUserData,
  });

  console.log(data);
  return (
    <div className="max-w-110 w-full rounded-md shadow-sm/30 p-6">
      <h1 className="font-bold text-xl italic text-stone-600">Profile</h1>
      <div className="w-full flex justify-center">
        <div className="rounded-full w-15 h-15 flex items-center justify-center bg-stone-400 overflow-hidden">
          <FaUserLarge className="font-black text-3xl text-stone-600" />
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-1 mt-4 px-2">
        {edit && edit ? (
          <input
            type="date"
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
            type="text"
            defaultValue={data?.data?.birth}
            className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
          />
        ) : (
          <span className="font-medium text-md text-stone-800/50 px-5 py-2">
            {data?.data?.birth}
          </span>
        )}
      </div>
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
        <button className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 cursor-pointer ease duration-200 hover:bg-rose-400">
          <GoTrash className="font-bold text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
