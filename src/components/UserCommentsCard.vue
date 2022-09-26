<template>
  <div class="card">
    <div class="card-header"><strong>{{comments.length}}</strong> 已評論餐廳</div>
    <div class="card-body d-flex flex-wrap " >
      <a href="/restaurants/91" v-for="comment in comments" :key="comment.id" class="my-1 mx-1" >
        <img :src="comment.Restaurant.image" style="width:60px; height:60px" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments:{
      type:Array,
      require:true
    }
  }
}
</script>