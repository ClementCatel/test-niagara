const state = ({
  cards: [],
  card: {}
});

const getters = {
  getCardsByTags: (state) => (tags) => {
    if (tags.length < 1) {
      return state.cards
    }
    return state.cards.filter(item => item.tags.some(r=> tags.indexOf(r) >= 0))
  }
};

const mutations = {
  ADD_CARD(state, payload) {
    state.cards.push(payload)
  },

  SET_CARD(state, payload) {
    state.card = Object.assign(state.card, payload)
  },

  RESET_CARD(state) {
    state.card = {}
  }
};

const actions = {
  addCard({ commit, state }) {
    const savedCard = state.card
    commit('ADD_CARD', savedCard)
    commit('RESET_CARD')
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
