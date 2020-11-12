import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import spaReloader from "spa-reloader-vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(spaReloader, {
  spaReloaderURL: "ws://192.168.1.143:8081"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
