"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SquarePen } from "lucide-react";

import { useDocuments } from "@/lib/document";

function SidebarInner({ activeId }: { activeId: string }) {
  const [documents] = useDocuments();

  return (
    <div className="flex flex-col gap-4 p-2">
      <header className="flex justify-between px-3 py-1">
        <span className="font-bold">Your Company</span>
        <Link href="/">
          <SquarePen aria-label="new document" />
        </Link>
      </header>
      <ul className="flex flex-col gap-y-0.5">
        {documents.map((doc) => (
          <li key={doc.id} className="px-1">
            <Link
              href={"/doc/" + doc.id + "/"}
              className={clsx(
                "block px-2 py-1 rounded-md transition-colors hover:bg-gray-200 text-gray-600",
                { "bg-gray-200 text-black": activeId === doc.id },
              )}
            >
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Sidebar = dynamic(() => Promise.resolve(SidebarInner), {
  ssr: false,
});
