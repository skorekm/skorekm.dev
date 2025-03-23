import fs from 'fs';
import { execSync } from 'child_process';

// Get base URL from environment variable or use default
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
console.log(`Using base URL: ${baseUrl}\n`);

try {
  // Check if axe-core is installed
  try {
    execSync('axe --version', { stdio: 'ignore' });
  } catch (err) {
    console.log('error', err);
    console.log('Installing axe-core CLI...');
    execSync('npm install -g @axe-core/cli', { stdio: 'inherit' });
  }

  // Read URL paths
  const paths = fs.readFileSync('./ops/urls.txt', 'utf8')
    .split('\n')
    .filter(path => path.trim() !== '');

  // Track overall results
  let hasFailures = false;

  console.log('paths', paths);
  // Test each URL
  for (const path of paths) {
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') || path === '' ? path : `/${path}`;
    console.log('normalizedPath', normalizedPath);
    
    // Build the test URL
    const testUrl = normalizedPath === '' || normalizedPath === '/' 
      ? baseUrl 
      : `${baseUrl}${normalizedPath}`;
    
    console.log('====================================================');
    console.log(`Testing: ${testUrl}`);
    console.log('====================================================');
    
    try {
      // Run axe on the URL
      execSync(`axe "${testUrl}" --exit`, { stdio: 'inherit' });
    } catch (error) {
      console.log('error', error);
      // If axe finds issues, it will exit with non-zero code
      hasFailures = true;
    }
    
    console.log('');
  }

  // Summary
  console.log('====================================================');
  console.log('Accessibility testing complete.');
  console.log('====================================================');

  // Exit with appropriate code
  process.exit(hasFailures ? 1 : 0);
} catch (error) {
  console.error('Error during accessibility testing:', error);
  process.exit(1);
}