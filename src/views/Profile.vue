<template>
  <div class="profilepage w-full">
    <div class="w-full flex justify-center">
      <h1 class="font-semibold text-lg m-3 text-yellow-900">
        ･ ͜ʖ ･🥛 Pungpeee's Profile ˚◞🩰⟢
      </h1>
    </div>
  </div>

  <div class="text-lg w-full flex flex-col items-center justfiy-center">
    <div class="w-80 flex justify-center ">
      <img :src="img"/>
    </div>
    <base-card class="mt-3">
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
