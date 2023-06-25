import modular from "modujs";
import * as modules from "./modules";
import { html } from "./utils/environment";
import "./style.css";

const app = new modular({
  modules: modules,
});

window.onload = (event) => {
  const $style = document.getElementById("main-css");

  if ($style) {
    if ($style.isLoaded) {
      init();
    } else {
      $style.addEventListener("load", (event) => {
        init();
      });
    }
  } else {
    console.warn('The "main-css" stylesheet not found');
  }
};

function init() {
  app.init(app);

  html.classList.add("is-loaded");
  html.classList.add("is-ready");
  html.classList.remove("is-loading");
  console.log(
    "%c%s",
    "padding: 6px; color: #fff; background: #000;",
    "Made by Nick — https://t.me/nickxsy"
  );
}
