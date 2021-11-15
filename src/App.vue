<template>
  <div id="app">
    <Header></Header>
    <CardContainer></CardContainer>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CardContainer from './components/CardContainer.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, CardContainer, Footer
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "src/styles/card.scss";
@import "src/styles/cardcontainer.scss";
@import "src/styles/footer.scss";
@import "src/styles/header.scss";
@import "src/styles/variables.scss";


html, body {
  margin: 0px ;
  padding: 0px ;
  box-sizing: border-box;
}


</style>
