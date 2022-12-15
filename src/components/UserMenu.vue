<template>
  <div>
		<v-btn 
			color="second" 
			rounded 
			small 
			class="edit_btn" 
			absolute
			to="/lk/profile-settings" 
		>
			<v-icon color="white">mdi-lead-pencil</v-icon>
		</v-btn>

		<v-row no-gutters>
			<v-col align="center">
				<v-img v-if="user_data.status == 'Тренер'"  width="110" src="@/assets/coach_avatar.png"/>
				<v-img v-else  width="110" src="@/assets/default_avatar.png"/>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<div class="body-1 mt-4">
					{{ user_data.firstname }} {{ user_data.secondname }} {{ user_data.patronymic }}
					<br>
					<div v-if="user_data.status != 'Тренер'">
						Группа: {{ user_data.group }}
					</div>
					Статус: {{ user_data.status }}
				</div>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_1"
					to="/lk"
				>
					<v-icon left>mdi-newspaper</v-icon>
					Главная
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					v-if="user_data.status == 'Тренер'"
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_2"
					to="/lk/student-list"
				>
					<v-icon left>mdi-file-document-edit</v-icon>
					Списки
				</v-btn>

				<v-btn 
					v-else
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_2"
					to="/lk/create-entry"
				>
					<v-icon left>mdi-fountain-pen</v-icon>
					Записаться
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					v-if="user_data.status == 'Тренер'"
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_3"
					to="/lk/students-chat"
				>
					<v-icon left>mdi-phone-in-talk</v-icon>
					Чат со студентами
				</v-btn>

				<v-btn 
					v-else
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_3"
					to="/lk/coach-support"
				>
					<v-icon left>mdi-phone-in-talk</v-icon>
					Связь с тренером
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_4"
					to="/lk/support"
				>
					<v-icon left>mdi-headphones-settings</v-icon>
					Поддержка
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_5"
					@click="logout"
				>
					<v-icon left>mdi-arrow-left-thick</v-icon>
					Выход
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	props: [ 'user_data' ],
	methods: {
		logout() {
			this.$store.commit('singOut')
		}
	}
}
</script>

<style>
.edit_btn {
	left: 74%;
}
</style>