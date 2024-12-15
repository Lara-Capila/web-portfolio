import { GithubLink } from "./GithubLink";
import { MenuIcon } from "./icons/MenuIcon";
import { LinkedinLink } from "./LinkedinLink";
import { WhatsAppLink } from "./WhatsAppLink";

export const MenuIconButton = ({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) => {
  return (
    <div className="flex w-full justify-between items-center sm:hidden">
      <div className="gap-5 text-xl flex">
        <LinkedinLink />
        <GithubLink />
        <WhatsAppLink />
      </div>

      <button
        onClick={onClick}
        className="border-none bg-transparent cursor-pointer flex"
      >
        <MenuIcon open={open} />
      </button>
    </div>
  );
};
