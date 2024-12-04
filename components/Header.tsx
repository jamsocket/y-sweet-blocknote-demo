import { usePresence } from "@y-sweet/react";
import { Avatar } from "./Avatar";

interface Props {
  self: { name: string; color: string };
  onUpdateSelf(self: { name: string; color: string }): void;
}

export function Header(props: Props) {
  const { self, onUpdateSelf } = props;
  const presence = usePresence();

  return (
    <header className="isolate z-10 relative flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
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
          <details>
            <summary className="[&::-webkit-details-marker]:hidden cursor-pointer">
              <Avatar name={self.name} color={self.color} size={24} />
            </summary>

            <form className="absolute right-0 mt-1 p-4 flex items-center gap-4 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
              <input
                className="px-2 py-1 border border-inherit rounded-sm"
                name="name"
                defaultValue={self.name}
                onInput={(e) =>
                  onUpdateSelf({ ...self, name: e.currentTarget.value })
                }
              />
              <input
                name="color"
                type="color"
                defaultValue={self.color}
                onInput={(e) =>
                  onUpdateSelf({ ...self, color: e.currentTarget.value })
                }
              />
            </form>
          </details>
        </li>
      </ul>
    </header>
  );
}
