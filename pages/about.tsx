import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import CardArea from "../components/CardArea";
import { Name, Description, Summary, History, Experience } from "../data";

const ContactPage: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"About " + Name} description={Description} url="about" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-24 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="about">
          <section id="contentheader">
            <h1 className="text-center px-5 sm:px-9">About {Name}</h1>
          </section>

          <section id="about-cta" className="px-5 max-w-[1040px]">
            <CardArea />

            <div id="get-an-appraisal" className="flex flex-col gap-3 text-center items-center justify-center">
              <Link className="button text-xl" href={linkBase + "/appraisal" || "./appraisal"} title="Get an Appraisal">Get an Appraisal</Link>
            </div>
          </section>

          <section id="about-info" className="mt-20 px-5 sm:px-9 flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <h2 id="summary">Summary</h2>
              <div>{Summary}</div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 id="history">History</h2>
              <div>{History}</div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 id="experience" className="mb-2">Professional Experience</h2>
              <div>{Experience}</div>
            </div>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default ContactPage;