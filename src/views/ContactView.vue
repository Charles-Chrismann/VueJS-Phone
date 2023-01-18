<script>
export default {
  name: 'ContactView',
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
    a{{ this.contacts }}a
    <div>
      <div v-for="contact, index in contacts" :key="index">
        alor
      {{ contact.firstName }}
      </div>
    </div>

    <router-link to="/addContact">Journal</router-link>
  </div>
</template>

<style lang="">
  
</style>