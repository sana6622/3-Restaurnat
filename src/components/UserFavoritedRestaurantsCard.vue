<template>
  <div class="card">
    <div class="card-header"><strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳</div>
    <div class="card-body">
      <a href="/restaurants/81" v-for="favoritedRestaurant in favoritedRestaurants" :key="favoritedRestaurant.id" class="my-1 mx-1">
        <img :src="favoritedRestaurant.image" style="width:60px; height:60px" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    favoritedRestaurants:{
      type:Array,
      require:true
    }
  }
}
</script>
