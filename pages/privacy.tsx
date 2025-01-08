import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import { NameLongInc, Description, Domain, EmailMain, GitHub } from "../data";

const PrivacyPage: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <div className="text-pomeroyGreenBlack min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"Privacy Policy for " + Domain} description={Description} url="privacy" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-20 px-5 sm:px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="privacy">
          <section id="contentheader">
            <h1 className="mb-8"><span className="max-md:break-all">{Domain}</span> Privacy Policy</h1>
            <div className="text-lg flex flex-row flex-wrap gap-8 text-left items-left justify-left">
              <Link className="button" href={linkBase + "/" || "./"} title={"Go to the home/index page of " + Domain}><p>Go to Homepage</p></Link>
            </div>
          </section>

          <section id="privacypolicy" className="text-left">
            <h2 className="mt-8 mb-2" id="overview">Privacy Policy Overview</h2>
            <p>It is the policy of {NameLongInc} to respect your privacy regarding any information we may collect while viewing/using our website. This privacy policy applies to <Link href={linkBase + "/" || "./"} title={Domain}>{Domain}</Link> (hereinafter, “the website”, “our website”). {NameLongInc} respects your privacy and is committed to protecting personally identifiable information you may provide {NameLongInc} through the website. We have adopted this privacy policy to explain what information may be collected in the website, how we uses this information, and under what circumstances we may disclose the information to third parties. This privacy policy applies only to information we collect through the website and does not apply to the collection of information from other sources.</p>
            <p>This privacy policy sets forth the general rules and policies governing your experience with the website. Depending on your activities when viewing/using the website (such as clicking third-party links), you may be required to agree to additional terms and conditions.</p>

            <h2 className="mt-8 mb-2" id="user-data">User Data</h2>
            <p>Like most websites, our website collects non-personally-identifying information of the sort that devices and servers typically make available, such as the device/device type, language preference, and the date and time of each user request. Our purpose in collecting non-personally identifying information is to better understand how users of our website view/use the website. From time to time, we may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of the website.</p>

            <h2 className="mt-8 mb-2" id="gathering-info">Gathering of Personally-Identifying Information</h2>
            <p>Certain users of our website choose to interact in ways that require us to gather personally-identifying information. The amount and type of information that we gather depends on the nature of the interaction. We run analytics to understand how you interact with the website which should continuously improve your user experience (e.g. identifying that a feature is too difficult for most users).</p>

            <h2 className="mt-8 mb-2" id="security">Security</h2>
            <p>The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee absolute security.</p>

            <h2 className="mt-8 mb-2" id="child-data">Personal Data Concerning Children</h2>
            <p>A “child” is a person under the age needed to consent to the processing of Personal Data in their country of residence (for example, 13 years old in the United States and between 13 and 16 years old in the European Union).</p>
            <p>We do not knowingly collect any personal data concerning children. In the unlikely event that we have (or you believe we have) collected information from a child, please contact us by using the contact info at the bottom of this privacy policy. We will take all necessary steps to purge the data from relevant systems.</p>

            <h2 className="mt-8 mb-2" id="external-links">Links To External Sites</h2>
            <p>Our website may contain links to external sites that are not operated by {NameLongInc}. If you click on a third party link, you will be directed to that third party’s site. We strongly advises you to review the privacy policy and terms and conditions of every site you visit.</p>
            <p>We have no control over, and assumes no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>

            <h2 className="mt-8 mb-2" id="info-protection">Protection of Certain Personally-Identifying Information</h2>
            <p>We disclose potentially personally-identifying and personally-identifying information only to those of employees, contractors and affiliated organizations that (i) need to know that information in order to process it on our behalf or to provide services available at our website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using our website, you consent to the transfer of such information to them. We will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to employees, contractors and affiliated organizations, as described above, we disclose potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when we believes in good faith that disclosure is reasonably necessary to protect the property or rights of {NameLongInc}, third parties or the public at large.</p>
            <p>If you send us a request (for example via a support email or via one of the feedback mechanisms), we reserve the right to store it privately in order to help clarify or respond to your request. We takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>

            <h2 className="mt-8 mb-2" id="statistics">Aggregated Statistics</h2>
            <p>We may collect statistics about the behavior of users in the website. We may display this information publicly or provide it to others. However, we does not disclose your personally-identifying information.</p>

            <h2 className="mt-8 mb-2" id="transfers">Business Transfers</h2>
            <p>If {NameLongInc}, or a substantially amount of assets owned by {NameLongInc}, were acquired, or in the unlikely event that {NameLongInc} goes out of business, or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of {NameLongInc} may continue to use your personal information as set forth in this policy.</p>

            <h2 className="mt-8 mb-2" id="entire-agreement">Entire Agreement</h2>
            <p>The privacy policy is the sole and entire agreement between you and {NameLongInc} regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding their subject matter.</p>

            <h2 className="mt-8 mb-2" id="changes">Privacy Policy Changes</h2>
            <p>Although most changes are likely to be minor, we may change this privacy policy from time to time, and in our sole discretion. We encourages users to frequently check this page for any changes to this privacy policy. Your continued use of this site after any change in this privacy policy will constitute your acceptance of such change.</p>
            <p><em>This privacy policy was last updated on September 7, 2024. Visit the <Link href={GitHub} target="_blank" rel="noopener noreferrer" title="View the GitHub repository for this website">website files on GitHub</Link> for version history.</em></p>

            <h2 className="mt-8 mb-2" id="contact-info">Contact Information</h2>
            <p>If you have any questions about this privacy policy, please contact {NameLongInc} via email at <Link href={"mailto:" + EmailMain} target="_blank" title={"Contact " + NameLongInc + " via Email at " + EmailMain}>{EmailMain}</Link></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default PrivacyPage;