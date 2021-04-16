<template>
  <h1>{{ name }} <i class="far fa-edit" @click="editbtn"></i></h1>
  <h1>{{ like }}</h1>
</template>

<script>
export default {
  name: "Subscribers",
  props: ["name", "like", "id"],
  
  methods: {
    editbtn() {
      this.$emit("editevent", {
        name: this.name,
        like: this.like,
        id: this.id,
      });
    },
  },
};
</script>

<style>
</style>