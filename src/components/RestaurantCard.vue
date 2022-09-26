<template>
 <div class="col-md-6 col-lg-4">
  <div class="card mb-4" style="width: 18rem;">
   <img :src="restaurant.image" class="card-img-top" alt="..." style="height:180px">
  <div class="card-body">
    <p class="card-title title-wrap">      
      <router-link :to="{name:'restaurantMaterial', params:{id:restaurant.id}}" class="text-decoration-none"> 
        {{restaurant.name}} 
      </router-link>   
     </p>
     <span class="badge bg-secondary">{{restaurant.Category ?restaurant.Category.name : '未分類'}}</span>
    <p class="card-text text-truncate"> {{restaurant.description}}</p>
  </div>    
    <div class="card-footer " >
          <button type="button"  class="btn btn-danger btn-border favorite me-2 " v-if="restaurant.isFavorited" v-on:click.prevent="deleteFavorite">
            移除最愛
          </button>
          <button type="button"  class="btn btn-primary btn-border favorite me-2" v-else v-on:click.prevent="addFavorite" >
            加到最愛
          </button>
          <button type="button"  class="btn btn-danger like " v-if="restaurant.isLiked" v-on:click.prevent="deleteLike">
            取消讚
          </button>
          <button  type="button"  class="btn btn-primary like  " v-else v-on:click.prevent="addLike">
            讚
          </button>
        </div>
</div>

    </div> 


  </template>

  <script>


  export default {
    props: {
      initialRestaurant: {
        type: Object,
        require:true,
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
      addLike () {
        this.restaurant = {
          ...this.restaurant,
          isLiked:true
        }
      },
      deleteLike () {
        this.restaurant = {
         ...this.restaurant,
         isLiked:false
        }
      }
    },
  }
  </script>