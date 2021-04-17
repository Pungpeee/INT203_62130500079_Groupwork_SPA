<template>
  <div class="w-full">
    <h2 class="font-semibold text-yellow-900 text-xl flex justify-center m-3">
      ꔛ‧⁺◟Let's subscribe Pungpeee!🌻༘
    </h2>
  </div>

  <div class="ml-5 mt-3">
    <form @submit.prevent="submitForm">
      <h2 class="enterName my-2">🌈Enter your name :</h2>
      <div class="mb-3 border-pink-500 rounded-xl shadow p-2 my-2">
        <label class="label" for="name"></label>
        <!-- <input class="input" id="name" type="text"/> -->
        <input v-model="name" placeholder="Enter name here..." />
      </div>
      <p v-if="inputName" class="text-red-500">Please enter your name! 🥺</p>

      <h2>🎀How much do you like her ? (Satisfaction level)</h2>
      <div class="border-pink-500 rounded-xl shadow p-2 my-1">
        <div>
          <input
            type="radio"
            name="like"
            id="like-most"
            value="the most!!"
            v-model="like"
          />

          <label class="label" for="like-most">the most!!</label>
        </div>
        <div>
          <input
            type="radio"
            name="like"
            id="like-moderate"
            value="moderate"
            v-model="like"
          />
          <label class="label" for="like-moderate">moderate</label>
        </div>
        <div>
          <input
            type="radio"
            name="like"
            id="like-low"
            value="low"
            v-model="like"
          />
          <label class="label" for="like-low">low</label>
        </div>
      </div>
      <p v-if="inputLike" class="text-red-500">Please enter in form! 🥺</p>
      <button
        class="btn rounded-lg p-2 ring-4 ring-pink-200 ring-inset mt-3 hover:bg-yellow-100"
        type="submit"
      >
        Submit
      </button>

      <!-- <button
        class="btn rounded-lg p-2 ring-4 ring-pink-200 ring-inset mt-3 hover:bg-yellow-100"
        v-else
      >
        edit
      </button> -->
    </form>
    <div>
      <subscriber
        v-for="list in subscriberLists"
        :key="list.id"
        :name="list.name"
        :like="list.like"
        :id="list.id"
        @editevent="updateEdit"
        @deleteevent="deleteForm"
      ></subscriber>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Subscriber from "./Subscriber.vue";
export default {
  components: {
    Subscriber,
  },
  methods: {
    async addSubscriber() {
      try {
        await axios.post("http://localhost:5000/subscribers", {
          name: this.name,
          like: this.like,
        });
        this.subscriberLists.push({
          name: this.name,
          like: this.like,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async edit(editingData) {
     try {
      this.isEdit = true;
      this.name = editingData.name;
      this.like = editingData.like;
      this.editingID = editingData.id;

      const response = await axios.put(
        `http://localhost:5000/subscribers/${this.editingID}`,
        {
          name: this.name,
          like: this.like,
        }
      );

      const data = response.data;
      this.subscriberLists = this.subscriberLists.map((list) =>
        list.id === editingData.id
          ? { ...list, name: data.name, like: data.like }
          : list
      );
      this.isEdit = false;
      this.editingID = "";
      this.name = "";
      this.like = null;
     } catch (error) {
        console.log(error);
      }
    },
    async getSubscriberLists() {
      try {
        const response = await fetch("http://localhost:5000/subscribers");
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
    async deleteForm(deleted) {
      try {
        await fetch(`http://localhost:5000/subscribers/${deleted.id}`, {
          method: "DELETE",
        });

        this.subscriberLists = this.subscriberLists.filter(
          (list) => list.id !== deleted.id
        );
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },

    updateEdit(oldData) {
      this.isEdit = true;
      this.editingID = oldData.id;
      this.name = oldData.name;
      this.like = oldData.like;
    },

    submitForm() {
      this.inputName = this.name === "" ? true : false;
      this.inputLike = this.like === "" ? true : false;
      if (this.name === "" || this.like === "") {
        return;
      }
      if (this.isEdit) {
        this.edit({
          id: this.editingID,
          name: this.name,
          like: this.like,
        });
      } else {
        this.addSubscriber();
      }
    },
  },
  data() {
    return {
      subscriberLists: [],
      like: "",
      name: "",
      inputName: false,
      inputLike: false,
      isEdit: false,
      editingID: -1,
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:5000/subscribers");
    this.subscriberLists = response.data;
    console.log(response);
  },
};
</script>

