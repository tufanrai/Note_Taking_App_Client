"use client";
import Link from "next/link";
import { RiStickyNoteAddFill } from "react-icons/ri";
import AllNotes from "@/components/dashboard/AllNotes";

export default function Home() {
  return (
    <div className="w-full h-screen relative p-8">
      <h1 className="font-bold text-xl italic text-stone-800">Notes</h1>
      <AllNotes />
      <Link href={"/newnote"}>
        <button className="w-10 h-10 flex items-center justify-center absolute bottom-20 right-8 rounded-md bg-blue-500 cursor-pointer ease duration-200 hover:bg-blue-600 font-black text-xl text-white">
          <RiStickyNoteAddFill />
        </button>
      </Link>
    </div>
  );
}
