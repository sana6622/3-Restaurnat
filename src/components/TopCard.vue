<template>
<div class="card mb-2"  style="max-width: 540px;margin: auto;" >
  <div class="row no-gutters">        
     <div class="col-md-4">
          <a href="#">
            <img  class="card-img" :src="restaurant.image" >
          </a>
     </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge bg-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
             {{restaurant.description}}
            </p>
            <a  href="#"  class="btn btn-primary me-2" >Show</a>

            <button type="button" class="btn btn-danger me-2"  v-if="restaurant.isFavorited" v-on:click.prevent="deleteFavorite">
              移除最愛
            </button>
            <button  type="button" class="btn btn-primary"  v-else v-on:click.prevent="addFavorite">
              加到最愛
            </button>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        initialRestaurant:{
            type:Object,
            require:true
        }
    },
    data () {
      return {
        restaurant :this.initialRestaurant
      }
    },
    methods: {
      addFavorite () {
        this.restaurant = {
          ...this.restaurant,
          isFavorited:true
        }
      },
      deleteFavorite () {
        this.restaurant = {
         ...this.restaurant,
         isFavorited:false
        }
      },
      
    }
}
</script>