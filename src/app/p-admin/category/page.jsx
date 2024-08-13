import React from "react";
import CategoryPage from "@/components/templates/p-adminPage/categoryPage/CategoryPage";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";
export default function Category() {
  return (
    <>
      <AdminPanelLayout>
        <CategoryPage />
      </AdminPanelLayout>
    </>
  );
}
