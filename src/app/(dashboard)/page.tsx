"use client";
import AllNotes from "@/components/dashboard/AllNotes";

export default function Home() {
  return (
    <div className="w-full h-screen relative p-8 overflow-y-auto py-8">
      <h1 className="font-bold text-xl italic text-stone-800">Notes</h1>
      <AllNotes />
    </div>
  );
}
