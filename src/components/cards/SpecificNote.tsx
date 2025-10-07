"use client";
import React, { useState } from "react";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import Link from "next/link";

const SpecificNote = () => {
  const [edit, setEdit] = useState<boolean>(false);
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
        <button className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 cursor-pointer ease duration-200 hover:bg-rose-400">
          <GoTrash className="font-bold text-lg" />
        </button>
      </div>
      {edit && edit ? (
        <input
          type="text"
          defaultValue={"Title"}
          className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2 shadow-sm/30 rounded-sm mt-4"
        ></input>
      ) : (
        <h1 className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2">
          Title
        </h1>
      )}
      <br />
      {edit && edit ? (
        <textarea
          placeholder={`
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse 
libero quidem, eaque fugiat ea nisi repellat asperiores eos quasi dolore reprehenderit quod soluta vitae dignissimos commodi distinctio voluptatibus facere.`}
          className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none rounded-sm shadow-sm/30 mt-2"
        />
      ) : (
        <p className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none overflow-y-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse
          libero quidem, eaque fugiat ea nisi repellat asperiores eos quasi
          dolore reprehenderit quod soluta vitae dignissimos commodi distinctio
          voluptatibus facere. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nam esse libero quidem, eaque fugiat ea nisi
          repellat asperiores eos quasi dolore reprehenderit quod soluta vitae
          dignissimos commodi distinctio voluptatibus facere.
        </p>
      )}
    </div>
  );
};

export default SpecificNote;
