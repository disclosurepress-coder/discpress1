const fs = require("fs");
const path = require("path");

const now = new Date().toISOString();
const sitemapPath = path.join(process.cwd(), "sitemap.xml");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://disclosurepress.com/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://disclosurepress.com/scout.html</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log("Current working directory:", process.cwd());
console.log("Updated sitemap.xml lastmod:", now);
console.log("Wrote sitemap to:", sitemapPath);
