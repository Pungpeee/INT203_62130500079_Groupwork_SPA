<template>
  <div class="w-full">
    <div class="toprightRoute flex justify-end text-sm">
      <hover-click>
        <router-link to="/" class="m-8">Home</router-link>  
      </hover-click>
    </div>
  </div>
  <div class="midRoute w-full">
    <div class="flex justify-center">
      <hover-click>
        <router-link to="/profile">Profile</router-link>
      </hover-click>
      |
      <hover-click>
        <router-link to="/subscribe">Subscribe</router-link>
      </hover-click>
    </div>
  </div>

  <router-view />
</template>

<style>
.toprightRoute {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(56, 5, 5);
}
.midRoute {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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



