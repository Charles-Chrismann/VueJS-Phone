<script>
export default {
  name: 'contactSingle',
  data() {
    return {
      contactId: this.$route.params.id
    }
  },
  computed: {
    contact() {
      return this.$store.state.contacts[this.contactId]
    }
  }
}
</script>
<template lang="">
  <div class="contactSingle">
    <img :src="contact.profilePicture ? contact.profilePicture : `https://ui-avatars.com/api/?background=242424&color=42D392&name=${contact.firstName !== '' ? contact.firstName[0] : ''}${contact.lastName !== '' ? contact.lastName[0] : ''}&size=256`" alt="" class="pp">
    <h4>{{ contact.firstName ? ' ' + contact.firstName : '' }}{{ contact.lastName ? ' ' + contact.lastName : '' }}</h4>
    <p>{{ contact.number }}</p>
  </div>
</template>
<style lang="scss">
  .contactSingle {

    .pp {
      width: 30%;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      overflow: hidden;
      margin: 10% 0;
    }
  }
</style>