import * as yup from "yup";

export const formSchema = () =>
  yup.object({
    id: yup.string(),
    name: yup.string().min(1).max(100),
    category: yup.string(),
  });

export type IAddExpenseForm = yup.InferType<ReturnType<typeof formSchema>>;

export const defaultValues: IAddExpenseForm = {
  id: "",
  name: "",
  category: "",
};
