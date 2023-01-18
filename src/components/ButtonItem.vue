<script>
export default {
  name: 'ButtonItem',
  props: ['number'],
  methods: {
  }
}


</script>

<template lang="">
  <div @click="$emit('addDigit', number - 1)">
    {{ number - 1 }}
  </div>
</template>

<style lang="">
  
</style>