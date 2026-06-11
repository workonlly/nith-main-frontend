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
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('c:/images/nith_website/new-site/nith-main-frontend/app/component/slidebar');

let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. First, make sure we don't duplicate `block` if it's already there
  content = content.replace(/className="block block /g, 'className="block ');

  // 2. Replace any text-[clamp(...)] that belongs to the link title with `block text-[clamp(11px,2vw,14px)]`
  // We can identify link titles because they have `font-medium text-gray-600`
  content = content.replace(/(className=")(?:block\s+)?text-\[clamp\([^\]]+\)\](\s+font-medium text-gray-600)/g, '$1block text-[clamp(11px,2vw,14px)]$2');

  // Let's also do the same if they missed the `block` and have exactly `text-[clamp(10px,2vw,14px)]`
  content = content.replace(/className="text-\[clamp\([^\]]+\)\] font-medium text-gray-600/g, 'className="block text-[clamp(11px,2vw,14px)] font-medium text-gray-600');

  // Let's remove duplicate `block` just in case
  content = content.replace(/block block/g, 'block');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});
console.log('Updated ' + count + ' files.');
