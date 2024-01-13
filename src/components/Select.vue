
<script >
import axios from 'axios';
import { store } from '../store';
export default {

     components: {

     },
     data() {
          return {
               store
          }
     },
     methods: {

          getarc() {
               axios.get(store.endpoint).then((response) => {
                    this.store.arc = response.data

                    // console.log(this.store.arc[0].archetype_name)
               })
          },

     },
     created() {
          this.getarc()
     }
}

</script>



<template>
     <div class="container">
          <div class="row">
               <div class="col-2 p-3">

                    <select id="filter" v-model="store.ricerca" @change="$emit('filtra_carte')">
                         <option value="" >select archetype</option>
                         <!-- selected -->
                         <option :value="store.arc[index].archetype_name" v-for="archetype, index in this.store.arc"> {{
                              store.arc[index].archetype_name }} </option>
                    </select>

               </div>
          </div>
     </div>
</template>



<style lang="scss"scoped>
@use '../styles/general.scss' as*;
</style>
