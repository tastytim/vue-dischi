<template>
  <div class="filterbar">
    <select name="filter" id="filtergenre" v-model="key" @change="startFilter">
      <option selected value="">All</option><option
        v-for="(item, index) in filterOptions(data)"
        :key="index"
        :value="item"
      >
        {{item}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    data: [],
  },
  name: "FilterBar",
  data() {
    return {
      key: ""
    };
  },
  methods: {
    startFilter() {
      this.$emit("filterMade", this.key);
    },
    filterOptions(data) {
      let newList = [];
      data.forEach((element) => {
        if (!newList.includes(element.genre)) {
          newList.push(element.genre);
        }
      });
      return newList.sort();
    },
  },
  computed: {},
};
</script>

<style></style>
