<script >

import axios from 'axios';
import { store } from '../store';
import CardCard from './CardCard.vue';
import Select from './Select.vue';
export default {

     components: {
          CardCard,
          Select
     },

     props: ['filtro'],

     data() {
          return {
               store
          }
     },


     methods: {


          filtracarte() {
               console.log(store.ricerca)
               this.getcartlist()
          },


          getcartlist() {

               
               
               // let api =store.endpoint_1
               
               if(store.ricerca !== ""){
                    store.endpoint_1+=`&archetype=${store.ricerca}`
               }
               axios.get(store.endpoint_1).then((response) => {
                    this.store.cardlist = response.data.data

                    // console.log(response.data.data)
                    // console.log(store.cardlist[4].card_images[0].image_url)
               })

          },

     },
     created() {
          this.getcartlist()
     }
}
</script>




<template>
     <div class="container">
          <div class="row">

               <Select   @filtra_carte="filtracarte" />          
               <CardCard />
          </div>
     </div>
</template>

<style lang="scss"scoped>
@use '../styles/general.scss' as*;


.row {
     background-color: white;
     padding: 20px;
     padding-left: 60px;
}
</style>