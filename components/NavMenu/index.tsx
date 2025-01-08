import Image from "next/image";
import { FC, useState } from "react";
import NavigationDropdown from "./components/NavigationDropdown";

interface INavMenuProps {
  currentUrl?: string;
}

const NavMenu: FC<INavMenuProps> = ({ currentUrl }): JSX.Element => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      toggleDropdown();
    };
  };

  return (
    <div className="order-2 flex gap-x-2 shrink-0">
      <a
        title="Menu"
        tabIndex={0}
        aria-hidden="true"
        className="relative flex cursor-pointer items-center text-pomeroyWhite no-underline hover:underline focus:no-underline"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        <span className="max-sm:hidden mr-3 inline font-extrabold text-lg text-pomeroyWhite">
          Menu
        </span>
        <Image src="/menu.svg" alt="" aria-hidden="true" height={34} width={34} />
      </a>
      {dropdown && <NavigationDropdown onClose={setDropdown} />}
    </div>
  );
};

export default NavMenu;