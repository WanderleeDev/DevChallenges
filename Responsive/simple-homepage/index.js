import App from "./src/assets/js/app.js";
import addHtml from "./src/assets/js/utils/addHtml.js";
import addDarkMode from "./src/assets/js/utils/addDarkMode.js";

"use strict";

addHtml('#app', App());
console.log(document.querySelector('#btnDark'));
addDarkMode('#btnDark')
