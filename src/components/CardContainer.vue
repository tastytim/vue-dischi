<template>
  <section class="cardcontainer">
    <div class="container">
      <FilterBar @filterMade="onFilterMade" :data="cardsList"> </FilterBar>
      <div
        class="
          row
          row-cols-1
          row-cols-sm-2
          row-cols-md-3
          row-cols-lg-4
          row-cols-xl-5
          row-cols-xxl-6
          g-4
        "
      >
        <div class="col" v-for="(item, index) in filteredCardsList" :key="index">
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
import FilterBar from "./FilterBar.vue";
export default {
  name: "CardContainer",
  components: { Card, Loader, FilterBar },
  data() {
    return {
      cardsList: [],
      filteredCardsList: [],
      loading: true,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.cardsList = resp.data.response;
        this.filteredCardsList = this.cardsList;
        setTimeout(() => {
          this.loading = false;
        }, 300);
      });
  },
  methods : {
    onFilterMade(filterValue){
      if(filterValue===null||filterValue===""){
        this.filteredCardsList=this.cardsList;
      }else{
        this.filteredCardsList = this.cardsList.filter(
        item => item.genre.toLowerCase()==filterValue.toLowerCase());
      }
    }
  }
};
</script>

<style></style>
