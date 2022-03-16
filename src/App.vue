<script lang="ts" setup>
import { dateZhCN as dateLocale, zhCN as locale } from 'naive-ui'
</script>

<template>
	<n-config-provider :date-locale="dateLocale" :locale="locale" style="width: 100%; height: 100%">
		<router-view />
	</n-config-provider>
</template>

<style lang="scss" scoped></style>
