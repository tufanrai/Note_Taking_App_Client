"use client";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import Link from "next/link";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RiStickyNoteAddFill } from "react-icons/ri";

const NavigationComp = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();

  const removeCookiedata = () => {
    toast.success("Successfuly loged out");
    Cookies.remove("name");
    Cookies.remove("ticket");
    Cookies.remove("userId");
    setTimeout(() => {
      router.replace("/auth/login");
    }, 1000);
  };

  const user = Cookies.get("name") ?? "User";
  return (
    <div className="max-w-[1280px] w-full h-screen flex items-start justify-center">
      <div className="max-w-[240px] w-full h-screen hidden md:block border-r border-neutral-400">
        <ul className="w-full h-screen flex flex-col items-center justify-starts py-8">
          <li className="w-full flex items-center justify-center p-2">
            <span className="flex items-center justify-center gap-2 font-bold text-xl text-stone-800 italic">
              NoteMe!
            </span>
          </li>
          <li className="w-full items-center justify-center mt-18">
            <Link className="w-full" href={"/"}>
              <span className="w-full h-10 flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                <CgNotes /> Notes
              </span>
            </Link>
          </li>
          <li className="w-full px-5 mt-4">
            <hr className="w-full border-stone-400" />
          </li>
          <li className="w-full items-center justify-center mt-2">
            <Link href={"/setting"}>
              <span className="w-full h-10 flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                <IoSettingsOutline /> Setting
              </span>
            </Link>
          </li>
          <li className="w-full mt-auto flex items-center justify-center px-5">
            <button
              onClick={removeCookiedata}
              className="max-w-30 w-full font-thin text-md text-white flex items-center justify-center py-2 px-5 rounded-md bg-red-500 ease duratio-250 cursor-pointer hover:bg-red-600"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full h-screen overflow-y-auto relative">
        <div className="w-full h-15 flex items-center justify-end px-5 border-b border-b-neutral-200 shadow-xs/30">
          <span className="flex mr-auto items-center justify-center gap-2 font-bold text-xl text-stone-800 italic">
            NoteMe!
          </span>
          <Link href="/setting/profile">
            <div className="max-w-80 w-full h-10 flex items-center justify-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-stone-400 overflow-hidden">
                <FaUserLarge className="font-black text-xl text-stone-600" />
              </div>
              <div className=" px-2">
                <span className="font-medium text-md text-stone-800/50">
                  <b>{user}</b>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full h-5/6 relative overflow-hidden">
          {children}
          <Link href={"/newnote"}>
            <button className="w-10 h-10 flex items-center justify-center absolute bottom-8 right-8 rounded-md bg-blue-500 cursor-pointer ease duration-200 hover:bg-blue-600 font-black text-xl text-white">
              <RiStickyNoteAddFill />
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full md:hidden block border-t border-neutral-400 px-5 py-2">
          <ul className="w-full flex items-center justify-center gap-4">
            <li className="max-w-50 w-full h-10 relative">
              <Link href={"/"}>
                <span className="h-full flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                  <CgNotes /> Notes
                </span>
              </Link>
            </li>
            <li className="max-w-50 w-full items-center justify-center relative">
              <Link href={"/setting"}>
                <span className=" h-10 flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                  <IoSettingsOutline /> Setting
                </span>
              </Link>
            </li>
            <li className="w-full flex items-center justify-center px-5">
              <button
                onClick={removeCookiedata}
                className="max-w-30 w-full font-thin text-md text-white flex items-center justify-center py-2 px-5 rounded-md bg-red-500 ease duratio-250 cursor-pointer hover:bg-red-600"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationComp;
