import * as yup from "yup";

// note schema
export const NoteSchema = yup.object({
  title: yup.string().required("please enter the title for your note"),
  note: yup.string(),
});
