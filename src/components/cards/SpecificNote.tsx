"use client";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  removeSpecificNote,
  specificNoteData,
  updateNoteData,
} from "@/app/api/apiUrls";
import Cookies from "js-cookie";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { NoteSchema } from "../schema/noteForm.schema";
import { INote } from "../interface/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";

const SpecificNote = () => {
  const updatedNote = useQueryClient();
  const router = useRouter();
  const [edit, setEdit] = useState<boolean>(false);

  // fetch note
  const endPoint = Cookies.get("page") ?? "";
  const { data, error, isPending } = useQuery({
    queryKey: ["fetchSpecificData"],
    queryFn: () => specificNoteData(endPoint),
  });

  // update note
  const { mutate, isSuccess } = useMutation({
    mutationFn: updateNoteData,
    mutationKey: ["updateNote"],
    onSuccess: (data) => {
      toast.success(data?.message);
      updatedNote.invalidateQueries({ queryKey: ["fetchSpecificData"] });
      setTimeout(() => {
        setEdit(!edit);
        window.location.reload();
      }, 300);
    },
    onError: (err) => {
      toast.error(err?.message);
      reset();
    },
  });

  // input validation
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(NoteSchema),
  });

  // data collecting function
  const sendNewData = (data: INote) => {
    mutate({
      endPoint,
      title: data.title,
      note: data.note,
    });
  };

  // remove note
  const deleteData = () => {
    removeSpecificNote(endPoint);
    toast.success("note deleted successfuly");
    setTimeout(() => {
      router.replace("/");
    }, 500);
  };
  console.log(data?.data?.note.split("\n"));
  return (
    <div className="max-w-150 h-screen overflow-y-auto overflow-x-hidden w-full p-8">
      <div className="w-full flex items-center justify-end gap-2 px-4 py-1">
        <Link
          onClick={() => {
            Cookies.remove("page");
          }}
          className="mr-auto cursor-pointer ease duration-200 w-6 h-6 flex items-center justify-center rounded-sm bg-neutral-200 hover:bg-neutral-300"
          href={"/"}
        >
          <IoChevronBackSharp className=" font-black text-lg text-stone-800" />
        </Link>

        {edit && edit ? (
          <button
            onClick={() => setEdit(!edit)}
            className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
          >
            <MdOutlineEdit />
          </button>
        ) : (
          <button
            onClick={() => setEdit(!edit)}
            className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
          >
            <MdOutlineEdit />
          </button>
        )}
        <button
          onClick={deleteData}
          disabled={isPending}
          className={`w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 ${
            isPending ? "cursor-not-allowed" : "cursor-pointer"
          }  ease duration-200 hover:bg-rose-400`}
        >
          <GoTrash className="font-bold text-lg" />
        </button>
      </div>
      <form onSubmit={handleSubmit(sendNewData)} className="w-full">
        {edit && edit ? (
          <input
            type="text"
            {...register("title")}
            defaultValue={data?.data?.title}
            className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2 shadow-sm/30 rounded-sm mt-4"
          ></input>
        ) : (
          <h1 className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2">
            {data?.data?.title}
          </h1>
        )}
        <br />
        {edit && edit ? (
          <textarea
            rows={10}
            defaultValue={data?.data?.note}
            {...register("note")}
            className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none rounded-sm shadow-sm/30 mt-2"
          />
        ) : (
          <>
            {data?.data && data?.data?.note
              ? data?.data?.note
                  .split("\n")
                  .map((paragraph: string, index: number) => (
                    <p
                      key={index}
                      className="w-full px-5 py-2 font-normal text-md text-stone-800"
                    >
                      {paragraph}
                    </p>
                  ))
              : ""}
          </>
        )}
        {edit && edit ? (
          <div className="w-full flex items-center justify-end gap-4 px-5 py-2">
            <button
              type="reset"
              onClick={() => setEdit(!edit)}
              className="font-medium text-sm text-stone-800 bg-rose-400 ease duration-300 hover:bg-rose-500 cursor-pointer flex items-center justify-center rounded-md px-5 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="font-medium text-sm text-stone-800 bg-blue-400 ease duration-300 hover:bg-blue-500 cursor-pointer flex items-center justify-center rounded-md px-5 py-2"
            >
              Update
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default SpecificNote;
