<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center" >

      <UsersTopCard  v-for="user in users" :key="user.id" :initial-users="user"></UsersTopCard>
    </div>
    
  </div>
</template>

<script>
  import NavTabs from'../components/NavTabs.vue'
  import UsersTopCard from '../components/UsersTopCard.vue'
  export default {
  components: {
   NavTabs,
   UsersTopCard
  },
  data () {
    return {
      "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
            "isAdmin": true,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRoeKS6jv8OV-D9DsLLQKdkmfEvPug2vaaA&usqp=CAU',
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
            "isAdmin": false,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGQeAjCqny8nx4-3MDJKWGVDg5fXEmEvJPA&usqp=CAU',
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "愛吃柴",
            "email": "user2@example.com",
            "password": "$2a$10$/K8lkPataICsAGGkQs1xlekAns2POnvWkbd51Qw8vKGj/61YhDa8W",
            "isAdmin": false,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OjQfvotfbX61ztER9cD8WujlzWibIAtcRw&usqp=CAU',
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 4,
            "name": "r4",
            "email": "root@example.com",
            "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
            "isAdmin": true,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRoeKS6jv8OV-D9DsLLQKdkmfEvPug2vaaA&usqp=CAU',
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 5,
            "name": "user5",
            "email": "user1@example.com",
            "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
            "isAdmin": false,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGQeAjCqny8nx4-3MDJKWGVDg5fXEmEvJPA&usqp=CAU',
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 6,
            "name": "愛吃柴6",
            "email": "user2@example.com",
            "password": "$2a$10$/K8lkPataICsAGGkQs1xlekAns2POnvWkbd51Qw8vKGj/61YhDa8W",
            "isAdmin": false,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OjQfvotfbX61ztER9cD8WujlzWibIAtcRw&usqp=CAU',
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }, 
    ]
    }
  },
  
}
</script>