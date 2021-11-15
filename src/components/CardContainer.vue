<template>
  <section class="cardcontainer">
    <div class="container">
      <div class="row row-cols-5 g-4">
          <div class="col" v-for="(item, index) in cardsList" :key="index">
        <Card
          :poster="item.poster"
          :title="item.title"
          :author="item.author"
          :year="item.year"
        >
        </Card>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "CardContainer",
  components  : {Card},
  data(){
      return {
          cardsList : [],
      }
  },
  mounted(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
          this.cardsList = resp.data.response;
      });
  }
};
</script>

<style></style>
