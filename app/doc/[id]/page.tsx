import { DocumentManager } from "@y-sweet/sdk";
import { YDocProvider } from "@y-sweet/react";

import { Doc } from "@/components/Doc";

const manager = new DocumentManager(process.env.CONNECTION_STRING!);

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  async function getClientToken() {
    "use server";
    // In a production app, this is where you'd authenticate the user
    // and check that they are authorized to access the doc.
    return await manager.getOrCreateDocAndToken(id);
  }

  return (
    <YDocProvider docId={id} authEndpoint={getClientToken}>
      <Doc id={id} />
    </YDocProvider>
  );
}
