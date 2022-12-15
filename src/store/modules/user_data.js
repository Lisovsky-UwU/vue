export default {
	state: {
		user_data: {}
	},
	mutations: {
		setUserData(state, payload) {
			state.user_data = payload
		},
	},
	getters: {
		user_data(state) {
			return state.user_data
		},
	},
	actions: {
		fetchUserData(context) {
			// Здесь будет запрос данных о пользователе с сервера

			const token = context.getters.token

			let user_data
			if (token == '11111111|11111111') {
				user_data = {
					firstname: 'Дьяченко',
					secondname: 'Наталья',
					patronymic: 'Николаевна',
					group: '-',
					status: 'Тренер',
					stud_code: '11111111',
				}
			}
			else {
				user_data = {
					firstname: 'Петров',
					secondname: 'Петр',
					patronymic: 'Иванович',
					group: 'БИ-32',
					status: 'Студент',
					stud_code: token.substr(0, 7),
				}
			}
			
			context.commit('setUserData', user_data)
		}
	}
}