<script>
import CocktailList from "./components/CocktailList.vue";
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    CocktailList,
    AppNav,
    AppFooter,
  },
};
</script>

<template>
  <AppNav />
  <router-view></router-view>
  <AppFooter />

</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
body{
  background-color: black;
}
</style>

