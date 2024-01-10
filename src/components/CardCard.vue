
<script >

import { store } from '../store';
export default {

  components: {

  },
  data() {
          return {
               store
          }
     },
  }

</script>



<template>
    
          <div class="col-3" v-for="card, index in store.cardlist">
                    
                    <img :src="store.cardlist[index].card_images[0].image_url" class="img-fluid">
                    {{ store.cardlist[index].name }}
                    {{ store.cardlist[index].archetype }}
               </div>

</template>



<style lang="scss"scoped>
@use '../styles/general.scss' as*;
</style>
