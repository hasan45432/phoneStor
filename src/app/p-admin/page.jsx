"use client";
import React, { useEffect } from "react";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/p-admin/index");
  }, []);
  return (
    <div>
      <AdminPanelLayout />
    </div>
  );
}
