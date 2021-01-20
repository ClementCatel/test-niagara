import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cards from "./cards";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 1,
    tags: [
      {
        title: 'logistique',
        color: 'blue'
      },
      {
        title: 'production',
        color: 'red'
      },
      {
        title: 'qualité',
        color: 'green'
      },
      {
        title: 'maintenance',
        color: 'orange'
      }
    ],
  },

  mutations: {
    SET_CURRENT_STEP(state, payload) {
      state.currentStep = payload
    }
  },

  actions: {
  },

  modules: {
    cards
  },

  plugins: [createPersistedState(
    {
      paths:['cards.cards'],
    }
  )]
})
