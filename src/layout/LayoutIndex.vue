<script lang="ts" setup>
import XMain from './components/XMain.vue'
import XMenu from './components/XMenu.vue'
</script>

<template>
	<n-layout class="x-layout">
		<n-layout-header class="x-layout-header" bordered></n-layout-header>
		<n-layout has-sider>
			<n-layout-sider bordered collapse-mode="width" :native-scrollbar="false" show-trigger="arrow-circle" trigger-style="color: red;" class="x-layout-sider">
				<x-menu />
			</n-layout-sider>
			<n-layout-content class="x-layout-content">
				<x-main />
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<style lang="scss" scoped>
.x-layout {
	width: 100vw;
	height: 100vh;
	.x-layout-header {
		height: 60px;
	}
	.x-layout-sider {
		height: calc(100vh - 60px);
	}
	.x-layout-content {
		height: calc(100vh - 60px);
	}
}
</style>
