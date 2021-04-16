<template>
  <div class="w-full">
    <h2 class="font-semibold text-yellow-900 text-xl flex justify-center m-3">
      ꔛ‧⁺◟Let's subscribe Pungpeee!🌻༘
    </h2>
  </div>

  <div class="ml-5 mt-3">
    <form @submit.prevent="addSubscriber">
      <h2 class="enterName my-2">🌈Enter your name :</h2>
      <div class="mb-3 border-pink-500 rounded-xl shadow p-2 my-2">
        <label class="label" for="name"></label>
        <!-- <input class="input" id="name" type="text"/> -->
        <input v-model="name" placeholder="Enter name here..." />
      </div>

      <h2>🎀How much do you like her ? (Satisfaction level)</h2>
      <div class="border-pink-500 rounded-xl shadow p-2 my-1">
        <div>
          <input
            type="radio"
            name="like"
            id="like-most"
            value="The most!!"
            v-model="like"
          />

          <label class="label" for="like-most">The most!!</label>
        </div>
        <div>
          <input
            type="radio"
            name="like"
            id="like-moderate"
            value="Moderate"
            v-model="like"
          />
          <label class="label" for="like-moderate">Moderate</label>
        </div>
        <div>
          <input
            type="radio"
            name="like"
            id="like-low"
            value="Low"
            v-model="like"
          />
          <label class="label" for="like-low">Low</label>
        </div>
      </div>

      <button
        class="btn rounded-lg p-2 ring-4 ring-pink-200 ring-inset mt-3 hover:bg-yellow-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>


<script>
import axios from "axios";
import BaseCard from "../basecard/BaseCard.vue";
export default {
  components: { BaseCard },
  methods: {
    async addSubscriber() {
      const response = await axios.post("http://localhost:5000/subscribers", {
        name: this.name,
        like: this.like,
      });
    },
  },
  data() {
    return {
      subscriberLists: [],
      like: "",
      name: "",
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:5000/subscribers");
    this.subscriberLists = response.data;
    console.log(response);
  },
};
</script>


