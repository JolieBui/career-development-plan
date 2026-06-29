const fs = require('fs');

global.window = {};
global.document = {
  addEventListener: () => {},
  querySelector: () => ({ tbody: { innerHTML: "" } }),
  querySelectorAll: () => [],
  getElementById: (id) => ({
    value: "",
    innerHTML: "",
    style: {},
    addEventListener: () => {},
    appendChild: () => {},
    getContext: () => ({})
  }),
  createElement: () => ({
    appendChild: () => {},
    style: {},
    classList: { add: () => {} }
  }),
  documentElement: {
    setAttribute: () => {},
    style: { setProperty: () => {}, removeProperty: () => {} }
  }
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};
global.lucide = { createIcons: () => {} };
global.Chart = class { constructor() {} };
global.confirm = () => true;

const scriptCode = fs.readFileSync('app.js', 'utf8');
try {
  eval(scriptCode);
  loadData();
  
  // Call loadDemoData
  loadDemoData();
  console.log("SUCCESS: loadDemoData executed without throwing errors.");
} catch(e) {
  console.error("FAIL: Error in app.js ->", e);
}
