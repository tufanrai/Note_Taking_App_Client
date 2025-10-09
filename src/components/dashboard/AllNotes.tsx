"use client";
import React from "react";
import NoteCard from "@/components/cards/NoteCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/app/api/apiUrls";
import Link from "next/link";
import Cookies from "js-cookie";

const AllNotes = () => {
  const { data, error } = useQuery({
    queryKey: ["fetchNotes"],
    queryFn: fetchNotes,
  });

  return (
    <div className="w-full flex flex-wrap  items-center md:justify-start justify-center gap-4 px-4 md:px-8 pb-24 pt-8 md:py-10">
      {data && data?.data
        ? data.data.map((note: any, index: string) => (
            <Link
              onClick={() => {
                Cookies.set("page", note._id);
              }}
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
  );
};

export default AllNotes;
