<template>
    <div class="card">
      <div class="card-header">
        最新評論
      </div>
      <div class="card-body" >
        
        <div v-for="comment in comments" :key="comment.id">
          <h4>
            <router-link :to="{name:'restaurantMaterial', params:{id:comment.Restaurant.id}}" class="text-decoration-none"> {{comment.Restaurant.name}} </router-link>
         </h4>
          <p>{{comment.text}}</p>by
          <router-link :to="{name:'user-view', params:{id:comment.User.id}}" class="text-decoration-none">{{comment.User.name}}
          </router-link>
          
          {{comment.fromCreatedAt}}
          
          <hr>
        </div>
  
        
  

      </div>
    </div>
  </template>

  <script>
    import moment from 'moment'

  export default {
    props: {
      commentRestaurant: {
         type: Array,
         require: true
        }
    },
    data (){
      return{
        comments:[]
      }
    },
   created () {
    this.fetchComment()
   },
   methods: {
      fetchComment (){
       this.comments = this.commentRestaurant.map( (item) => {
       return{
         ...item,
        fromCreatedAt:moment(item.createdAt.slice(0,10)).fromNow()
      }})
      }
    },
  }
  </script>