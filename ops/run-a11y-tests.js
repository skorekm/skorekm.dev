import fs from 'fs';
import { execSync } from 'child_process';

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
  const urls = fs.readFileSync('./ops/urls.txt', 'utf8')
    .split('\n')
    .filter(path => path.trim() !== '');

  // Track overall results
  let hasFailures = false;

  console.log('paths', urls);
  // Test each URL
  for (const url of urls) {    
    console.log('====================================================');
    console.log(`Testing: ${url}`);
    console.log('====================================================');
    
    try {
      // Run axe on the URL
      execSync(`axe "${url}" --exit`, { stdio: 'inherit' });
    } catch (error) {
      console.log('error', error);
      // If axe finds issues, it will exit with non-zero code
      hasFailures = true;
    }
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