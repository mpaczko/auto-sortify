import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  defaultValues,
  formSchema,
  IAddExpenseForm,
} from "./addExpenseForm.config";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "@/components/Form/FormInput";
import { Button } from "@/components/Radix/Button";
import { ComboboxCategories } from "./ComboboxCategories";

const AddExpenseForm = () => {
  const addBankForm = useForm<IAddExpenseForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema()),
  });

  const onSubmit = (data: IAddExpenseForm) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...addBankForm}>
        <form
          className="flex flex-col gap-4"
          onSubmit={addBankForm.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-row gap-4">
            <FormInput<IAddExpenseForm>
              name="name"
              label="Wydatek"
              className="flex-1 w-full"
            />
            <div className="w-full flex flex-row gap-4">
              <ComboboxCategories />
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button type="submit" variant="outline" className="ml-auto">
              Dodaj
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddExpenseForm;
