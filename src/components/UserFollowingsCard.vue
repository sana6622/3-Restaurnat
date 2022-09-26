<template>
  <div class="card">
    <div class="card-header"><strong>{{followings.length}}</strong> followings (追蹤者)</div>
    <div class="card-body">
      <a href="/users/3" v-for="following in followings" :key="following.id" class="my-1 mx-1">
       <img :src="following.image" style="width:60px; height:60px" class="avatar" />
      </a>      
      
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      followings:{
        type:Array,
        require:true
      }
    }
  }
  </script>
