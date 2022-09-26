<template>
    <ul class="nav nav-pills mb-4">
        <li class="nav-item">
            <router-link  :to="{name:'restaurants'}"   class="nav-link" :class="{active:this.$route.fullPath==='/restaurants'}">
                全部
            </router-link>
        </li>
        <li class="nav-item" v-for="category in categorynew" :key="category.id">          
          
            <router-link class="nav-link" :to="{name:'restaurants', query:{categoryId:category.id}}" 
             :class="{active:category.id.toString()===this.$route.query.categoryId}">
             {{category.name}} </router-link> 
      
            
        </li>
    </ul>

    
</template>

<script>
export default {
    props:{
        categories:{
            type:Array,
            require:true,
        }
    },
    data ( ){
        return {
            categorynew:this.categories
        }

    },
    methods:{
        findClick(e){
            console.log(e.target)
            console.log(this.$route.query.categoryId)
            console.log()
           
        }
    }
}
</script>
<style scoped>
    .actvie a{
       background-color:pink;
    }
</style>