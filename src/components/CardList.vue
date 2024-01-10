<script >

import axios from 'axios';
import { store } from '../store';
import CardCard from './CardCard.vue';
export default {

     components: {
          CardCard
     },

     data() {
          return {
               store
          }
     },


     methods: {
          getcartlist() {
               axios.get(store.endpoint).then((response) => {
                    this.store.cardlist = response.data.data

                    console.log(response.data.data)
                    console.log(store.cardlist[4].card_images[0].image_url)
               })
          }
     },
     created() {
          this.getcartlist()
     }
}
</script>




<template>
     <div class="container">
          <div class="row">
               <CardCard />
          </div>
     </div>
</template>

<style lang="scss"scoped>
@use '../styles/general.scss' as*;


.row{
     background-color: white;
     padding: 20px;
}
</style>