"use client";
import React from "react";

interface IProps {
  title?: string;
  note?: string;
  updatedDate?: string;
}

const NoteCard = ({ title, note, updatedDate }: IProps) => {
  return (
    <div className="max-w-68 h-50 overflow-hidden rounded-md shadow-sm/30 shadow-blue-500 relative">
      <div className="w-full p-5 flex flex-col items-start justify-center gap-4">
        <h3 className="font-semibold text-lg italic text-stone-800">{title}</h3>
        <p className="max-h-12 h-screen overflow-hidden font-normal text-md text-stone-700">
          {note}
        </p>
      </div>
      <div className="w-full bg-blue-200 flex items-center justify-start px-5 py-2 absolute bottom-0">
        <span className="font-thin text-sm text-neutral-100">
          {updatedDate}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
