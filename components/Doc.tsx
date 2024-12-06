"use client";

import { usePresenceSetter, useYDoc, useYjsProvider } from "@y-sweet/react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";

import { Header } from "./Header";
import { useEffect } from "react";
import { useSelf } from "@/lib/user";
import { useDocument } from "@/lib/document";

export function Doc({ id }: { id: string }) {
  const [self, setSelf] = useSelf();
  const setPresence = usePresenceSetter();
  useEffect(() => setPresence(self), [self, setPresence]);

  const editor = useCreateBlockNote({
    collaboration: {
      provider: useYjsProvider(),
      fragment: useYDoc().getXmlFragment("blocknote"),
      user: self,
    },
  });

  const [document, setDocument] = useDocument(id);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header
        title={document.title}
        onUpdateTitle={(title) => setDocument({ ...document, title })}
        self={self}
        onUpdateSelf={setSelf}
      />
      <main className="p-4 flex-1 overflow-y-auto">
        <BlockNoteView editor={editor} theme="light" />
      </main>
    </div>
  );
}
