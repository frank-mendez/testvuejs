<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<tawk-header></tawk-header>
				<tawk-searchForm></tawk-searchForm>
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import SearchForm from './components/Search.vue'

export default {
	name: 'app',
	components:{
		'tawk-header': Header,
		'tawk-searchForm': SearchForm
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>