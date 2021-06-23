const state = {
  list: [
    {
      id: 1,
      type: 'income',
      value: 150,
      comment: 'some income comment',
    },
    {
      id: 2,
      type: 'outcome',
      value: -50,
      comment: 'some outcome comment',
    },
  ],
};

const mutations = {};

const actions = {};

const getters = {
  totalBalanceSum() {
    return state.list.reduce((acc, item) => acc + item.value, 0);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
