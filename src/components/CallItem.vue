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
    }
  }
}


</script>

<template lang="">
  <div>
    {{ call.contact ? `${call.contact.firstName} ${call.contact.lastName}` : 'Unknown' }} {{ call.contact.number }} {{ createDate }}
  </div>
</template>

<style lang="">
  
</style>