<template>
  <section class="cardcontainer">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
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
      <Loader v-if="loading === true"></Loader>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import Loader from "./Loader.vue";
export default {
  name: "CardContainer",
  components  : {Card, Loader},
  data(){
      return {
          cardsList : [],
          loading: true,
      }
  },
  mounted(){
    this.loading=true;
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
          this.cardsList = resp.data.response;
          setTimeout(() => {
            this.loading=false;
          }, 2000)
      });
  },
};
</script>

<style></style>
