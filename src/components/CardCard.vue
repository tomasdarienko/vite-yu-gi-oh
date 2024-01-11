
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
     <div class="col-2 p-2 m-3" v-for="card, index in store.cardlist">

          <img :src="store.cardlist[index].card_images[0].image_url" class="img-fluid">
          <h5>{{ store.cardlist[index].name }}</h5>
          <p>{{ store.cardlist[index].archetype }}</p>
     </div>
</template>



<style lang="scss"scoped>
@use '../styles/general.scss' as*;

.col-2 {
     background-color: orange;

     h5 {
          text-transform: uppercase;
          color: white;
          text-align: center;
     }

     p {
          text-align: center;
          margin-top: 20px;
     }
}
</style>
