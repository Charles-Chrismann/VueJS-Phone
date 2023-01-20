<script>
export default {
  name: 'CallItem',
  props: ['call'],
  methods: {
    
  },
  computed: {
    createDate() {
      console.log(this.call)
      let date = new Date(this.call.timestamp)
      return `${date.getDate() < 10 ? '0' + (date.getDate() + 1) : date.getDate()}/${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    },
    getDateStr() {
      let today = new Date()
      let callDate = new Date(this.call.timestamp)
      console.log(`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`)
      console.log(`${callDate.getDate()}-${callDate.getMonth() + 1}-${callDate.getFullYear()}`)
      // console.log(this.call.timestamp)

      if(`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}` === `${callDate.getDate()}-${callDate.getMonth() + 1}-${callDate.getFullYear()}`) return `${callDate.getHours()}:${callDate.getMinutes() >= 10 ? callDate.getMinutes() : '0' + callDate.getMinutes()}`
      else if (`${today.getDate() - 1}-${today.getMonth() + 1}-${today.getFullYear()}` === `${callDate.getDate()}-${callDate.getMonth() + 1}-${callDate.getFullYear()}`) return 'Hier'
      console.log(callDate)
      console.log((today - callDate) / 86400000)

      let week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      switch(`${callDate.getDate()}-${callDate.getMonth() + 1}-${callDate.getFullYear()}`) {
        case `${today.getDate() - 2}-${today.getMonth() + 1}-${today.getFullYear()}`:
        case `${today.getDate() - 3}-${today.getMonth() + 1}-${today.getFullYear()}`:
        case `${today.getDate() - 4}-${today.getMonth() + 1}-${today.getFullYear()}`:
        case `${today.getDate() - 5}-${today.getMonth() + 1}-${today.getFullYear()}`:
        case `${today.getDate() - 6}-${today.getMonth() + 1}-${today.getFullYear()}`:
          return week[callDate.getDay()]
      }
      

      return `${callDate.getDate() < 10 ? '0' + callDate.getDate() : callDate.getDate()}/${callDate.getMonth() + 1 < 10 ? '0' + (callDate.getMonth() + 1) : callDate.getMonth()}/${callDate.getFullYear()}`
    },
  }
}


</script>

<template lang="">
  <div class="calls__call">
    <div class="icon">
      <font-awesome-icon icon="fa-solid fa-phone" />
    </div>
    <div class="infos">
      <p class="name">{{ call.contact.firstName !== '' ? `${call.contact.firstName} ${call.contact.lastName}` : call.contact.lastName }}</p>
      <p class="number">{{ call.contact.number }}</p>
    </div>
    <div class="date">{{ getDateStr }}</div>
  </div>
</template>

<style lang="scss">
  .calls__call {
    // display: flex;
    width: 100%;
    display: grid;
    grid-template-columns: 12% 1fr auto;
    align-items: center;
    
    .icon {
      // width: 12%;
    }
    
    .infos {
      border-top: solid 1px #ebebec;
      text-align: start;
      padding: 0.375rem 0;

      .name {
        font-size: 0.875rem;
        font-weight: 600;
      }

      .number {
        font-size: 0.625rem;
      }
    }

    .date {
      border-top: solid 1px #ebebec;
      font-size: 0.75rem;
      height: 100%;
      display: grid;
      place-items: center;
      padding-right: 1rem;
    }

    // .date {
    //   border-top: solid 1px #ebebec;
    //   display: flex;
    //   align-items: center;

    //   span {
    //     font-size: 0.75rem;
    //   }
    // }
  }
</style>