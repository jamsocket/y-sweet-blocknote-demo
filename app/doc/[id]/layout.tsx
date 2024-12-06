import { LayoutProps } from "@/.next/types/app/doc/[id]/layout";
import { Sidebar } from "@/components/Sidebar";

export default async function RootLayout({ children, params }: LayoutProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen grid grid-cols-4">
      <aside className="h-full bg-gray-100">
        <Sidebar activeId={id} />
      </aside>
      <main className="col-span-3">{children}</main>
    </div>
  );
}
