import type { Metadata } from "next";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin control panel with sidebar navigation and management tools.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="border-b border-zinc-200/80 bg-white/95 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
              Admin dashboard
            </p>
            <h1 className="mt-2 text-2xl font-semibold">Site Administration</h1>
          </div>
          <div className="hidden items-center gap-3 text-sm text-zinc-600 sm:flex">
            <span>Secure area</span>
            <span aria-hidden="true">•</span>
            <span>Analytics, users, and settings</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8">
        <AdminSidebar />
        <main className="min-w-0 flex-1 space-y-6">
          <AdminHeader />
          <section className="rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-sm">
            {children}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
