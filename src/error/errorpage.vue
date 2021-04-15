<template>
  
    <div class="flex flex-col items-center justify-center">
       <div class="w-1/4 my-8">
       <img src='../assets/error.png'/>
       </div>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          />
        
        <h2 class="text-xl font-semibold text-red-500">
          Sorry, Page not found!
        </h2>
      

      <h3 class="text-black text-sm font-semibold">
        Back to 
        <router-link to="/" class="text-red-800 underline">Home</router-link>
      </h3>
    </div>
 
</template>
