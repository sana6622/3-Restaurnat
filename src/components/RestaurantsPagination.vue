<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <!-- 前一頁 previousPage -->
        <li class="page-item " :class="{disabled:currentPage===1}" >
          <router-link    class="page-link "  aria-label="Previous"  :to="{name:'restaurants',query:{page:previousPage,categoryId}}"   >
            <span aria-hidden="true">&laquo;</span>
        </router-link>
        </li>
  
        <li  v-for="page in totalPage" :key="page" 
        :class="['page-item', { active: currentPage === page }]" >
            <router-link class="page-link" 
            :to="{name:'restaurants', query:{page,categoryId}}"
            >{{page}}</router-link>                     
             
        
        </li>
        
  
        <!-- 後一頁 nextPage -->
        <li class="page-item" :class="{disabled:currentPage===totalPage.length}" >
          <router-link  class="page-link"  aria-label="Next" :to="{name:'restaurants', query:{page:nextPage, categoryId}}" >
            <span aria-hidden="true">&raquo;</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </template>

  <script>


  export default {
    props: {
     totalPage: {
        type:Array,
        require:true
     },
     currentPage: {
       type:Number,
       default:1 //預設
     },
     previousPage:{
        type:Number,
        require:true
     }, 
     nextPage:{
        type:Number,
        require:true
     },
     categoryId:{
        type:[Number,String], //number 或 string 都可以
        require:true
     }
    }
  }
  </script>