export default {
	state: {
		my_entries: [],
		available_time_list: [],
	},
	mutations: {
		setMyEntries(state, payload) {
			state.my_entries = payload
		},
		setAbailableTimeList(state, payload) {
			state.available_time_list = payload
		},
	},
	getters: {
		my_entries(state) {
			return state.my_entries
		},
		available_time_list(state) {
			return state.available_time_list
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
		},

		fetchAvailableTimeList(context) {
			// Здесь будет запрос доступного времени для записи с сервера

			const available_time_list = [
				{
					weekday: 'Понедельник',
					times: [
						{code: 1,  available: false, time: '16:00'}, {code: 2,  available: true,  time: '17:30'},
						{code: 3,  available: true,  time: '19:00'}, {code: 4,  available: true,  time: '20:30'}
					],
				},
				{
					weekday: 'Вторник',
					times: [
						{code: 5,  available: true,  time: '16:00'}, {code: 6,  available: true,  time: '17:30'},
						{code: 7,  available: true,  time: '19:00'}, {code: 8,  available: true,  time: '20:30'}
					],
				},
				{
					weekday: 'Среда',
					times: [
						{code: 9,  available: true,  time: '16:00'}, {code: 10, available: false, time: '17:30'},
						{code: 11, available: true,  time: '19:00'}, {code: 12, available: true,  time: '20:30'}
					],
				},
				{
					weekday: 'Четверг',
					times: [
						{code: 13, available: false, time: '16:00'}, {code: 14, available: true,  time: '17:30'},
						{code: 15, available: false, time: '19:00'}, {code: 16, available: true,  time: '20:30'}
					],
				},
				{
					weekday: 'Пятница',
					times: [
						{code: 17, available: true,  time: '16:00'}, {code: 18, available: true,  time: '17:30'},
						{code: 19, available: true,  time: '19:00'}, {code: 20, available: true,  time: '20:30'}
					],
				},
				{
					weekday: 'Суббота',
					times: [
						{code: 21, available: true,  time: '16:00'}, {code: 22, available: true,  time: '17:30'},
						{code: 23, available: true,  time: '19:00'}, {code: 24, available: true,  time: '20:30'}
					],
				},
			]

			context.commit('setAbailableTimeList', available_time_list)
		},
	}
}