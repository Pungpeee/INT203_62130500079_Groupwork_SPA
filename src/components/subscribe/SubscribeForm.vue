<template>
  <div class="w-full">
    <h2 class="font-semibold text-yellow-900 text-xl flex justify-center m-3">
      ꔛ‧⁺◟Let's subscribe Pungpeee!🌻༘
    </h2>
  </div>

  <div class="ml-5 mt-3">
    <form @submit.prevent="subscribeForm">
        <h2 class="enterName">🌈Enter your name :</h2>
        <div class="mb-3 border-pink-500 rounded-xl shadow p-2 my-1">
        <label class="label" for="name"></label>
        <!-- <input class="input" id="name" type="text"/> -->
        <input v-model="message" placeholder="Enter name here..." />
      </div>

      <h2 class="heading">🎀How much do you like her ? (Satisfaction level)</h2>
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
            name="likeg"
            id="like-low"
            value="Low"
            v-model="like"
          />
          <label class="label" for="like-low">Low</label>
        </div>
      </div>
    </form>
  </div>
</template>
