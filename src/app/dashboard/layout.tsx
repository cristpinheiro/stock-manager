import { ReactNode } from "react";
import "@/app/globals.css";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="sm:ml-14 p-4">{children}</main>
    </>
  );
}
