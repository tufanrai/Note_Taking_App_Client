"use client";
import React, { useEffect } from "react";
import { GoTrash } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { removeSpecificNote } from "@/app/api/apiUrls";
import { useRouter } from "next/navigation";

const DeleteButton = () => {
  const router = useRouter();
  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ["removeSpecificNote"],
    queryFn: removeSpecificNote,
  });

  return (
    <button
      disabled={isPending}
      className={`w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 ${
        isPending ? "cursor-not-allowed" : "cursor-pointer"
      }  ease duration-200 hover:bg-rose-400`}
    >
      <GoTrash className="font-bold text-lg" />
    </button>
  );
};

export default DeleteButton;
