import App from "/assets/js/app.js";
import addHtml from "/assets/js/utils/addHtml.js";
import addListener from "./assets/js/utils/addListener.js";
import btnHandler from "./assets/js/utils/listener/addDarkMode.js";
import showMenuMobile from "./assets/js/utils/listener/showMenuMobile.js";

"use strict";

addHtml('#app', App());
addListener('#btnDark', btnHandler)
addListener('#btnMobile', showMenuMobile)