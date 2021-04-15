<template>
  <div class="profilepage w-full">
    <div class="w-full flex justify-center">
      <h1 class="font-semibold text-lg m-3 text-yellow-900">
        ･ ͜ʖ ･🥛 Pungpeee's Profile ˚◞🩰⟢
      </h1>
    </div>
  </div>

  <div class="text-lg w-full flex flex-col items-center justfiy-center">
    <div class="zoom w-1/6 flex justify-center shadow-xl my-10">
      <img :src="img" class="rounded-lg"/>
    </div>
    <base-card class="mt-3 p-4">
      <p>🍭Name : {{ name }}</p>
      <p>🍭Birthday : {{ birth }}</p>
      <p>🍭Youtube : {{ youtube }}</p>
      <p>🍭Facebook : {{ fb }}</p>
    </base-card>
  </div>
</template>
<script>
import BaseCard from "../components/basecard/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      name: "Wanisara Khamracha",
      birth: "19 July 2001",
      youtube: "Pungpeee",
      fb: "Pond Waniizarah",
      img: require("../assets/me.jpg"),
    };
  },
};
</script>

<style scoped>

.zoom {
    transition: transform .2s;
    
  }
  
  .zoom:hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2); 
  }
</style>