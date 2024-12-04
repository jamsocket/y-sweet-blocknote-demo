"use client";

import { usePresenceSetter, useYDoc, useYjsProvider } from "@y-sweet/react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";

import { Header } from "./Header";
import { useEffect } from "react";
import { useSelf } from "@/lib/user";

export function Doc({ id }: { id: string }) {
  const provider = useYjsProvider();
  const doc = useYDoc();

  const [self, setSelf] = useSelf(id);

  const setPresence = usePresenceSetter();
  useEffect(() => setPresence(self), [self, setPresence]);

  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("blocknote"),
      user: self,
    },
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header self={self} onUpdateSelf={setSelf} />
      <main className="p-4 flex-1 overflow-y-auto">
        <BlockNoteView editor={editor} />
      </main>
    </div>
  );
}
