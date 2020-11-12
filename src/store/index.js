import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {
      created_at: null,
      namespace: "",
      name: "",
      image: "",
      sha256: "",
    },
  },
  mutations: {
    SPA_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {},
  modules: {},
});
