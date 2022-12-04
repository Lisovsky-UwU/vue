<template>
	<div class="back_login">
		<div class="login_div">
			<v-container fill-height>
				<v-container justify="center">
					<v-row>
						<v-col align="center">
							<v-img 
								src="@/assets/logo_without_back.png" 
								visible="logo_visible"
								max-width="200"
								max-height="200"
							/>
						</v-col>
					</v-row>
					<v-tabs
						v-model="tab" 
						centered
						class="mt-5"
					>
						<v-tab key="login">
							Вход
						</v-tab>
						<v-tab key="registration">
							Регистрация
						</v-tab>
					</v-tabs>
					<v-tabs-items v-model="tab">
						<v-tab-item key="login">
							<LoginForm/>
						</v-tab-item>
						<v-tab-item key="registration">
							<RegistrationForm/>
						</v-tab-item>
					</v-tabs-items>
				</v-container>
			</v-container>
		</div>
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import RegistrationForm from '@/components/RegistrationForm'

export default {
	data () {
    return {
      	tab: null,
				registration_step: 1,
				logo_visible: true,
      }
  },
	
	components: { LoginForm, RegistrationForm }
}
</script>

<style>
.back_login {
	height: 100%;
	width: 100%;
	position: absolute;
	background-size: cover;
	background-position-y: 65%;
	background-image: url("@/assets/login_back.jpg");
}

.login_div {
	margin-left: auto;
	margin-right: 0;
	max-width: 300px;
	height: 100%;
	background: rgba(255, 255, 255, 1);
}
</style>