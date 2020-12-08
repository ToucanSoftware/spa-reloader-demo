import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {
      created_at: null,
      namespace: "",
      name: "",
      current_image: {
        sha256: "",
        name: ""
      },
      previous_image: {
        sha256: "",
        name: ""
      }
    }
  },
  mutations: {
    SPA_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {},
  modules: {}
});
