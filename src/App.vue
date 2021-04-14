<template>

      <div class="toprightRoute w-full">
    <div class="flex justify-end text-sm">
      <base-card>
    <router-link to="/" class="m-8">Home</router-link>
      </base-card>
  </div>
  </div>

  <div class="midRoute w-full">
    <div class="flex justify-center">
    <router-link to="/profile">Profile</router-link>|
    <router-link to="/subscribe">Subscribe</router-link> 
  </div>
  </div>

  <router-view/>

</template>

<style>
.toprightRoute {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(56, 5, 5);
}
.midRoute {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(56, 5, 5);
}

.toprightRoute {
  background-color: pink;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: red;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

</style>



