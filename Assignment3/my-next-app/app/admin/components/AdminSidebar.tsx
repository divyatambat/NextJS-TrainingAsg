"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm lg:block">
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Manage
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Fast access to admin areas and settings.
          </p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
