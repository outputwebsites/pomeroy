/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/homepage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/account",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/createaccount",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/create-account",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/create%20account",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/log-in",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/log%20in",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/clientlogin",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/client-login",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/client-log-in",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/client%20login",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/client%20log%20in",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/customer",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/customerlogin",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/customer-login",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/customer-log-in",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/customer%20login",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/customer%20log%20in",
        destination: "/client",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/feequote",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/fee-quote",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/fee%20quote",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/orderanappraisal",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/order-an-appraisal",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/order%20an%20appraisal",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/getanappraisal",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/get-an-appraisal",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/get%20an%20appraisal",
        destination: "/appraisal",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/prices",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/price",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/fees",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/fee",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services-area",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/servicesarea",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/services%20area",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/servicearea",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/service%20area",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/service-areas",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/serviceareas",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/service%20areas",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/info",
        destination: "/about",
        permanent: true
      },
      {
        source: "/information",
        destination: "/about",
        permanent: true
      },
      {
        source: "/history",
        destination: "/about",
        permanent: true
      },
      {
        source: "/professionalexperience",
        destination: "/about",
        permanent: true
      },
      {
        source: "/professional-experience",
        destination: "/about",
        permanent: true
      },
      {
        source: "/professional%20experience",
        destination: "/about",
        permanent: true
      },
      {
        source: "/aboutus",
        destination: "/about",
        permanent: true
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true
      },
      {
        source: "/about%20us",
        destination: "/about",
        permanent: true
      },
      {
        source: "/question",
        destination: "/faq",
        permanent: true
      },
      {
        source: "/questions",
        destination: "/faq",
        permanent: true
      },
      {
        source: "/frequentlyaskedquestions",
        destination: "/faq",
        permanent: true
      },
      {
        source: "/frequently-asked-questions",
        destination: "/faq",
        permanent: true
      },
      {
        source: "/frequently%20asked%20questions",
        destination: "/faq",
        permanent: true
      },
      {
        source: "/contacts",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/contactus",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/contact%20us",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/privacypolicy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/privacy%20policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/cookie",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/cookies",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/cookiepolicy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/cookie-policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/cookie%20policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/drive",
        destination: "https://drive.google.com/drive/folders/1nX9hNhkUO_EGE4j57A_wbqKk0yQhAuHk",
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
