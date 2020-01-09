import {createApp} from "vue";

import App from "./App.vue";
window.app = App
console.log(App)
let root = document.createElement("div");
document.body.append(root);
createApp().mount(App,root)


