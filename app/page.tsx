import { redirect } from "next/navigation";

export default function GET() {
  const id = crypto.randomUUID();
  return redirect("/doc/" + id);
}
