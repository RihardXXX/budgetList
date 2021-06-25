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

const mutations = {
  deteleItemList (state, id) {
    const resultList = [...state.list]
    state.list = resultList.filter(item => item.id !== id)
  },
  addObject (state, payload) {
    const newObject = {...payload, id: Math.random()*100}
    const newList = [...state.list]
    newList.push(newObject)
    state.list = newList
  }
};

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
