export default {
	state () {
		return {
			count: 0
		}
	},
	mutations: {
		incrementCounter (state) {
			state.count++
		}
	},
	actions: {
		incrementCounter (context) {
			context.commit('incrementCounter');
		}
	},
	getters: {
		counter (state) {
			return state.count;
		}
	}
}