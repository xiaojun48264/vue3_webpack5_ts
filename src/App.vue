<script lang="ts" setup>
const num = ref<number>(1)

setTimeout(() => {
	num.value = 3
}, 3000)

</script>

<template>
	<div class="app">
		<HelloWorld msg="vue3_webpack_ts" />
	</div>
</template>

<style lang="scss" scoped>
.app {
	color: red;
}
</style>
