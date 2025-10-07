import axiosInstance from "./axiosInstance";
import { ILog, IRegister, INote } from "@/components/interface/interfaces";

// login api
export const logUser = async (data: ILog) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (err: any) {
    console.log(err.response.data);
    return err.response.data;
  }
};

// register api
export const registerUser = async (data: IRegister) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
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
