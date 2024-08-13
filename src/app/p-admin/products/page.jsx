import React from "react";
import ProductsPage from "@/components/templates/p-adminPage/productsPage/ProductsPage";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";
export default function Products() {
  return (
    <>
      <AdminPanelLayout>
        <ProductsPage />
      </AdminPanelLayout>
    </>
  );
}
