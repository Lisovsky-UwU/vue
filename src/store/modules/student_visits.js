export default {
	state: {
		visits_list: [
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
			{ student_name: 'Иванов Иван Иванович', status: 'О', },
			{ student_name: 'Иванов Иван Иванович', status: 'У', },
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
			{ student_name: 'Иванов Иван Иванович', status: 'У', },
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
			{ student_name: 'Иванов Иван Иванович', status: 'У', },
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
			{ student_name: 'Иванов Иван Иванович', status: 'О', },
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
			{ student_name: 'Иванов Иван Иванович', status: 'П', },
		],
	},
	mutations: {},
	getters: {
		visits_list(state) {
			return state.visits_list
		},
	},
	actions: {}
}