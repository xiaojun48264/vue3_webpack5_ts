export const useUserStore = defineStore('user', {
	state: () => ({
		name: '小军'
	}),
	getters: {
		getUserName: (state) => state.name
	},
	actions: {
		setUserName(key: string) {
			this.name = key
		}
	}
})
