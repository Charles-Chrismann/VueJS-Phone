import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        firstName: 'Charles',
        lastName: 'Chrismann',
        number: '0612345678'
      },
      {
        firstName: 'Tom',
        lastName: 'Tamen',
        number: '1234'
      }
    ],
    calls: [
      {
        contact: {
          firstName: 'Charles',
          lastName: 'Chrismann',
          number: '0612345678'
        },
        timestamp: 1674084173298 
      }
    ]
  },
  getters: {
  },
  mutations: {
    call(state, call) {
      state.calls.push(call)
    }
  },
  actions: {
  },
  modules: {
  }
})
