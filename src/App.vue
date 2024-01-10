
<script >
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
import { store } from './store';

export default {

  components: {
    AppHeader,
    CardList
  },
  data() {
    return {
      store
    }
  }
}
</script>



<template>
  <div>
    
    <AppHeader />
    <CardList />
  </div>
</template>



<style lang="scss"scoped>
</style>
