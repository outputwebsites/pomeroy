import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import Image from "next/image";
import CardArea from "../components/CardArea";
import { Name, NameLongInc, NameJustInc, Description } from "../data";

const HomePage: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={NameLongInc} description={Description} url="" image="" />
      <PageHead />

      <main className="pt-10 sm:pt-20 pb-20 w-full flex flex-1 flex-col text-center items-center justify-center">
        <div className="px-5 sm:px-9 max-w-[880px] flex flex-col md:flex-row gap-x-3 gap-y-2 align-middle text-center md:text-justify items-center justify-center">
          <Image
            src="/logo.svg"
            width={180}
            height={180}
            alt=""
          />
          <h1 className="my-0 playfair text-green-900 text-4xl sm:text-5xl max-[460px]:text-3xl max-[395px]:text-2xl"><strong>{Name} <br />{NameJustInc}</strong></h1>
        </div>

        <section id="appraisal" className="px-5 max-w-[1040px]">
          <CardArea />

          <div id="get-an-appraisal" className="flex flex-col gap-3 text-center items-center justify-center">
            <Link className="button text-xl" href={linkBase + "/appraisal" || "./appraisal"} title="Get an Appraisal">Get an Appraisal</Link>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default HomePage;