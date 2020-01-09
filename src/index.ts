import {createApp } from "vue";

import App from "./App.vue";
console.log(App);
let root = document.createElement("div");
let a = createApp().mount(App,root)
console.log(a);


