import Image from "next/image";
import Link from "next/link";
import { Name, NameJustInc, Pages } from "../../data";
import NavMenu from "../NavMenu";

const PageHead = (): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <header className="bg-pomeroyGreenBlack text-pomeroyGreenWhite w-full">
      <div className="max-w-[1000px] px-9 mx-auto w-full flex flex-row text-left items-center justify-center align-middle gap-x-8">
        <Link href={linkBase + "/" || "./"} title={Name} className="grow py-4 flex flex-row gap-x-3 gap-y-2 align-middle text-justify items-center justify-left !no-underline">
          <Image
            src="/logo-white.svg"
            width={60}
            height={60}
            alt=""
            className="max-[430px]:hidden"
          />
          <p className="playfair text-pomeroyWhite !leading-tight text-xl sm:text-2xl max-[386px]:text-lg max-[320px]:text-base"><strong>{Name} <br /><span className="max-[333px]:hidden">{NameJustInc}</span></strong></p>
        </Link>

        <nav className="max-lg:hidden flex flex-row flex-wrap gap-x-4 gap-y-5 text-center items-center justify-center">
          {Pages.map((page, index) => (
            (page.title !== "Home") && (
              <Link
                key={index}
                className="py-4 px-2 text-sm !text-pomeroyGreenWhite focus:!text-pomeroyGreenLight active:!text-pomeroyGreenLight hover:!text-pomeroyWhite !no-underline"
                href={linkBase + "/" + page.href || "./" + page.href}
                title={page.title}
              >
                {page.title}
              </Link>
            )
          ))}
        </nav>

        <nav className="lg:hidden">
          <NavMenu />
        </nav>
      </div>
    </header>
  );
};

export default PageHead;