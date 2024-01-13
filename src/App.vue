
<script >
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
// import Select from './components/Select.vue';
import { store } from './store';

export default {

  components: {
    
    AppHeader,
    CardList,
    // Select
  },
  data() {
    return {
      store
    }
  },
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
