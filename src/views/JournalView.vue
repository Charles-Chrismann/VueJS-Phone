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
  <div class="recents">
    
    <h2>Journal</h2>

    <div class="calls">
      <CallItem v-for="call, index in calls" :key="index" :call="call"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recents {
  display: grid;
  grid-template-rows: auto 1fr;
  h2 {
    text-align: start;
    margin-left: 12%;
  }

  .calls {
    overflow: hidden auto;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: thin;  /* Firefox */
    
     /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      // display: none;
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: #cdcdcd;

    }

    
  }
}
</style>