<template>
  <v-form @submit.prevent="tryLogin" v-model="valid">
		<v-card>
			<v-card-text>
				<v-row>
					<v-col align="center">
						<v-text-field 
							label="Студенческий билет" 
							class="mt-3"
							required
							:rules="[ required_field_rule, stud_code_field_rule ]"
							v-model="stud_code"
						/>
					</v-col>
				</v-row>
				<v-row  no-gutters>
					<v-col align="center">
						<v-text-field 
							type="password" 
							label="Пароль" 
							required
							:rules="[ required_field_rule, password_field_rule ]"
							v-model="password"
						/>
					</v-col>
				</v-row>

				<v-row no-gutters>
					<v-col align="center">
						<v-btn 
							color="primary" 
							type="submit"
							class="mt-5 white--text"
							:disabled="!valid"
							:loading="is_loading"
						>
							Войти
						</v-btn>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		
	</v-form>
</template>

<script>
export default {
	data: () => ({
		valid: false,
		is_loading: false,

		stud_code: '',
		password: '',

		required_field_rule: v => !!v || 'Поле обязательно',
		stud_code_field_rule: v => v.length == 8 || 'Длина студенческого билета 8 символов',
		password_field_rule: v => ( v.length >= 8 && v.length <= 64 ) || 'Допустимая длина от 8 до 64 символов',
	}),

	methods: {
		tryLogin() {
			this.is_loading = true
			const user_login_data = { 
				'login': this.stud_code,
				'password': this.password,
			}
			this.$store.dispatch('tryLogin', user_login_data)
			this.os_loading = false
		},
	}
}
</script>

<style>

</style>