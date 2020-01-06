import {createApp} from "vue";

import App from "./App.vue";

console.log(App);
let root = document.createElement("div")
document.body.append(root)
createApp().mount(App,root)

