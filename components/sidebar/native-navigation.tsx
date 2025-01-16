import Link from "next/link";
import { twMerge } from "tailwind-merge";
import newtonHomeIcon from "../icons/newtonHomeIcon";
import newtonSettingsIcon from "../icons/newtonSettingsIcon";
import newtonTrashIcon from "../icons/newtonTrashIcon";
import Settings from "../settings/Settings";

type Props = {
  myWorkspaceId: string;
  className?: string;
};

function NativeNavigation({ myWorkspaceId, className }: Props) {
  return (
    <nav className={twMerge("my-2", className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2"
            href={`/dashboard/${myWorkspaceId}`}
          >
            <newtonHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>
        <Settings>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2 cursor-pointer">
            <newtonSettingsIcon />
            <span>Setting</span>
          </li>
        </Settings>
        <li>
          <Link
            className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2"
            href={`/dashboard/${myWorkspaceId}`}
          >
            <newtonTrashIcon />
            <span>Trash</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NativeNavigation;
