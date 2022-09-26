<template>
  
    <div class="card mb-3 ">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="user.image" style="width:300px, height:300px"  />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.email}}</p>
            <ul class="list-unstyled list-inline">
              <li><strong>{{user.CommentsNum}}</strong> 已評論餐廳</li>
              <li><strong>{{user.FavoritedRestaurantsNun}}</strong> 收藏的餐廳</li>
              <li><strong>{{user.FollowersNum}}</strong> followings (追蹤者)</li>
              <li><strong>{{user.FollowingsNUm}}</strong> followers (追隨者)</li>
            </ul>
            <p></p>
           <!--<form action="/following/1" method="POST" style="display: contents">
             </form>-->
           
            <div v-if="currentUser.id===user.id">
              <button type="button" class="btn btn-primary">Edit</button>
            </div>
            <div v-else>
              <button type="button" class="btn btn-primary" v-on:click.prevent="addFollowed " v-if="!user.isFollowed">追蹤</button>
              <button type="button" class="btn btn-danger" v-on:click.prevent="deleteFollowed" v-else>取消追蹤</button>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  props:{
    initialUser:{
      type:Array,
      require:true
    },
    currentUser:{
      type:Array,
      require:true
    }
  },
  data () {
    return {
      user:{}
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser (){
      this.user ={...this.initialUser} 
    },
    addFollowed () {
      console.log('ok')
      this.user = {
        ...this.user,
        isFollowed:true
      }
     
    },
    deleteFollowed () {
      console.log('false')
      this.user = {
        ...this.user,
        isFollowed:false
      }
    
    }

  },
}
</script>