/** @type {import("next-sitemap").IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_URL || "https://paafl.com",
  changefreq: "weekly",
  generateRobotsTxt: true,
  autoLastmod: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*.json$",
          "/*_buildManifest.js$",
          "/*_middlewareManifest.js$",
          "/*_ssgManifest.js$",
          "/*.js$"
        ]
      }
    ]
  }
}