import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import { Name, Description, Domain } from "../data";

const Error404Page: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"Error 404: Content Not Found - " + Name} description={Description} url="404" image="" />
      <PageHead />

      <main className="py-32 px-9 max-w-[1000px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <h1 className="text-red-600">Error 404: Content Not Found</h1>

        <p className="mt-4">This page/content has moved, is no longer available, has been archived, or was not valid.</p>

        <Link className="button my-8 text-2xl" href={linkBase + "/" || "./"} title={"Go to the home/index page of " + Domain}>Go to Homepage</Link>
      </main>

      <PageFooter />
    </div>
  );
};

export default Error404Page;