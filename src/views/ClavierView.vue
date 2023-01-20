<script>
import ButtonItem from '@/components/ButtonItem.vue';

export default {
  name: 'ClavierView',
  components: {
    ButtonItem
  },
  methods: {
    addDigit(number) {
      if(this.phoneNumber === null) this.phoneNumber = ''
      this.phoneNumber += number.toString()


      this.concurrentContact = {}
      let contact = this.contacts.find(contact => contact.number.startsWith(this.phoneNumber))
      if(contact) this.concurrentContact = contact
      else {
        this.concurrentContact = {firstName: '', lastName:'Unknown', number:this.phoneNumber}
      }
    },
    call() {
      if(!this.concurrentContact) return
      let date = new Date()
      let call = {
        contact: this.concurrentContact,
        timestamp: date.getTime()
      }
      this.$store.state.calls.unshift(call)
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
    getContactName() {
      let contact = this.contacts.find(contact => contact.number.startsWith(this.phoneNumber))
      if(!contact) return 'Unknown'
      return `${contact.firstName} ${contact.lastName}`
    }
  },
  data() {
    return {
      phoneNumber: null,
      currentContact: null
    }
  }
}
</script>

<template>
  <div>

    clavier
    <p class="phoneNumber">{{ phoneNumber ? phoneNumber : '0' }}</p>
    <p>{{ getContactName }}</p>
    <div class="keypad">
      <div>
        <ButtonItem @addDigit="addDigit" v-for="index in 9" :key="index + 1" :number="index + 1"/>
      </div>
      <div>
        <span></span>
        <ButtonItem @addDigit="addDigit" :key="0" :number="1"/>
        <span></span>
      </div>
      <div>
        <span></span>
        <div class="call" @click="call"><font-awesome-icon icon="fa-solid fa-phone" /></div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .phoneNumber {
    user-select: none;
    color: transparent;
  }
  .keypad {

    & > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      place-items: center;
      row-gap: 0.5rem;
      padding: 0 10%;
      margin-bottom: 0.5rem;
    }
    .call {
      color: #fff;
      width: 3rem;
      aspect-ratio: 1/1;
      background: #4cda64;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 1.25rem;
    }
  }
</style>