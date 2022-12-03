export default {
	state: {
		token: ''
	},
	mutations: {

		setLoginToken(state, token) {
			localStorage.setItem('Token', token)
			state.token = token
		},

		singOut(state) {
			localStorage.setItem('Token', '')
			state.token = ''
			// window.location.reload()
		},

	},
	getters: {

		is_login(state) {
			return state.token != ''
		},

		token(state) {
			return state.token
		},

	},
	actions: {

		checkToken(context) {
			const token = localStorage.getItem('Token')

			if (token == null || token == '') {
				return false
			}

			// здесь будет проверка существования токена на сервере

			context.commit('setLoginToken', token)
			return true
		},


		tryLogin(context, login_data) {
			// здесь будет проверка логина и пароля на сервере, получение
			// токена и запись его в state.token

			context.commit('setLoginToken', login_data.login + '|' + login_data.password)
			return true
		},


		checkStudCode(context, stud_code) {
			// здесь будет проверка студенческого кода на сервере

			return true
		},


		registrate(context, user_data) {
			// здесь будет отправка данных на сервер, получение токена и 
			// запись его в state.token

			context.commit('setLoginToken', user_data.login + '|' + user_data.password)
			return true
		},

	}
}