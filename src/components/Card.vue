<template>
  <div class="card">
    <img :src="poster" class="card-img-top" :alt="poster" />
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{author}}</p>
      <p class="card-text">{{year}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    poster: String,
    title: String,
    author: String,
    genre: String,
    year: String,
  },
};
</script>

<style></style>
