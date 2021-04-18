<template>
  <h1 class="border-pink-500 rounded-xl shadow p-2 my-2">
    {{ name }} like Pungpeee {{ like }}
    <i class="far fa-edit pointer" @click="editbtn"> </i>   <i class="far fa-trash-alt pointer" @click="deletebtn"> </i>
  </h1>
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
    deletebtn() {
      this.$emit("deleteevent", {
        id: this.id,
      });
    },
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>