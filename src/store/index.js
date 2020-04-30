import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedItem: [],
  },
  mutations: {
    selectedItem(state, item) {
      state.selectedItem.push(item);
    },
  },
  actions: {
  },
  modules: {
  },
});
