<script>
	import axios from "axios";
	import CocktailCard from "./CocktailCard.vue";
	import {store} from "../store";

	export default {
		components: {CocktailCard},
		data() {
			return {
				arrCocktails: [],
				arrCategory: [],
				category: null,
				currentPage: 1,
				nPages: 0,
				store,
			};
		},
		methods: {
			nextPage() {
				this.currentPage != this.nPages ? this.currentPage++ : null;
			},
			prevPage() {
				this.currentPage != 1 ? this.currentPage-- : null;
			},
			getCocktails() {
				axios
					.get(this.store.baseUrl + "api/cocktails", {
						params: {category: this.category},
					})
					.then((response) => {
						this.arrCocktails = response.data.results;
					});
			},
			getCategory() {
				axios.get("http://localhost:8000/api/categories").then((response) => {
					this.arrCategory = response.data.results;
				});
			},
			changeCategory() {
				axios
					.get("http://localhost:8000/api/categories", {
						params: {
							category: this.category,
						},
					})
					.then((response) => {
						this.arrCategory = response.data.results;
					});

          this.getCocktails();
			},
		},
		created() {
			this.getCocktails();
			this.getCategory();
		},
		watch: {
			currentPage() {
				this.getCocktails();
			},
		},
	};
</script>

<template>
	<select name="" id="" v-model="category" @change="changeCategory">
    <option>all</option>
		<option
			:value="cocktail.strCategory"
			v-for="cocktail in arrCategory"
			:key="cocktail"
		>
			{{ cocktail.strCategory }}
		</option>
	</select>

	<div class="container-card bg-light">
		<div class="container listContainer">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
				<div
					class="col mt-3"
					v-for="cocktail in arrCocktails"
					:key="cocktail.id"
				>
					<CocktailCard :cocktail="cocktail" :arrCocktails="arrCocktails" />
				</div>
			</div>

			<div class="d-flex justify-content-center mt-5">
				<ul class="pagination">
					<li class="page-item" :class="{disabled: currentPage == 1}">
						<a class="page-link" href="#" @click.prevent="prevPage">«</a>
					</li>

					<li
						v-for="page in nPages"
						:key="page"
						class="page-item"
						:class="{active: page == currentPage}"
					>
						<a class="page-link" href="#" @click.prevent="currentPage = page">{{
							page
						}}</a>
					</li>

					<li class="page-item" :class="{disabled: currentPage == nPages}">
						<a class="page-link" href="#" @click.prevent="nextPage">»</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.container-card {
		padding-top: 3em;
	}
	.listContainer {
		max-width: 1000px;
		margin: auto;
	}
	.page-link {
		background-color: transparent !important;
		border: none;
		color: black;
	}
	.pagination .active a {
		color: black;
		text-decoration: underline;
	}
	.pagination a:focus {
		box-shadow: none !important;
		color: #b9bc0d;
	}
</style>

category:
