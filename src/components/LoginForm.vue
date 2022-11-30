<template>
  <v-form @submit.prevent="tryLogin">
		<v-card>
			<v-card-text>
				<v-row>
					<v-col align="center">
						<v-text-field 
							label="Студенческий билет" 
							required 
							class="mt-3"
						/>
					</v-col>
				</v-row>
				<v-row  no-gutters>
					<v-col align="center">
						<v-text-field 
							type="password" 
							label="Пароль" 
							required
						/>
					</v-col>
				</v-row>

				<v-row no-gutters>
					<v-col align="center">
						<v-btn 
							color="green" 
							dark 
							type="submit"
							class="mt-5"
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
	methods: {
		tryLogin() {
			console.log('tryLogin')
		},
	}
}
</script>

<style>

</style>