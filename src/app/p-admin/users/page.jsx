import React from "react";
import UsersPage from "@/components/templates/p-adminPage/usersPage/UsersPage";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";
export default function Users() {
  return (
    <>
      <AdminPanelLayout>
        <UsersPage />
      </AdminPanelLayout>
    </>
  );
}
