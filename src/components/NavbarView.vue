<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-flex p-2">
      <router-link  class="navbar-brand" to="/">  餐廳評論網 </router-link>
  
      <button
        class="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon" />
      </button>
  
      <div id="navbarSupportedContent" class="navbar-collapse collapse  justify-content-end align-items-center">
        <div class="ml-auto ">
          <!-- is user is admin 如果使用者是管理員才要顯示 -->
          <router-link   to="#" class="text-white me-5 text-decoration-none" v-if="currentUser.isAdmin">
           管理員後台
         </router-link>
      
          <!-- is user is login -->
          <template v-if="isAuthenticated">            
            <router-link :to="{name:'user-view', params:{id:currentUser.id}}" class="text-white me-2 text-decoration-none " > 
             {{currentUser.name || '使用者' }} 您好
           </router-link>
           <button type="button" class="btn btn-sm btn-outline-success my-2 my-sm-0 "> 
            登出
            </button>
        </template>
        </div>
      </div>
    </nav>
  </template>

  <script>
    //模擬一組登入使用者
  const dummyUser = {    
    currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true  //驗證是否正確
}
  export default {
    data () {
        return {
            //預設資料
            currentUser: {
            id: -1,
            name: '',
            email: '',
            image: '',
            isAdmin: false
          },
         isAuthenticated: false  //驗證是否正確
        }
    },
    created () {
        this.fetchUser ()
    },
    methods: {
        fetchUser () {
            this.currentUser = {
                ...this.currentUser,//帶入預設資料
                ...dummyUser.currentUser //帶入API資料
            }
            this.isAuthenticated = dummyUser.isAuthenticated
            
        }
    },
  }
  </script>