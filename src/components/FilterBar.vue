<template>
  <div class="filterbar">
    <select name="filter" id="filtergenre" v-model="key" @change="startFilter">
      <option selected value="">All</option>
      <option value="rock">Rock</option>
      <option value="pop">Pop</option>
      <option value="jazz">Jazz</option>
      <option value="metal">Metal</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data(){
      return{
          key : ""
      }
  },
  methods:{
     startFilter(){
         this.$emit("filterMade", this.key);
     }
  }
};
</script>

<style></style>
