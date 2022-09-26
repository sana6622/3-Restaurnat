<template>
    <div class="container py-5">
     
      <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :original-restaurant="restaurant" > </RestaurantDetail>
      <hr>
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments v-bind:restaurantComments="restaurantComments" v-on:after-delete-comment="afterDelectComment"></RestaurantComments>
      <!-- 新增評論 CreateComment -->
      <CreateComment :restaurant-Id="restaurant.id" v-on:after-create-comment="afterCreateComment"></CreateComment>
      
      
    </div>
  </template>

  <script>  
    import RestaurantDetail from '@/components/RestaurantDetail.vue'
    import RestaurantComments from '@/components/RestaurantComments.vue'
    import CreateComment from '@/components/CreateComment.vue'
    import moment from 'moment'
    
   const dummyData = {
        "restaurant": {
        "id": 1,
        "name": "Bryon Reilly",
        "tel": "349-995-8133",
        "address": "99012 Morissette Drive",
        "opening_hours": "08:00",
        "description": "這一家很好吃",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.979683404088515",
        "viewCounts": 1,
        "createdAt": "2022-09-15T10:01:21.000Z",
        "updatedAt": "2022-09-22T14:05:00.823Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
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
    },
    "isFavorited": false,
    "isLiked": false
    }

   const dummyUser = {
     currentUser: {
       id: 1,
       name: '管理者',
       email: 'root@example.com',
       image: 'https://i.pravatar.cc/300',
       isAdmin: true
     },
      isAuthenticated: true
   }
  export default {  

    data (){
        return {
            restaurant:{
              id: 0,
              name: '',
              tel: '',
              address: '',
              opening_hours:'',
              description: '',
              image:'',
              viewCounts:'',       
              CategoryName: '',
              isFavorited: false,
              isLiked: false
            },
            restaurantComments:[],
            currentUser:dummyUser.currentUser
        }
    },
    components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    
},
    created (){
        //取得動態路由
        const restaurantId=this.$route.params.id
        console.log(restaurantId)
        this.fetchRestaurant(restaurantId)
        this.fetchRestaurantComment(restaurantId)
    },
    methods:{
        fetchRestaurant(restaurantId){
            console.log('fetchRestaurnat',restaurantId)            
            const{restaurant,isFavorited,isLiked}=dummyData
            const{id,name,tel,address,opening_hours:openingHours,description,image,Category}=restaurant            
            this.restaurant = {
                id,
                name,
                tel,
                address,
                openingHours,
                description,
                image,
                CategoryName: Category.name ? Category.name : '未分類',
                isFavorited,
                isLiked
            }
          //  this.restaurantComments=dummyData.restaurant.Comments
        },
        fetchRestaurantComment(restaurantId){
            console.log('fetchRestaurnatComment',restaurantId)        
             this.restaurantComments = dummyData.restaurant.Comments.map(item =>{
                return {
                    ...item,
                    fromCreatedAt:moment(item.createdAt.slice(0,10)).fromNow(),
                }
            })          
         },
        //restaurantComments 傳入要刪除的Id
        afterDelectComment (commentId) {
            console.log('afterdelete')
            this.restaurantComments=this.restaurantComments.filter(item=>item.id!==commentId)

        },
        //creatComment 傳入的要新增的內容
        afterCreateComment (data){
            console.log(data)
            const {commentId, restaurantId,text } = data
            this.restaurantComments.push({
                id:commentId,
                restaurantId:restaurantId,
                text:text,
                createdAt:new Date(),
                fromCreatedAt:moment(this.createdAt).fromNow(),
                User:{
                    id:this.currentUser.id,
                    name:this.currentUser.name
                }
            })
        }
    }
  }
  </script>