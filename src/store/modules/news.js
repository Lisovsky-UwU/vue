export default {
	state: {
		news_list: [],
	},
	mutations: {
		setNewsList(state, payload) {
			state.news_list = payload
		},
	},
	getters: {
		news_list(state) {
			return state.news_list
		},
	},
	actions: {
		fetchNews(context) {
			// Здесь будет запрос новостей с сервера

			const news_list = [
				{
					'date': '08.12.2022',
					'text': 'Дорогие посетители спортивного зала,  15.12.2022 состоится соревнования по волейболу, всем желающим принять участие необходимо связаться с тренером или обратиться на кафедру физической культуры, в каб №2.'
				},
			]

			context.commit('setNewsList', news_list)
		}
	}
}