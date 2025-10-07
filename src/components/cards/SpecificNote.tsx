"use client";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { specificNoteData } from "@/app/api/apiUrls";
import DeleteButton from "./DeleteButton";

const SpecificNote = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const { data, error, isPending } = useQuery({
    queryKey: ["fetchSpecificData"],
    queryFn: specificNoteData,
  });

  console.log("Specific data:", data);
  return (
    <div className="max-w-150 h-screen overflow-hidden w-full p-8">
      <div className="w-full flex items-center justify-end gap-2 px-4 py-1">
        <Link
          className="mr-auto cursor-pointer ease duration-200 w-6 h-6 flex items-center justify-center rounded-sm bg-neutral-200 hover:bg-neutral-300"
          href={"/"}
        >
          <IoChevronBackSharp className=" font-black text-lg text-stone-800" />
        </Link>
        <button
          onClick={() => setEdit(!edit)}
          className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
        >
          <MdOutlineEdit />
        </button>
        <DeleteButton />
      </div>
      {edit && edit ? (
        <input
          type="text"
          defaultValue={data?.data?.title}
          className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2 shadow-sm/30 rounded-sm mt-4"
        ></input>
      ) : (
        <h1 className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2">
          {data?.data?.title}
        </h1>
      )}
      <br />
      {edit && edit ? (
        <textarea
          placeholder={data?.data?.note}
          className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none rounded-sm shadow-sm/30 mt-2"
        />
      ) : (
        <span className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none overflow-y-auto">
          {data?.data?.note}
        </span>
      )}
    </div>
  );
};

export default SpecificNote;
