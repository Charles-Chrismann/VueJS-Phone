<script>
export default {
  name: 'ContactItem',
  props: ['contact'],
  methods: {
    call() {
      console.log(this.contact.firstName)
      let date = new Date()
      this.$store.commit('call', { contact:this.contact, timestamp:date.getTime() })
    }
  }
}


</script>

<template lang="">
  <div>
    
    {{ contact.firstName }}
    <button @click="call()">Call</button>
  </div>
</template>

<style lang="">
  
</style>