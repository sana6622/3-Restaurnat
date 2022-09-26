<template>
  <!--
    <div id=app>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</div>
-->
<div class="restaurant-forum ">
  <Navbar></Navbar>
  <main role="main" class="mt-5 bg-white">
    <router-view/>
  </main>
  
</div>

</template>

<script>
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import '../node_modules/bootstrap'; // 在這裡載入 Bootstrap 的 JavaScript 檔
  
  import Navbar from './components/NavbarView.vue';

  export default { 
    components: {
       Navbar
       }
}
</script>


