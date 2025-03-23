#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Path to the sitemap.xml file after build
const sitemapPath = path.resolve(import.meta.dirname,'../.next/server/app/sitemap.xml.body');

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

  console.log('matches', matches);
  
  const urls = matches.map(match => match[1]);
  
  if (urls.length === 0) {
    console.warn('No URLs found in the sitemap.xml file.');
    process.exit(1);
  }
  
  // Convert full URLs to local paths
  const localUrls = urls.map(url => {
    try {
      console.log(url);
      const urlObj = new URL(url);
      // We want to remove the base URL from the URL
      return urlObj.pathname;
    } catch (err) {
      console.error('Error converting URL:', url, err);
      return url; // If it's not a valid URL, return as is
    }
  });
  
  // Write URLs to a file
  const outputPath = path.resolve(process.cwd(), './ops/urls.txt');
  fs.writeFileSync(outputPath, localUrls.join('\n'));
  
  console.log(`Extracted ${urls.length} URLs from sitemap.xml`);
  console.log(`URLs written to ${outputPath}`);
} catch (error) {
  console.error('Error extracting URLs from sitemap.xml:', error);
  process.exit(1);
}