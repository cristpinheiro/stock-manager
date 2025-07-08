import { ReactNode } from "react";
import "@/app/globals.css";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
