import axiosInstance from "./axiosInstance";
import { ILog, IRegister, INote } from "@/components/interface/interfaces";

// login api
export const logUser = async (data: ILog) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

// register api
export const registerUser = async (data: IRegister) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

// create notes
export const createNote = async (data: INote) => {
  try {
    const response = await axiosInstance.post("/notes/", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

// fetch notes
export const fetchNotes = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};
