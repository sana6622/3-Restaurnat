<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr> 
       <TopCard v-for="restaurant in restaurants" :key="restaurant.id"
         :initialRestaurant="restaurant"></TopCard>
   </div>
</template>

<script>
  const dummyData={
    "restaurants": [
        {
            "id": 50,
            "name": "Declan Gaylord",
            "tel": "026.190.1101 x5774",
            "address": "670 Veronica Locks",
            "opening_hours": "08:00",
            "description": "Accusantium voluptatem sint.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.14376164502826",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Alexandre Hyatt",
            "tel": "(767) 136-9948 x94361",
            "address": "040 Marvin Orchard",
            "opening_hours": "08:00",
            "description": "Unde facilis et voluptatibus veritatis libero. Ab ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.65222919370858",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Winifred McClure",
            "tel": "206.743.9865 x077",
            "address": "24909 Rosenbaum Wall",
            "opening_hours": "08:00",
            "description": "Nobis quia voluptate modi laboriosam. Aliquam enim",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.954292975035976",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Sammie Armstrong",
            "tel": "(367) 740-1906 x39613",
            "address": "638 Bins Radial",
            "opening_hours": "08:00",
            "description": "voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.632052999893965",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Verlie Wehner",
            "tel": "898.171.4635 x39452",
            "address": "9862 Gleichner River",
            "opening_hours": "08:00",
            "description": "hic",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.34936518631531",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Karlee Hammes",
            "tel": "(185) 878-8298 x1467",
            "address": "688 Rath Dale",
            "opening_hours": "08:00",
            "description": "non",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.83036958646267",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Amina Hayes",
            "tel": "655-885-3475",
            "address": "10343 Breitenberg Fords",
            "opening_hours": "08:00",
            "description": "Deleniti qui at voluptas est tempore autem ipsam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.42032455212609",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Sherwood Nienow",
            "tel": "1-098-486-9892",
            "address": "55330 Sedrick Views",
            "opening_hours": "08:00",
            "description": "id sed itaque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.98958301672474",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Dr. Reuben Ziemann",
            "tel": "486.163.7339",
            "address": "28637 Mike Roads",
            "opening_hours": "08:00",
            "description": "Dolores molestias rerum. Qui nulla ut eveniet dict",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.72225695745082",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Gina Reichert",
            "tel": "575-339-6206",
            "address": "751 Waters Village",
            "opening_hours": "08:00",
            "description": "Aut facere id quo reprehenderit impedit aspernatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.53293356417868",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
  }
    import NavTabs from'../components/NavTabs.vue'
    import TopCard from'../components/TopCard.vue'


  export default {
      components: {
    NavTabs,
    TopCard,   
   },
      data () {
        return {
          restaurants:dummyData.restaurants
        }
      },
    
  }
  </script>