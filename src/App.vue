
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
  <body>
    
    <AppHeader />
    <CardList />
  </body>
</template>



<style lang="scss"scoped>
@use '../styles/general.scss' as*;
</style>
