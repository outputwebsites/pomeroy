import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/Card";
import { Name, Description } from "../data";

const ServiceAreaPage: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"Service Area for " + Name} description={Description} url="service-area" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-24 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="service-area">
          <section id="contentheader">
            <h1 className="text-center px-5 sm:px-9">Service Area</h1>
          </section>

          <section id="service-area-card" className="mx-auto max-w-[876px]">
            <div className="my-8 mx-5 sm:mx-9">
              <p className="font-normal text-3xl max-sm:text-2xl">We serve <Link href={linkBase + "/appraisal-residential" || "./appraisal-residential"} title="Get a Residential Appraisal"><strong>residential</strong></Link> and <Link href={linkBase + "/appraisal-commercial" || "./appraisal-commercial"} title="Get a Commercial Appraisal"><strong>commercial</strong></Link> properties of <em>Volusia, Flagler, Brevard, and Seminole</em> counties in Florida.</p>
            </div>

            <div id="get-an-appraisal" className="flex flex-col gap-3 text-center items-center justify-center">
              <Link className="button text-xl" href={linkBase + "/appraisal" || "./appraisal"} title="Get an Appraisal">Get an Appraisal</Link>
            </div>
          </section>

          <section id="service-area-map" className="mt-12 mx-auto max-w-[880px] px-0 sm:px-9">
            <Image
              src="/area.svg"
              width={1180}
              height={1180}
              alt=""
            />
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default ServiceAreaPage;