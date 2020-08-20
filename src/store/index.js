import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    selectedItem: [],
  },

  mutations: {
    selectedItem(state, { item, count }) {
      const items = state.selectedItem
        .find((clicked) => clicked.item.id_menu === item.id_menu);
      if (!items) {
        state.selectedItem.push({ item, count });
      }
    },
    MENU(state, data) {
      state.menu = data;
    },
  },

  actions: {
    GETMENU(context) {
      axios
        .get(`${process.env.VUE_APP_URL}menu`)
        .then((res) => {
          context.commit('MENU', res.data.result);
        });
    },
  },

  getters: {
    countCart: (state) => state.selectedItem.length,
  },

});
