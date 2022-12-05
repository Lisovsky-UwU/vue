export default {
	state: {
		ads_list: [],
	},
	mutations: {
		setAdsList(state, payload) {
			state.ads_list = payload
		},
	},
	getters: {
		ads_list(state) {
			return state.ads_list
		},
	},
	actions: {
		fetchAds(context) {
			// Здесь будет запрос объявлений с сервера

			const ads_list = [
				{
					'date': '02.11.2022',
					'text': '04.02.2022 Спортивный зал не работает'
				},
				{
					'date': '27.10.2022',
					'text': '30.10.2022 Спортивный зал работает до 19:00'
				}
			]

			context.commit('setAdsList', ads_list)
		}
	}
}