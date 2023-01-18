import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        firstName: 'Charles',
        lastName: 'Chrismann',
        number: '0612345678'
      }
    ],
    phoneCalls: [
      {
        firstName: 'Charles',
        lastName: 'Chrismann',
        number: '0612345678',
        timestamp: 1674060414759
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
