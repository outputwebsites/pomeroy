import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import { Name, NameLongInc, Description, EmailMain, ContactCTA } from "../data";

const ClientPage: NextPage = () => {
  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"Client Access - " + Name} description={Description} url="client" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-20 px-5 sm:px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="clientpage">
          <section id="contentheader" className="text-justify m-auto max-w-[725px]">
            <h1>Customer Access</h1>
            <p className="mt-2 !hyphens-none">Place orders with us electronically, receive e-mail notifications when orders are complete, and download reports.</p>
            <hr className="my-4" />
            <p className="mt-2"><strong>Log In or Create a "New Customer" Account Below:</strong></p>
          </section>

          <section id="client">
            <div className="mt-8 mb-24 text-left">
              <iframe src="https://pomeroyappraisalassociatesoffloridainc.appraiserxsites.com/ClientOrders/lenderlogin.aspx?source=appraisalorder/LenderOrder.aspx?AWSAccountsID%3d796257%26width%3d100%2525%26ID%3d5613614%26ReferrerGuid%3d1083c20c-8f30-4acd-acaf-f276aaaa048c" className="w-full h-[1900px] !border-0" />
            </div>
          </section>

          <section id="contact" className="text-left mb-8">
            <h2 id="contact-info">Got Questions?</h2>
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

export default ClientPage;