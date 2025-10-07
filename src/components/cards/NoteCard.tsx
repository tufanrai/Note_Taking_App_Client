"use client";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import Link from "next/link";

interface IProps {
  title: string;
  note: string;
}

const NoteCard = ({ title, note }: IProps) => {
  return (
    <Link href={"/0"}>
      <div className="max-w-68 rounded-md shadow-sm/30 shadow-blue-500">
        <div className="w-full p-5">
          <h3 className="font-semibold text-lg italic text-stone-800">
            {title}
          </h3>
          <p className="max-h-22 h-screen overflow-hidden font-normal text-md text-stone-700">
            {note}
          </p>
        </div>
        <div className="w-full bg-blue-200 flex items-center justify-start px-5 py-2">
          <span className="font-thin text-sm text-neutral-100">2025/10/13</span>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
