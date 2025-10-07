import Image from "next/image";
import { RiStickyNoteAddFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="w-full h-screen relative p-8">
      <h1 className="font-bold text-xl italic text-stone-800">Notes</h1>
      <div className="w-full h-screen flex flex-wrap items-start jutify-start gap-4 p-8">
        <div className="max-w-68 rounded-md shadow-sm/30 shadow-blue-500">
          <div className="w-full p-5">
            <h3 className="font-semibold text-lg italic text-stone-800">
              Title
            </h3>
            <p className="max-h-22 h-screen overflow-hidden font-normal text-md text-stone-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              pariatur cum a officiis. Minima placeat ducimus sit quia suscipit,
              molestias laboriosam dolorum ipsa optio aut libero modi autem amet
              culpa?
            </p>
          </div>
          <div className="w-full bg-blue-200 flex items-center justify-start px-5 py-2">
            <span className="font-thin text-sm text-neutral-100">
              2025/10/13
            </span>
          </div>
        </div>
      </div>
      <button className="w-10 h-10 flex items-center justify-center absolute bottom-20 right-8 rounded-md bg-blue-500 cursor-pointer ease duration-200 hover:bg-blue-600 font-black text-xl text-white">
        <RiStickyNoteAddFill />
      </button>
    </div>
  );
}
