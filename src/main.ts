import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import SpaReloaderVue, { SpaReloaderOptions } from "spa-reloader-vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const options: SpaReloaderOptions = {
  spaReloaderURL: "ws://" + location.hostname + "/ws"
};

Vue.use(SpaReloaderVue, options);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
