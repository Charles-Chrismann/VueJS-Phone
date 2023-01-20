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
  <div class="contacts__comp">
    <div>
      <h2>Contacts</h2>
      <span>
        <router-link to="/addContact"><font-awesome-icon icon="fa-solid fa-plus" /></router-link>
      </span>
    </div>
    <div class="contacts">
      <ContactItem v-for="contact, index in contacts" :key="index" :contact="contact"/>
    </div>

    
  </div>
</template>

<style lang="scss" scoped>
.contacts__comp {
  padding: 0 2%;

  & > :first-child {
    position: relative;
    h2 {
      text-align: start;
    }
    span {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      // color: #377af6;
    }
  }

  .contacts {

  }
}
</style>