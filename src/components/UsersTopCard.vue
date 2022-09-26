<template>

 
    <div class="col-12 col-sm-6 col-md-4  col-lg-2">
      <router-link :to="{name:'user-view', params:{id:user.id}}" >
          <img :src=user.image style="width:140px">
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge bg-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button  type="button"  class="btn btn-danger" v-on:click="deleteFollow" v-if="user.isFollowed">
            取消追蹤
          </button>
          <button  type="button" class="btn btn-primary"  v-on:click="addFollow" v-else>
            追蹤
          </button>
        </p>
      </div>
    
</template>
<script>
export default {
    props: {
      initialUsers:{
       type:Array,
       require:true
      }
    },
    data () {
        return {
            user:this.initialUsers
        }
    },

    methods: {
    addFollow () {
     this.user={
        ...this.user,
        isFollowed:true,
     }
     
    },
    deleteFollow () {
        this.user = {
          ...this.user,
          isFollowed:false
        }
      },
    }
}
</script>