<script>
export default {
  name: 'ContactItem',
  props: ['contact', 'id'],
  methods: {
    call() {
      console.log(this.contact.firstName)
      let date = new Date()
      this.$store.commit('call', { contact:this.contact, timestamp:date.getTime() })
    }
  },
  computed: {
    route() {
      return 'contacts/' + this.id
    }
  }
}


</script>

<template lang="">
  <div class="contacts__contact">
    
    {{ contact.firstName ? ' ' + contact.firstName : '' }}{{ contact.lastName ? ' ' + contact.lastName : '' }}
    <router-link :to="route"><div class="overlay"></div></router-link>
    <span @click="call()"><font-awesome-icon icon="fa-solid fa-phone" /></span>
  </div>
</template>

<style lang="scss" scoped>
  .contacts__contact {
    position: relative;
    width: 100%;
    border-top: solid 1px #ebebec;
    text-align: start;
    font-weight: 600;
    padding: 0.375rem 0;

    .overlay {
      position: absolute;
      inset: 0;

      &:hover {
        background: #d5d5d540;
      }
    }

    & > span {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      cursor: pointer;

      &:hover {
        color: #4cda64;
      }
    }
  }
</style>