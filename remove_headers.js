const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') && !file.endsWith('layout.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('c:/images/nith_website/new-site/nith-main-frontend/app');

let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove import lines for Header, Header31, Footer
  content = content.split('\n').filter(line => {
    if (line.match(/import\s+(?:Header|Header31|Footer)\s+from/)) return false;
    return true;
  }).join('\n');
  
  // Remove tags <Header />, <Header31 />, <Footer />
  content = content.replace(/<\s*(Header|Header31|Footer)\s*\/?>/g, '');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});
console.log('Updated ' + count + ' files.');
