<script>
export default {
  name: 'ButtonItem',
  props: ['number'],
  methods: {
  }
}


</script>

<template lang="">
  <div class="keypad__button" @click="$emit('addDigit', number - 1)">
    {{ number - 1 }}
  </div>
</template>

<style lang="scss" scoped>
  .keypad__button {
    width: 3rem;
    aspect-ratio: 1/1;
    background: #e5e5e5;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 1.25rem;
    cursor: pointer;

    &:hover {
      background: #d5d5d5;
    }
  }
</style>