<template>
    <div class="card">
      <div class="card-header">
        最新餐廳
      </div>
      <div class="card-body">

        <div v-for="store in restaurants" :key="store.id">
          <h4>
            <router-link :to="{name:'restaurantMaterial', params:{id:store.id}}" class="text-decoration-none"> {{store.name}} </router-link>            
            <small>{{store.Category.name ? store.Category.name: '未分類'}}</small>
          </h4>
          <p>{{store.description}}</p>{{store.fromCreatedAt}}
          <hr>
        </div>
        
       
        
      </div>
    </div>
  </template>
  
  <script>
  import moment from 'moment';

  export default {
    props: {
        newRestaurant: {
         type: Array,
         require: true
        }
    },
    data (){
      return{
        restaurants:[]
      }
    },
    created () {
     this.fetchRestaurant()
    },
    methods: {
     fetchRestaurant () {
      this.restaurants = this.newRestaurant.map((item) =>{
        return{
          ...item,
          fromCreatedAt:moment(item.createdAt.slice(0,10)).fromNow()
        }
      })
     }
    }
    // 以載入moment 可以使用fromNow() , 將資料讀取進來後，將時間新增進data中，再讓畫面顯示
    
    
  }
  </script>



  <style scoped>
  small {
    font-size: 10px;
  }
  </style>