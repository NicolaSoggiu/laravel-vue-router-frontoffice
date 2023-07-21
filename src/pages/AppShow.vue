<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      cocktail: null,
      store,
    };
  },
  created() {
    axios
      .get(this.store.baseUrl + "api/cocktails/" + this.$route.params.id)
      .then((response) => {
        this.cocktail = response.data.results;
        console.log(response);
      });
  },
};
</script>

<template>
  <div class="showContainer">
    <video autoplay muted loop id="video-show">
  <source src="../assets/img/cocktailvideo.mp4" type="video/mp4">
  </video>
  
  
  <div class="cocktail-container-show d-flex justify-content-center align-items-center">
    <div v-if="cocktail" class="cocktail-card-show d-flex justify-content-center align-items-center gap-5 p-5">
      <img
      style="height: 400px; width: 400px"
      :src="cocktail.strDrinkThumb"
      :alt="cocktail.strDrink"
      />
      <section>
          <h3 class="text-danger" style="color:rgb(231, 180, 61) !important">{{ cocktail.strDrink }}</h3>
        
        <ul class="" style="list-style: none;">
          <li class=""><strong class="color-categories">Category: </strong> {{ cocktail.strCategory }}</li>
          <li class=""><strong class="color-categories">Glass type: </strong> {{ cocktail.strGlass }}</li>
          <li class="">
            <strong class="color-categories">Alcoholic: </strong>
            <span v-if="cocktail.strAlcoholic === 'Alcoholic'">Yes</span>
            <span v-else>No</span>
          </li>
        </ul>
        <p class="mt-3">
          <strong class="color-categories">Instructions: </strong>{{ cocktail.strInstructions }}
        </p>
      </section>
      
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

.showContainer{
  position: relative;
  z-index: -99;
  height: 100%;
  #video-show{
    display: block;
    min-width: 100%;
    min-height: 100%;
    object-fit: contain;
    filter: brightness(.3);
  }
}

.cocktail-container-show{
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  .cocktail-card-show{
    color: white;
    max-width: 1000px;
    img{
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: .5em;
    }
    section{
      animation: slide-show;
      animation-duration: .8s;
      animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
      @keyframes slide-show{
      0%{
          margin-left: 100em;
      }
      100%{
          margin-left: 0;
      }
    }
  }
    .color-categories{
      color: rgb(117, 117, 89);
    }
  }
}


</style>
