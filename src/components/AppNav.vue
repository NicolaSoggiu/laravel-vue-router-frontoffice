<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        ><img class="logo" src="../assets/img/minimalistic-logo-alcoholic-bar-shop-restaurant-martini-cocktail-glass-with-straw-white-background-with-inscription-cocktail-bar_450656-249.jpg" alt=""></router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="navbar-brand"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="navbar-brand"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contacts' }" class="navbar-brand"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.logo{
  height: 100px;
  object-fit: cover;
}


</style>
