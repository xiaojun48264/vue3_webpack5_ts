<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()

const name = computed(() => userStore.name)

setTimeout(() => {
	userStore.setUserName('雯雯')
}, 2000)

</script>

<template>
	<div class="home-index">{{ name }}</div>
</template>

<style lang="scss" scoped>
.home-index {
	color: red;
}
</style>
