"use client";

import React from "react";
import { Button } from "@/components/Radix/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Radix/Dialog";
import AddExpenseForm from "@/modules/AddExpenseForm";

const AddExpenseDialog = () => {
  return (
    <Dialog open>
      <DialogTrigger asChild>
        <Button>Dodaj wydatek</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Wprowadź swój wydatek</DialogTitle>
          <AddExpenseForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseDialog;
