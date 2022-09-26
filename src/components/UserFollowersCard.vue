<template>
  <div class="card">
    <div class="card-header"><strong>{{followers.length}}</strong> followers (追隨者)</div>
    <div class="card-body">
      <a href="/users/11" v-for="follower in followers" :key="follower.id" class="my-1 mx-1">
        <img :src="follower.image" style="width:60px; height:60px" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      followers:{
        type:Array,
        require:true
      }
    }
  }
  </script>