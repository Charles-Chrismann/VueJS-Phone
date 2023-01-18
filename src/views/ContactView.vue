<script>
import ContactItem from '@/components/ContactItem.vue';

export default {
  name: 'ContactView',
  components: {
    ContactItem
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  }
}
</script>

<template lang="">
  <div>
    Contact
    <div>
      <ContactItem v-for="contact, index in contacts" :key="index" :contact="contact"/>
    </div>

    <router-link to="/addContact">Add Contact</router-link>
  </div>
</template>

<style lang="">
  
</style>