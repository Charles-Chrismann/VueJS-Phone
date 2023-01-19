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
      let date = new Date()
      let call = {
        contact: this.concurrentContact,
        timestamp: date.getTime()
      }
      this.$store.state.calls.push(call)
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
  clavier
  <input type="text" name="" id="" :value="phoneNumber">
  <p>{{ getContactName }}</p>
  <div>
    <ButtonItem @addDigit="addDigit" v-for="index in 10" :key="index" :number="index"/>
  </div>
  <button @click="call">Call</button>
</template>


