import { usePresence } from "@y-sweet/react";
import { Avatar } from "./Avatar";

interface Props {
  self: { name: string; color: string };
}

export function Header(props: Props) {
  const { self } = props;
  const presence = usePresence();

  return (
    <header className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
      <h1 className="font-bold">Y-Sweet + BlockNote</h1>
      <ul className="flex flex-row-reverse gap-1 group">
        {[...presence.entries()].map(([id, user]) => (
          <li
            key={id}
            className="relative -ml-3 group-hover:ml-0 transition-all"
          >
            <Avatar name={user.name} color={user.color} size={24} />
          </li>
        ))}
        <li className="relative">
          <Avatar name={self.name} color={self.color} size={24} />
        </li>
      </ul>
    </header>
  );
}
