import React from "react";
import DiscountPage from "@/components/templates/p-adminPage/discountPage/DiscountPage";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";
export default function Discount() {
  return (
    <>
      <AdminPanelLayout>
        <DiscountPage />
      </AdminPanelLayout>
    </>
  );
}
