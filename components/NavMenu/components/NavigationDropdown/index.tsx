import { FC, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useOnEventOutside } from '../../../../hooks';
import Link from 'next/link';
import { Pages } from "../../../../data";

interface INavigationDropdownProps {
  onClose: (value: boolean) => void;
};

export const NavigationDropdown: FC<INavigationDropdownProps> = ({ onClose }): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  const ref = useRef(null);

  const handleScrollOutside = (): void => {
    onClose(false);
  };

  useOnClickOutside(ref, handleScrollOutside, 'mousedown');

  useOnEventOutside(ref, handleScrollOutside, 'scroll');

  return (
    <nav
      ref={ref}
      className='absolute z-50 right-2 mx-1 top-24 max-[333px]:top-16 overflow-hidden bg-pomeroyWhite shadow-lg'
    >
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <ul className='list-none flex flex-col border-t border-x'>
            {Pages.map((page, index) => (
              <li className='grow' key={index}>
                <Link
                  href={linkBase + "/" + page.href || "./" + page.href}
                  title={page.title}
                  className='py-3 px-3 max-sm:px-2 border-b hover:bg-pomeroyGreenWhite flex text-2xl transition-all font-bold no-underline'
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationDropdown;
