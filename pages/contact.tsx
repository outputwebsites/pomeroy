import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import FormContact from "../components/FormContact";
import { Name, Description, EmailMain, ContactCTA, PhoneOffice, PhoneTollFree, PhoneFax, AddressNumber, AddressStreet, AddressSuite, AddressCity, AddressState, AddressZipLong, AddressLinkGoogle, AddressLinkApple, Domain } from "../data";

const ContactPage: NextPage = () => {
  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"Contact " + Name} description={Description} url="contact" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-20 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="contact">
          <section id="contentheader">
            <h1 className="mb-8 px-5 sm:px-9">Contact Us</h1>
          </section>

          <section id="contact-cta" className="text-left mb-8 px-5 sm:px-9">
            <p className="mt-2">{ContactCTA}</p>
            <hr className="my-4" />
          </section>

          <section id="contact-info">
            <div className="my-10 mx-0 sm:mx-9 py-14 px-2 bg-gray-200 text-pomeroyBlack flex max-[920px]:flex-wrap max-[920px]:flex-col text-center items-center justify-center gap-x-14 gap-y-8">
              <div className="flex flex-col gap-y-8 min-[420px]:gap-y-6 text-center items-center justify-center">
                <div className="flex flex-col min-[420px]:flex-row gap-x-6 gap-y-1 text-center min-[420px]:text-left items-center justify-center">
                  <p className="text-lg min-w-[142px] text-center min-[420px]:text-right"><em>Email</em></p>
                  <Link className="text-xl min-w-[160px]" href={"mailto:" + EmailMain + "?subject=Inquiry - " + Domain + "&body=Inquire about an appraisal with " + Name + ". Please include necessary contact information along with any notes about availability."} target="_blank" title={"Contact " + Name + " via Email at " + EmailMain}>{EmailMain}</Link>
                </div>
                <div className="flex flex-col min-[420px]:flex-row gap-x-6 gap-y-1 text-center min-[420px]:text-left items-center justify-center">
                  <p className="text-lg min-w-[142px] text-center min-[420px]:text-right"><em>Phone (Office)</em></p>
                  <Link className="text-xl min-w-[160px]" href={"tel:" + PhoneOffice} target="_blank" title={"Contact " + Name + " via Phone (Office) at " + PhoneOffice}>{PhoneOffice}</Link>
                </div>
                <div className="flex flex-col min-[420px]:flex-row gap-x-6 gap-y-1 text-center min-[420px]:text-left items-center justify-center">
                  <p className="text-lg min-w-[142px] text-center min-[420px]:text-right"><em>Phone (Toll-Free)</em></p>
                  <Link className="text-xl min-w-[160px]" href={"tel:" + PhoneTollFree} target="_blank" title={"Contact " + Name + " via Phone (Toll-Free) at " + PhoneTollFree}>{PhoneTollFree}</Link>
                </div>
                <div className="flex flex-col min-[420px]:flex-row gap-x-6 gap-y-1 text-center min-[420px]:text-left items-center justify-center">
                  <p className="text-lg min-w-[142px] text-center min-[420px]:text-right"><em>Fax</em></p>
                  <Link className="text-xl min-w-[160px]" href={"tel:" + PhoneFax} target="_blank" title={"Contact " + Name + " via Fax at " + PhoneFax}>{PhoneFax}</Link>
                </div>
              </div>
              <div className="flex flex-col gap-y-8 gap-x-4 text-center items-center justify-center">
                <div className="flex flex-col gap-y-1 text-center items-center justify-center">
                  <div className="text-xl flex flex-row gap-x-2 text-center items-center justify-center">
                    <p>{AddressNumber} {AddressStreet} {AddressSuite}, <br />{AddressCity}, {AddressState} {AddressZipLong}</p>
                  </div>
                  <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 text-center items-center justify-center">
                    <Link className="text-lg" href={AddressLinkGoogle} target="_blank" title={"View " + Name + " on Google Maps for Directions"}><em>Google Maps</em></Link>
                    <Link className="text-lg" href={AddressLinkApple} target="_blank" title={"View " + Name + " on Apple Maps for Directions"}><em>Apple Maps</em></Link>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 text-center items-center justify-center">
                  <div className="flex flex-row gap-x-6 text-center items-center justify-center">
                    <p className="text-lg min-w-[67px]"><em>Mon-Fri</em></p>
                    <p className="text-lg min-w-[82px]">9am-5pm</p>
                  </div>
                  <div className="flex flex-row gap-x-6 text-center items-center justify-center">
                    <p className="text-lg min-w-[67px]"><em>Sat, Sun</em></p>
                    <p className="text-lg min-w-[82px]">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-form" className="text-left mb-8 px-5 sm:px-9">
            <hr className="my-4" />
            <p className="mt-8 mb-6">Fill out this form below to quickly send us an email.</p>
            <FormContact />
            <hr className="mt-8" />
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default ContactPage;