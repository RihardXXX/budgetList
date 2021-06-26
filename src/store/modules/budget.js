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
  isVisible: false,
  ok: false,
  cancel: false,
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
  },
  isVisibleTrue (state) {
    state.isVisible = true
  },
  isVisibleFalse (state) {
    state.isVisible = false
  },
  ok (state) {
    state.ok = true,
    state.cancel = false
    state.isVisible = false
  },
  cancel (state) {
    state.ok = false,
    state.cancel = true
    state.isVisible = false
  },
  resetOkAndCancel(state) {
    state.ok = false,
    state.cancel = false
    state.isVisible = false
  }
};

const actions = {};

const getters = {
  totalBalanceSum() {
    return state.list.reduce((acc, item) => {
      if (item.type === 'outcome' && item.value > 0) {
        return acc - item.value
      } else if (item.type === 'income' && item.value < 0) {
        return acc - item.value
      } else {
        return acc + item.value
      }
    }, 0);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
