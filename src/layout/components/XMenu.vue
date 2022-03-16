<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import { Home, LogoWebComponent } from '@vicons/ionicons5'

function renderIcon(icon: Component) {
	return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOption: MenuOption[] = [
	{
		label: '主页',
		key: '/home',
		icon: renderIcon(Home)
	},
	{
		label: '组件',
		key: '/components',
		icon: renderIcon(LogoWebComponent),
		children: [
			{
				label: '组件-1',
				key: '/components-1',
				icon: renderIcon(LogoWebComponent)
			}
		]
	}
]

const selectMenu = (key: string, item: MenuOption) => {
	console.log(key)
	console.log(item)
}
</script>

<template>
	<div class="x-menu">
		<n-menu :options="menuOption" :on-update:value="selectMenu" />
	</div>
</template>

<style lang="scss" scoped>
.x-menu {
	height: 100%;
}
</style>
