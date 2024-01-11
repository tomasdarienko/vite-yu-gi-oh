
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
     <div class="container">
          <div class="row">
               <div class="col-2 p-3">
                    <select id="filter" v-model="store.status">
                         <option value="" selected>select archetype</option>
                    </select>
               </div>
          </div>
     </div>
</template>



<style lang="scss"scoped>
@use '../styles/general.scss' as*;

.col-2 {}
</style>
