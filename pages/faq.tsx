import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import {
  Accordion
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ItemAccordion from "../components/ItemAccordion";
import { FAQ } from "../data";
import { Name, NameLongInc, Description, EmailMain, ContactCTA } from "../data";

const FAQPage: NextPage = () => {
  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"FAQ - " + Name} description={Description} url="faq" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-20 px-5 sm:px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="faqpage">
          <section id="contentheader">
            <h1>Frequently Asked Questions</h1>
          </section>

          <section id="faq">
            <div className="mt-8 mb-24 text-left">
              <Accordion allowZeroExpanded>
                {FAQ.map((item, index) => (
                  <ItemAccordion key={index} index={index} question={item.question ? item.question : ""} answer={item.answer ? <>{item.answer}</> : <></>} />
                ))}
              </Accordion>
            </div>
          </section>

          <section id="contact" className="text-left mb-8">
            <h2 id="contact-info">Got More Questions?</h2>
            <p className="mt-2">{ContactCTA}</p>
            <hr className="my-4" />
            <p className="mt-2">Contact {NameLongInc} via email at <Link href={"mailto:" + EmailMain} target="_blank" title={"Contact " + NameLongInc + " via Email at " + EmailMain}>{EmailMain}</Link></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default FAQPage;