import { useCallback } from "react";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Document {
  title: string;
  id: string;
}

const documents = atomWithStorage<Document[]>("ysweet-blocknote-documents", []);

export function useDocuments() {
  return useAtom(documents);
}

export function useDocument(id: string) {
  const [documents, setDocuments] = useDocuments();

  const document = documents.find((doc) => doc.id === id) || {
    id,
    title: "Untitled Document",
  };

  const setDocument = useCallback(
    (update: Document) => {
      setDocuments((docs) =>
        docs.map((doc) => {
          if (doc.id === update.id) return update;
          return doc;
        }),
      );
    },
    [setDocuments],
  );

  return [document, setDocument] as const;
}
