
<template>
 <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge bg-secondary mt-1 mb-3">
      {{restaurant.CategoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" :src="restaurant.image"  style="width: 250px;margin-bottom: 25px;" >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{restaurant.description}} </p>
      <router-link :to="{name:'restaurantDashboard', params:{id:restaurant.id}}" class="btn btn-primary btn-border me-2"  >Dashboard</router-link>

      <button  type="button"  class="btn btn-danger btn-border me-2"  v-on:click="deleteFavorite" v-if="restaurant.isFavorited">
        移除最愛
      </button>
      <button  type="button"  class="btn btn-primary btn-border me-2" v-on:click="addFavorite" v-else>
        加到最愛
      </button>
      <button type="button"  class="btn btn-danger like me-2" v-on:click="deleteLike" v-if="restaurant.isLiked">
        取消讚
      </button>
      <button  type="button"   class="btn btn-primary like me-2" @click="addLike" v-else>
        讚
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        originalRestaurant:{
                type:Array,
                require:true
            },
            
    },
    data () {
        return {
            restaurant:this.originalRestaurant     
            
        }
    },
   methods:{
    addFavorite () {
     this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
     }
    },
    deleteFavorite () {
     this.restaurant = {
        ...this.restaurant,
        isFavorited: false
     }
    },
    addLike () {
     this.restaurant = {
        ...this.restaurant,
        isLiked: true,
     }
    },
    deleteLike () {
     this.restaurant = {
        ...this.restaurant,
        isLiked: false
     }
    }
   }
}
</script>