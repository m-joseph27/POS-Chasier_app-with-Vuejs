import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    selectedItem: [],
    total: 0,
    message: '',
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
    INCEREMENT(state, data) {
      const items = state.selectedItem.find((item) => item.item.id_menu === data.item.id_menu);
      if (items) {
        items.count += 1;
      }
    },
    DECEREMENT(state, data) {
      const items = state.selectedItem.find((item) => item.item.id_menu === data.item.id_menu);
      if (items) {
        if (items.count <= 1) {
          state.selectedItem = state.selectedItem.filter((item) => item !== items);
        } else {
          items.count -= 1;
        }
      }
    },
    MSG(state, error) {
      state.message = error;
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
  ADDPRODUCT(context, data) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.VUE_APP_URL}menu`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          console.log(error);
          context.commit('MSG', error.response.data.err);
        });
    });
  },

  getters: {
    countCart: (state) => state.selectedItem.length,
  },

});
