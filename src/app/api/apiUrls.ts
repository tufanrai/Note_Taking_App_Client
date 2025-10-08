import axiosInstance from "./axiosInstance";
import { ILog, IRegister, INote } from "@/components/interface/interfaces";
import Cookies from "js-cookie";

const userId = Cookies.get("userId");

interface IProps {
  endPoint: string;
  title?: string;
  note?: string;
}

interface IUser {
  endPoint: string;
  full_name?: string;
  email?: string;
  birth?: string;
  password?: string;
}

// login user
export const logUser = async (data: ILog) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (err: any) {
    console.log(err.response.data);
    return err.response.data;
  }
};

// register user
export const registerUser = async (data: IRegister) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// update user
export const updateUserData = async ({ endPoint, ...data }: IUser) => {
  try {
    const resopnse = await axiosInstance.put(`/user/${endPoint}`, { ...data });
    return resopnse.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// remove user data
export const removeUserData = async (endPoint: string) => {
  try {
    const response = await axiosInstance.delete(`/user/${endPoint}`);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// fetch user data
export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// create notes
export const createNote = async (data: INote) => {
  try {
    const response = await axiosInstance.post("/notes/", data);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// fetch notes
export const fetchNotes = async () => {
  try {
    const response = await axiosInstance.get("/notes/");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// fetch specific note
export const specificNoteData = async (endPoint: String) => {
  try {
    const response = await axiosInstance.get(`/notes/${endPoint}`);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// update specific note
export const updateNoteData = async ({ endPoint, ...data }: IProps) => {
  try {
    const resopnse = await axiosInstance.put(`/notes/${endPoint}`, { ...data });
    return resopnse.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// delete specific note
export const removeSpecificNote = async (endPoint: string) => {
  try {
    const response = await axiosInstance.delete(`/notes/${endPoint}`);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};
