"use client"
import AdminHeader from "@/components/admin/layout/header";
import Sidebar from "@/components/admin/layout/sidebar";
import React from "react";
import withAuth from "../../hoc/withAuth.hoc";
import { Role } from "@/types/global.types";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex">
      <Sidebar />

      <section className="w-full">
        {/* header */}
        <AdminHeader />
        <section>{children}</section>
      </section>
    </main>
  );
};

const ProtectedAdminLayout = withAuth(AdminLayout, [Role.ADMIN]);
export default ProtectedAdminLayout;
