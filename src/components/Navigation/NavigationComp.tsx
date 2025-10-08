"use client";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import Link from "next/link";
import Cookies from "js-cookie";

const NavigationComp = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const removeCookiedata = () => {
    Cookies.remove("ticket");
    Cookies.remove("userId");
    Cookies.remove("name");
  };

  const user = Cookies.get("name") ?? "User";
  return (
    <div className="max-w-[1280px] w-full h-screen flex items-start justify-center">
      <div className="max-w-[240px] w-full h-screen border-r border-neutral-400">
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
      <div className="w-full h-screen">
        <div className="w-full h-15 flex items-center justify-end px-5 border-b border-b-neutral-200 shadow-xs/30">
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
        <div className="w-full h-screen">{children}</div>
      </div>
    </div>
  );
};

export default NavigationComp;
