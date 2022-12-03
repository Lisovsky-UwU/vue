<template>
  <v-stepper v-model="registration_step">
		<v-stepper-items>


			<v-stepper-content step="1">
				<v-form @submit.prevent="registrationStep1" v-model="valid_step_1">
					<v-row>
						<v-col align="center">
							<v-text-field 
								label="Студенческий билет" 
								required 
								class="mt-4"
								:rules="[ required_field_rule, stud_code_field_rule ]"
								v-model="stud_code"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-btn 
								color="primary"  
								type="submit"
								class="mt-5 white--text"
								:disabled="!valid_step_1"
								:loading="is_loading"
							>
								Далее
							</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-stepper-content>


			<v-stepper-content step="2">
				<v-form @submit.prevent="registrationStep2" v-model="valid_step_2">
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field 
								label="Придумайте пароль" 
								type="password" 
								required
								:rules="[ required_field_rule, password_field_rule ]"
								v-model="password"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field 
								label="Подтвердите пароль" 
								type="password" 
								required
								:rules="[ 
									required_field_rule,
									() => password == repeat_password || 'Пароли не совпадают'
								]"
								v-model="repeat_password"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-btn 
								color="primary" 
								@click="(registration_step = 1)"
								class="mt-5 white--text"
							>
								Назад
							</v-btn>	
							<v-btn 
								color="primary"
								type="submit"
								class="mt-5 ml-3 white--text"
								:disabled="!valid_step_2"
								:loading="is_loading"
							>
								Далее
							</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-stepper-content>


			<v-stepper-content step="3">
				<v-form @submit.prevent="registrationStep3" v-model="valid_step_3">
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field 
								label="Фамилия"
								required
								:rules="[ required_field_rule ]"
								v-model="firstname"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field 
								label="Имя"
								required
								:rules="[ required_field_rule ]"
								v-model="secondname"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field 
								label="Отчество"
								required
								:rules="[ required_field_rule ]"
								v-model="patronymic"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-menu 
								transition="scroll-y-transition" 
								:close-on-content-click="false"
								top
								v-model="group_selector_vis"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										color="primary"
										class="mt-2 white--text"
										v-bind="attrs"
										v-on="on"
									>
										{{ selected_group }}
									</v-btn>
								</template>
								<v-sheet width="300" max-height="300">
									<GroupSelector 
										@onSelectGroup="onUpdateGroup"
										@close="group_selector_vis = false"
									/>
								</v-sheet>
							</v-menu>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-btn 
								color="primary"
								@click="(registration_step = 2)"
								class="mt-5 white--text"
							>
								Назад
							</v-btn>

							<v-btn 
								color="primary"
								type="submit"
								class="mt-5 ml-3 white--text"
								:disabled="!valid_step_3 || selected_group == 'Выбрать группу'"
								:loading="is_loading"
							>
								Далее
							</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-stepper-content>
		</v-stepper-items>
	</v-stepper>
</template>

<script>
import GroupSelector from '@/components/ui/GroupSelector'

export default {
	data: () => ({
		is_loading: false,

		valid_step_1: false,
		valid_step_2: false,
		valid_step_3: false,

		registration_step: 1,
		group_selector_vis: false,

		stud_code: '',
		password: '',
		repeat_password: '',
		firstname: '',
		secondname: '',
		patronymic: '',
		selected_group: 'Выбрать группу',

		required_field_rule: v => !!v || 'Поле обязательно',
		stud_code_field_rule: v => v.length == 8 || 'Длина студенческого билета 8 символов',
		password_field_rule: v => ( v.length >= 8 && v.length <= 64 ) || 'Допустимая длина от 8 до 64 символов',
	}),
	methods: {
		registrationStep1() {
			this.is_loading = true
			this.$store.dispatch('checkStudCode', this.stud_code)
			this.is_loading = false
			this.registration_step = 2
		},
		registrationStep2() {

			this.registration_step = 3
		},
		registrationStep3() {
			this.is_loading = true
			const user_data = {
				'login': this.stud_code,
				'firstname': this.firstname,
				'secondname': this.secondname,
				'patronymic': this.patronymic,
				'group': this.selected_group,
				'password': this.password
			}
			this.$store.dispatch('registrate', user_data)

			this.is_loading = false
		},
		onUpdateGroup(group) {
			this.selected_group = group
			this.group_selector_vis = false
		}
	},
	components: { GroupSelector }
}
</script>

<style>

</style>