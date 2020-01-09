import {createApp } from "vue";

import App from "./App.vue";
window.app = App;
let root = document.createElement("div");
document.body.append(root);
createApp().mount(App,root)


