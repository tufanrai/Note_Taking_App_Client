import Link from "next/link";
import React from "react";

const SettingCard = () => {
  return (
    <div className="max-w-150 w-full rounded-md shadow-sm/80 px-8 py-4">
      <h1 className="font-bold text-xl text-stone-700 italic">Setting</h1>
      <div className="w-full p-2">
        <Link className="w-full" href={"/setting/profile"}>
          <p className="w-full font-medium text-md text-stone-800/50 px-5 py-2 ease duration-300 hover:bg-neutral-300">
            Profile setting
          </p>
        </Link>
        <hr className="w-full h-3 my-1 border-black" />
      </div>
    </div>
  );
};

export default SettingCard;
