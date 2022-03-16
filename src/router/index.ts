import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LayoutIndex from '@/layout/LayoutIndex.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'Layout',
		path: '/',
		component: LayoutIndex,
		children: [
			{
				name: 'Home',
				path: 'home',
				component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
			}
		]
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
