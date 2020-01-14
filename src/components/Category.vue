<template>
	<div class="row" id="category">
		<div class="col-xl-12">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb" v-for="category in CurrentCategory" :key="category.id">
					<li class="breadcrumb-item"><a href="/">All categories</a></li>
					<li class="breadcrumb-item active" aria-current="page">{{ category.title }}</li>
				</ol>
			</nav>
		</div>
		<div v-for="category in CurrentCategory" :key="category.id" class="col-xl-4 category">
			<p class="category-icon"><i class="fas" :class="'fa-' + category.icon"></i></p>
			<h2 class="category-title"> {{ category.title }}</h2>
            <p class="category-total-articles">{{ category.totalArticle }} articles</p>
            <p class="category-last-update">Last update {{ category.updatedOn | moment("from", "now", true) }} ago</p>
			<p><i class="fas fa-info"></i></p>
			<p>{{ category.description }}</p>
		</div>
		<div class="col-xl-8">
			<div class="row">
				<div class="col-xl-12 articles" v-for="article in articles" :key="article.id">
					<div class="card mb-3">
					<div class="row no-gutters">
						<div class="col-md-2">
							<p class="article-icon"><i class="fas" :class="'fa-' + article.icon"></i></p>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h3 class="card-title">{{ article.title }}</h3>
								<p class="card-text"><small class="text-muted">Updated {{ article.updatedOn | moment("dddd, MMMM Do YYYY") }}</small></p>
							</div>
						</div>
						<div class="col-md-2">
							<p class="article-icon-right"><i class="fas fa-chevron-right"></i></p>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Axios from 'axios';
export default {
	data () {
		return {
			categoryID: null,
			categories: [],
			category: null,
			articles: []
		}
	},
	mounted () {
		Axios
		.get('http://localhost:9000/api/category/${ this.$route.params.categoryID }')
		.then(response => (this.articles = response.data))

		Axios
		.get('http://localhost:9000/api/categories')
		.then(response => (this.categories = response.data))

		return this.categoryID = this.$route.params.categoryID
	},
	computed: {
		CurrentCategory: function() {
			return this.categories.filter(data => {
				return data.id === this.$route.params.categoryID
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';


	#category {
        font-family: Montserrat;
    }
    
    .category {
        cursor: pointer;
        text-align: center;
        padding-top:100px;
    }
    
    .category-icon {
        font-size: 50px;
        color: #03a84e;
    }

    .category-title {
        margin-bottom: 20px;
    }

    .category-total-articles {
        color: #12ad59;
    }
    
    .category-last-update {
        color: #9c9aa6;
    }

	.articles {
		padding-top: 50px;
		cursor: pointer;
	}
	.article-icon {
		font-size:30px;
		text-align:center;
		padding-top:25px;
		color:#03a84e;
	}

	.article-icon-right {
		font-size:30px;
		text-align:right;
		padding-top:25px;
		padding-right:20px;
		color:#03a84e;
	}
</style>