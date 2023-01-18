<script>
import CallItem from '@/components/CallItem.vue';
export default {
  name: 'JournalView',
  components: {
    CallItem
  },
  computed: {
    calls() {
      return this.$store.state.calls
    }
  }
}
</script>


<template>
  <div class="home">
    Journal

    <div>
      <CallItem v-for="call, index in calls" :key="index" :call="call"/>
    </div>
  </div>
</template>

