<template>
	<div class="row" id="search">
		<div class="col">
			<div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search for answers">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';

    #basic-addon2{
        background-color: #03a84e;
        color:white;
    }
	
</style>