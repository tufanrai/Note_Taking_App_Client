"use client";
import NoteCard from "@/components/cards/NoteCard";
import Link from "next/link";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/apiUrls";
import Cookies from "js-cookie";

export default function Home() {
  const { data, error } = useQuery({
    queryKey: ["fetchNotes"],
    queryFn: fetchNotes,
  });

  console.log("This is the response data", data?.data);
  return (
    <div className="w-full h-screen relative p-8">
      <h1 className="font-bold text-xl italic text-stone-800">Notes</h1>
      <div className="w-full h-screen flex flex-wrap items-start jutify-start gap-4 p-8">
        {data && data?.data
          ? data.data.map((note: any, index: string) => (
              <Link
                onClick={() => Cookies.set("page", note._id)}
                key={index}
                href={`/${index}`}
              >
                <NoteCard
                  title={note?.title}
                  note={note?.note}
                  updatedDate={note?.updatedAt}
                />
              </Link>
            ))
          : ""}
      </div>
      <Link href={"/newnote"}>
        <button className="w-10 h-10 flex items-center justify-center absolute bottom-20 right-8 rounded-md bg-blue-500 cursor-pointer ease duration-200 hover:bg-blue-600 font-black text-xl text-white">
          <RiStickyNoteAddFill />
        </button>
      </Link>
    </div>
  );
}
