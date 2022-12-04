<template>
  <v-content>
		<v-row no-gutters>
			<v-col align="center">
				<v-img class="ml-13" width="110" src="@/assets/default_avatar.png"/>
			</v-col>
			<v-col cols="3">
				<v-btn color="second" rounded small>
					<v-icon color="white">mdi-lead-pencil</v-icon>
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<div class="body-1 mt-4">
					Иванов Иван Иванович
					<br>
					Группа: БИ-32.1
					<br>
					Статус: Студент
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
				>
					<v-icon left>mdi-newspaper</v-icon>
					Главная
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_2"
				>
					<v-icon left>mdi-fountain-pen</v-icon>
					Записаться
				</v-btn>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col align="center">
				<v-btn 
					block
					height="40"
					class="mt-4 white--text"
					color="menu_btn_3"
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
	</v-content>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.commit('singOut')
		}
	}
}
</script>

<style>

</style>