<template>
    <div class="container py-5">
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge bg-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
  
      <hr>
  
      <ul>
        <li>評論數： {{ restaurant.commentsLength }} </li>
        <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
      </ul>
  
      <button type="button" class="btn btn-link text-decoration-none"
        @click="$router.back()" >
        回上一頁
      </button>
    </div>
  </template>

  <script>
    const dummyData={
      "restaurant": {
        "id": 1,
        "name": "Bryon Reilly",
        "tel": "349-995-8133",
        "address": "99012 Morissette Drive",
        "opening_hours": "08:00",
        "description": "cum",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.979683404088515",
        "viewCounts": 1,
        "createdAt": "2022-09-15T10:01:21.000Z",
        "updatedAt": "2022-09-22T14:05:00.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Autem facere exercitationem inventore repudiandae cumque placeat.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-15T10:01:21.000Z",
                    "updatedAt": "2022-09-15T10:01:21.000Z"
                }
            },
            {
                "id": 51,
                "text": "Est vel vel voluptatem quae recusandae non.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-15T10:01:21.000Z",
                    "updatedAt": "2022-09-15T10:01:21.000Z"
                }
            },
            {
                "id": 101,
                "text": "Minima rerum dolores tempora libero in inventore dolorum accusantium.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$/K8lkPataICsAGGkQs1xlekAns2POnvWkbd51Qw8vKGj/61YhDa8W",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-15T10:01:21.000Z",
                    "updatedAt": "2022-09-15T10:01:21.000Z"
                }
            }
        ]
      }
    }
  export default { 
    data () {
      return {
        restaurant:{
            id:0,
            name:'',
            viewCounts:1,
            categoryName:'',
            commentsLength:0
        },       
      }
    },
    created () {
        const { id: restaurantId } = this.$route.params //待解 無法抓到網址的id  (網址的id無法抓到正確的id號碼)      
        this.fetchRestaurant(restaurantId)

    },    
    methods:{
        fetchRestaurant(restaurantId){
            console.log('fetchRestaurnat',restaurantId)            
            const{restaurant} = dummyData
            const{id,name,viewCounts,Category,Comments} = restaurant            
            this.restaurant = {
                id,
                name,      
                viewCounts,     
                categoryName: Category.name ? Category.name : '未分類',
                commentsLength:Comments.length
            }         
        }
    }
  }
  </script>