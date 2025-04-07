import fs from 'fs';
import path from 'path';

const sitemapPath = path.resolve(
  import.meta.dirname,
  '../.next/server/app/sitemap.xml.body'
);

try {
  // Check if the sitemap.xml file exists
  if (!fs.existsSync(sitemapPath)) {
    console.error(`Sitemap file not found at: ${sitemapPath}`);
    process.exit(1);
  }

  // Read the sitemap.xml file
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Extract URLs using a simple regex
  // This works for basic sitemaps but might need adjustment for complex ones
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const matches = [...sitemapContent.matchAll(urlRegex)];

  const urls = matches.map(match => match[1]);

  if (urls.length === 0) {
    console.warn('No URLs found in the sitemap.xml file.');
    process.exit(1);
  }

  // Write URLs to a file
  const outputPath = path.resolve(process.cwd(), './ops/urls.txt');
  fs.writeFileSync(outputPath, urls.join('\n'));

  console.log(`Extracted ${urls.length} URLs from sitemap.xml`);
  console.log(`URLs written to ${outputPath}`);
} catch (error) {
  console.error('Error extracting URLs from sitemap.xml:', error);
  process.exit(1);
}