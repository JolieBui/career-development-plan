const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};
global.lucide = { createIcons: () => {} };
global.Chart = class { constructor() {} };

// mock prompt/confirm
global.confirm = () => true;
global.prompt = () => "";

const scriptCode = fs.readFileSync('app.js', 'utf8');
try {
  eval(scriptCode);
  
  // Call loadData which happens on init
  loadData();
  
  // Try loading demo data
  const btn = document.getElementById("load-demo-btn");
  if(btn) btn.click();
  
  console.log("Strengths table rows:", document.querySelector("#strengths-table tbody").innerHTML);
  console.log("Growths table rows:", document.querySelector("#growths-table tbody").innerHTML);
} catch(e) {
  console.error("Error:", e);
}
