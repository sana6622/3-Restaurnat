<template>
    <div class="container py-5">
      <NavTabs></NavTabs>
      <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills  v-bind:categories="categories"></RestaurantsNavPills>
    <div class="row">
      <RestaurantsCard v-for="restaurant in restaurants" :key="restaurant.id"
      v-bind:initial-restaurant="restaurant"></RestaurantsCard>
      <!-- 餐廳卡片 RestaurantCard-->
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination :categoryId="categoryId" :totalPage="totalPage" 
      :previousPage="previousPage" :nextPage="nextPage" :currentPage="currentPage"></RestaurantsPagination>
    </div>
  </template>

  <script>
    import NavTabs from'../components/NavTabs.vue'
    import RestaurantsCard from '../components/RestaurantCard.vue'
    import RestaurantsNavPills from '@/components/RestaurantsNavPills.vue'
    import RestaurantsPagination from '@/components/RestaurantsPagination.vue'
    
    const dummyData={      
    "restaurants": [
        {
            "id": 1,
            "name": "大腸麵線",
            "tel": "349-995-8133",
            "address": "99012 Morissette Drive",
            "opening_hours": "08:00",
            "description": "中藥味麵線，全台唯一",
            "image": "https://pic.pimg.tw/minghan118/1463404526-1032913196_n.jpg",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "中式料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Itzel Koss",
            "tel": "(541) 027-2423",
            "address": "6922 Yesenia Ports",
            "opening_hours": "08:00",
            "description": "Quasi architecto eum omnis deleniti. Aspernatur et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.76714763274195",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Davion Ritchie",
            "tel": "548.737.6593 x47686",
            "address": "769 Wolff Loaf",
            "opening_hours": "08:00",
            "description": "Et voluptatibus blanditiis provident possimus a hi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.11919408830559",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Maci Doyle Sr.",
            "tel": "594-319-6496 x30385",
            "address": "8245 Margaret Viaduct",
            "opening_hours": "08:00",
            "description": "nostrum debitis vero",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.80582393779815",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Ebba Nolan",
            "tel": "187-441-5050",
            "address": "0952 Aliyah Stravenue",
            "opening_hours": "08:00",
            "description": "Voluptatem fugit a officiis perferendis. Esse non ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.454187593718984",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Anahi Leffler",
            "tel": "1-547-862-4524 x8297",
            "address": "907 Lizzie Drive",
            "opening_hours": "08:00",
            "description": "Rerum occaecati doloremque cumque sit vel voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.04160652912635",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Rowena Bernhard",
            "tel": "980-054-7990 x3820",
            "address": "0549 Runte Mills",
            "opening_hours": "08:00",
            "description": "Omnis et eos enim aut voluptate. Libero nihil earu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.30171366345894",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Trace Klocko",
            "tel": "(999) 735-2123",
            "address": "3637 Dibbert Hills",
            "opening_hours": "08:00",
            "description": "Vel aspernatur aspernatur nulla et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.812676165982005",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Dane Treutel",
            "tel": "358-663-9443 x39720",
            "address": "5654 Cristopher Park",
            "opening_hours": "08:00",
            "description": "Asperiores unde voluptate aspernatur molestiae max",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.46996162050449",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Martine Emmerich",
            "tel": "994-252-9331",
            "address": "6959 Nigel Crest",
            "opening_hours": "08:00",
            "description": "Inventore sint esse nihil doloribus eaque dolorum ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.570570985433065",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 5
}
    
    
    
    export default {
    components: {
    NavTabs,
    RestaurantsCard,
    RestaurantsNavPills,
    RestaurantsPagination
},
    data () {
     return {
      restaurants: [],
      categories: [],
      categoryId: 0,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
     }
    },
    created () {
     this.fetchRestaurant()
    },
    methods: {
      fetchRestaurant () {
        //this.restaurants={...dummyData.restaurants}
        const{ restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
        this.restaurants = restaurants,
        this.categories = categories,
        this.categoryId = categoryId,
        this.currentPage = page,
        this.totalPage = totalPage,
        this.previousPage = prev,
        this.nextPage = next 
      }
    },
  }
  </script>