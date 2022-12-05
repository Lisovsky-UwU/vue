export default {
	state: {
		my_entries: [],
	},
	mutations: {
		setMyEntries(state, payload) {
			state.my_entries = payload
		},
	},
	getters: {
		my_entries(state) {
			return state.my_entries
		},
	},
	actions: {
		fetchMyEntries(context) {
			// Здесь будет запрос записей с сервера

			const my_entries = [
				{
					'weekday': 'Понедельник',
					'time': '20:30'
				},
				{
					'weekday': 'Среда',
					'time': '20:30'
				},
				{
					'weekday': 'Пятница',
					'time': '20:30'
				}
			]

			context.commit('setMyEntries', my_entries)
		}
	}
}