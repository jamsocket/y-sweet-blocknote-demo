"use client";

import { useDocuments } from "@/lib/document";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const [, setDocuments] = useDocuments();

  useEffect(() => {
    const id = crypto.randomUUID();
    setDocuments((docs) => [...docs, { id, title: "Untitled Document" }]);
    redirect("/doc/" + id + "/");
  }, [setDocuments]);

  return <></>;
}
