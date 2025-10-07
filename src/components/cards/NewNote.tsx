"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { NoteSchema } from "../schema/noteForm.schema";
import { INote } from "../interface/interfaces";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "@/app/api/apiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const NewNote = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    mutationKey: ["newNote"],
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["fetchNotes"] });
      setTimeout(() => {
        reset();
        router.replace("/");
      }, 1000);
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NoteSchema),
  });

  const createNewNote = (data: INote) => {
    mutate(data);
  };
  return (
    <div className="max-w-150 w-full rounded-md shadow-lg/30 shadow-blue-400 px-5 py-4">
      <form
        onSubmit={handleSubmit(createNewNote)}
        className="w-full flex flex-col items-start justify-center gap-4"
      >
        <div className="w-full px-2 flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-lg italic text-blue-400">
            Title
          </label>
          <input
            type="text"
            placeholder="API's"
            {...register("title")}
            className="w-full rounded-sm font-semibold text-md text-stone-800 px-5 py-2 outline-none inset-shadow-xs/30 inset-shadow-blue-500 shadow-blue-400 shadow-xs/30"
          />
          {errors && errors ? (
            <p className="w-full font-medium text-sm text-end text-red-500">
              {errors.title?.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-lg italic text-blue-400">
            Note
          </label>
          <textarea
            rows={10}
            cols={30}
            {...register("note")}
            placeholder="APIs (Application Programming Interfaces) are sets of rules and protocols that enable different software applications to communicate and share data with each other. They act as intermediaries that allow developers to integrate external services and functionality into their own applications without needing to understand the underlying code. From web services and mobile apps to cloud platforms and IoT devices, APIs power modern digital experiences by enabling seamless connectivity between diverse systems and technologies."
            className="w-full rounded-sm font-normal text-md text-stone-800 px-5 py-2 outline-none inset-shadow-xs/30 inset-shadow-blue-500 shadow-blue-400 shadow-xs/30"
          />
        </div>
        <div className="w-full py-2 flex items-center justify-end gap-4">
          <Link href={"/"}>
            <button
              type="reset"
              disabled={isPending}
              className={`w-22 px-5 py-2 flex items-center justify-center rounded-sm shadow-sm/30 ${
                isPending ? "cursor-not-allowed" : "cursor-pointer"
              } font-normal text-md text-neutral-100 ease duration-300 bg-rose-400 hover:bg-rose-500`}
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className={`w-22 px-5 py-2 flex items-center justify-center rounded-sm shadow-sm/30 ${
              isPending ? "cursor-not-allowed" : "cursor-pointer"
            } font-normal text-md text-neutral-100 ease duration-300 bg-blue-400 hover:bg-blue-500`}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
