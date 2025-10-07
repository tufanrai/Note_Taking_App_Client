"use client";
import NoteCard from "@/components/cards/NoteCard";
import Link from "next/link";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/apiUrls";

export default function Home() {
  const { data, error } = useQuery({
    queryKey: ["fetchNotes", "newNote"],
    queryFn: fetchNotes,
  });

  console.log(data);
  return (
    <div className="w-full h-screen relative p-8">
      <h1 className="font-bold text-xl italic text-stone-800">Notes</h1>
      <div className="w-full h-screen flex flex-wrap items-start jutify-start gap-4 p-8">
        <NoteCard
          title="Title"
          note={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste pariatur
          cum a officiis. Minima placeat ducimus sit quia suscipit, molestias
          laboriosam dolorum ipsa optio aut libero modi autem amet culpa?`}
        />
      </div>
      <Link href={"/newnote"}>
        <button className="w-10 h-10 flex items-center justify-center absolute bottom-20 right-8 rounded-md bg-blue-500 cursor-pointer ease duration-200 hover:bg-blue-600 font-black text-xl text-white">
          <RiStickyNoteAddFill />
        </button>
      </Link>
    </div>
  );
}
