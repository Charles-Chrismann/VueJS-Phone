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
          lastName: '19',
          number: '0612345678'
        },
        timestamp: 1674084173298 
      },
      {
        contact: {
          firstName: 'Charles',
          lastName: '18',
          number: '0612345678'
        },
        timestamp: 1674004173298 
      },
      {
        contact: {
          firstName: 'Charles',
          lastName: '14',
          number: '0612345678'
        },
        timestamp: 1673700173298 
      },
      {
        contact: {
          firstName: 'Charles',
          lastName: '12',
          number: '0612345678'
        },
        timestamp: 1673500173298 
      },
      {
        contact: {
          firstName: 'Charles',
          lastName: '2',
          number: '0612345678'
        },
        timestamp: 1672700173298 
      },
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
