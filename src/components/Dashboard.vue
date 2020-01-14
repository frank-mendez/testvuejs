<template>
	<div class="row" id="dashboard">
		<div v-on:click="clickCategory(category.id)" v-for="category in orderedCategories" :key="category.id" class="col-xl-4 col-sm-12 col-md-6 category">
            <p class="dashboard-icon"><i class="fas" :class="'fa-' + category.icon"></i></p>
			<h2 class="dashboard-title"> {{ category.title }}</h2>
            <p class="dashboard-total-articles">{{ category.totalArticle }} articles</p>
            <p class="dashboard-last-update">Last update {{ category.updatedOn | moment("from", "now", true) }} ago</p>
		</div>
	</div>
</template>

<script>
import Axios from 'axios';
import _ from 'lodash';
import router from '../router'
export default {
    data () {
		return {
            categories: null,
		}
	},
	mounted () {
		Axios
		.get('http://localhost:9000/api/categories')
		.then(response => (this.categories = response.data))
    },
    computed: {
        orderedCategories: function () {
            return _.orderBy(this.categories, 'order')
        }
    },
    methods: {
        clickCategory: function (id) {
            router.push({ path: `/category/${id}` })
        }
        
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    
    #dashboard {
        font-family: Montserrat;
    }
    
    .category{
        cursor: pointer;
        text-align: center;
        padding-top:100px;
    }
    
    .dashboard-icon {
        font-size: 50px;
        color: #03a84e;
    }

    .dashboard-title {
        margin-bottom: 20px;
    }

    .dashboard-total-articles {
        color: #12ad59;
    }
    
    .dashboard-last-update{
        color: #9c9aa6;
    }
</style>