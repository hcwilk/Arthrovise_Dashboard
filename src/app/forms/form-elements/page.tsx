import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import ProtectedLayout from "@/components/Layouts/ProtectedLayout";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormElementsPage = () => {
  return (
    <ProtectedLayout>
      <FormElements />
    </ProtectedLayout>
  );
};

export default FormElementsPage;
