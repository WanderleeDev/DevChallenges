"use strict";

import Card from "./component/card.js";
import logo from "./component/logo.js";

const App = document.querySelector('#app');

App.innerHTML = Card();
App.insertAdjacentHTML("afterbegin", logo())