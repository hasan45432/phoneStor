import React from "react";
import CommentsPage from "@/components/templates/p-adminPage/commentsPage/CommentsPage";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";
export default function Comments() {
  return (
    <>
      <AdminPanelLayout>
        <CommentsPage />
      </AdminPanelLayout>
    </>
  );
}
