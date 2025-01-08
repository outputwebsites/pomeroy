import Image from "next/image";
import Link from "next/link";
import { Name, NameJustInc, NameLongInc, Pages, EmailMain, PhoneOffice, PhoneTollFree, PhoneFax, AddressNumber, AddressStreet, AddressSuite, AddressCity, AddressState, AddressZipLong, AddressLinkGoogle, AddressLinkApple, Domain } from "../../data";

const PageFooter = (): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";
  let currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-pomeroyGreenBlack text-pomeroyGreenWhite w-full">
      <div className="pt-14 pb-12 px-8 flex flex-col gap-14 text-center items-center justify-center">
        <div className="flex flex-col md:flex-row gap-x-3 gap-y-2 align-middle text-center md:text-justify items-center justify-center">
          <Image
            src="/logo-white.svg"
            width={150}
            height={150}
            alt=""
          />
          <p className="playfair text-pomeroyWhite text-3xl sm:text-4xl max-[386px]:text-2xl max-[320px]:text-xl"><strong>{Name} <br />{NameJustInc}</strong></p>
        </div>
        <div className="text-lg flex flex-row flex-wrap gap-8 text-center items-center justify-center">
          <Link className="button grow" href={linkBase + "/appraisal" || "./appraisal"} title="Get an Appraisal">Get an Appraisal</Link>
          <Link className="button grow" href={linkBase + "/client" || "./client"} title="Existing Customer Login">Existing Customer?</Link>
        </div>
      </div>

      <section id="footer-contact">
        <div className="my-10 py-14 px-2 bg-gray-200 text-pomeroyBlack flex max-[920px]:flex-wrap max-[920px]:flex-col text-center items-center justify-center gap-x-14 gap-y-8">
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

      <div className="py-12 px-8 flex flex-col gap-20 text-center items-center justify-center">
        <section id="footer-links">
          <div className="flex flex-col gap-y-12 text-center items-center justify-center">
            <div className="flex flex-row flex-wrap gap-x-7 gap-y-5 text-center items-center justify-center">
              {Pages.map((page, index) => (
                <Link key={index} className="text-lg !text-pomeroyGreenWhite focus:!text-pomeroyGreenLight active:!text-pomeroyGreenLight hover:!text-pomeroyWhite" href={linkBase + "/" + page.href || "./" + page.href} title={page.title}>{page.title}</Link>
              ))}
            </div>
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 text-center items-center justify-center">
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 text-center items-center justify-center text-sm">
                <p className="text-sm">Copyright © {currentYear}</p>
                <Link className="text-sm !text-pomeroyGreenWhite focus:!text-pomeroyGreenLight active:!text-pomeroyGreenLight hover:!text-pomeroyWhite no-underline" href={linkBase + "/" || "./"} title={NameLongInc}>{NameLongInc}</Link>
              </div>
              <Link className="text-sm !text-pomeroyGreenWhite focus:!text-pomeroyGreenLight active:!text-pomeroyGreenLight hover:!text-pomeroyWhite" href="privacy" title="Privacy Policy">Privacy Policy</Link>
              <p className="text-sm">Website by <Link className="!text-pomeroyGreenWhite focus:!text-pomeroyGreenLight active:!text-pomeroyGreenLight hover:!text-pomeroyWhite" href="https://derek-perry.com" target="_blank" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</Link></p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default PageFooter;