<script>

import CocktailList from '../components/CocktailList.vue';
export default {
  components: { 
    CocktailList
  }
};
</script>

<template>
  <div class="">
	  
	  <div id="carouselExample" class="carousel slide carousel-fade">
			<h1 class="text-center text-light mt-4 bar-title">
				<img src="../assets/img/Risorsa 8.png" alt="">
			</h1>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="../assets/img/cocktail3.jpg"
						class="d-block w-100 "
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
					src="../assets/img/cocktail1.jpg"
					class="d-block w-100 caro-img"
					alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src="../assets/img/cocktail2.jpg"
						class="d-block w-100"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src="../assets/img/cocktail5.jpg"
						class="d-block w-100"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src="../assets/img/cocktail4.jpg"
						class="d-block w-100"
						alt="..."
					/>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>

  <CocktailList></CocktailList>


</template>

<style lang="scss" scoped>
.carousel.slide{
	position: relative;
}
.bar-title{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 99;
	img{
		width: 30%;
	}
	animation: title-enter;
    animation-duration: 5s;
    @keyframes title-enter {
        0%{
            top: -3em;
        }
    }
}
.carousel-item img{
	height: 70vh;
	object-fit: cover;
}

.container-fluid{
  height: 500px;
  background-color: white;
  position: relative;
  z-index: -2;
}

.container-fluid{
  padding-top:150px ;
}

._card{
  height: 300px;
  width: 250px;
  background-image: url("https://lovefoodfeed.com/wp-content/uploads/2022/11/Best-red-cocktails-recipe-px-1200.jpg");

    img{
      height: 100%;
      width: 100%;
    }
}
</style>

