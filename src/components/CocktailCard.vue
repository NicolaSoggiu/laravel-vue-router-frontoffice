<script>
export default {
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="h-100 rounded principal-card"
    style="max-width: 250px; background-color: black"
  >
    <router-link
      style="text-decoration: none"
      :to="{ name: 'cocktails.show', params: { id: cocktail.id } }"
    >
      <div
        class="overflow-hidden position-relative img-card-container rounded-top"
        style="height: 250px"
      >
        <img
          :src="cocktail.strDrinkThumb"
          class="card-img-top rounded-top h-100"
          :alt="cocktail.strDrink"
        />
        <div
          class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center under-image"
        >
          more
        </div>
      </div>

      <div class="card-body bg-black text-light">
        <h5
          class="card-title text-center pt-2"
          style="color: rgb(231, 180, 61)"
        >
          {{ cocktail.strDrink }}
        </h5>
      </div>
      <ul
        class="list-group list-group-flush p-2"
        style="list-style: none; color: white"
      >
        <!-- <li><span class="categories-title">Category: </span>{{ cocktail.strCategory }}</li>
      <li><span class="categories-title">Glass type: </span>{{ cocktail.strGlass }}</li>
      <li> 
        <span class="categories-title">Alcoholic: </span>
        <span v-if="cocktail.strAlcoholic === 'Alcoholic'">Yes</span>
        <span v-else>No</span>
      </li> -->
      </ul>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.principal-card {
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.card-img-top {
  transform: scale(1.1);
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -99;
}
.card-img-top:hover .under-image {
  z-index: 99 !important;
}
.principal-card:hover .card-img-top {
  filter: brightness(0.7);
  transform: scale(1.05);
}
.principal-card:hover .card-title {
  text-decoration: underline;
}

.categories-title {
  color: rgb(117, 117, 89);
}
</style>
