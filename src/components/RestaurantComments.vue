<template>
    <div>
      <h2 class="my-4">
        所有評論：
      </h2>
  
      <div>
        <blockquote class="blockquote mb-4" v-for="comment in restaurantComments" :key="comment.id">
          <button  type="button"  class="btn btn-danger float-end" v-if="currentUser.isAdmin" v-on:click.prevent="handleDeleteButton(comment.id)">
            Delete
          </button>
          <h3>
            <router-link :to="{name:'user-view', params:{id:comment.User.id}}" class="text-decoration-none">{{comment.User.name}}</router-link>
            
          </h3>
          <p>{{comment.text}}</p>
          <footer class="blockquote-footer">
            {{comment.fromCreatedAt}}
          </footer>
          <hr>
        </blockquote>
        
      </div>
    </div>
  </template>

  <script>  
    
    const dummyUser={ 
        currentUser: {
          id: 1,
          name: '管理者',
          email: 'root@example.com',
          image: 'https://i.pravatar.cc/300',
          isAdmin: true
  },
    isAuthenticated: true //是否登陸成功
}


    
  export default {
    props: {
      restaurantComments: {
        type:Array,
        require:true
      }
    },
    data () {
        return {           
            currentUser:dummyUser.currentUser
        }
    },
    
    methods: {        
        handleDeleteButton (commentId) {
          console.log('handleDelete',commentId)
          this.$emit('after-delete-comment',commentId)
        }
    }
    
  }
  </script>