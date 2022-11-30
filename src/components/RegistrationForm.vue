<template>
  <v-stepper v-model="registration_step">
		<v-stepper-items>


			<v-stepper-content step="1">
				<v-form @submit.prevent="registrationStep1">
					<v-row>
						<v-col align="center">
							<v-text-field label="Студенческий билет" required class="mt-4"/>
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
								Далее
							</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-stepper-content>


			<v-stepper-content step="2">
				<v-form @submit.prevent="registrationStep2">
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field label="Придумайте пароль" type="password" required/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field label="Подтвердите пароль" type="password" required/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-btn 
								color="green" 
								dark 
								@click="(registration_step = 1)"
								class="mt-5"
							>
								Назад
							</v-btn>	
							<v-btn 
								color="green" 
								dark 
								type="submit"
								class="mt-5 ml-3"
							>
								Далее
							</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-stepper-content>


			<v-stepper-content step="3">
				<v-form @submit.prevent="registrationStep3">
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field label="Фамилия" required/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field label="Имя" required/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col align="center">
							<v-text-field label="Отчество" required/>
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
										dark
										color="primary"
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
								color="green" 
								dark 
								@click="(registration_step = 2)"
								class="mt-5"
							>
								Назад
							</v-btn>

							<v-btn 
								color="green" 
								dark 
								type="submit"
								class="mt-5 ml-3"
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
	data () {
    return {
				registration_step: 1,
				group_selector_vis: false,
				selected_group: 'Выбрать группу'
      }
  },
	methods: {
		registrationStep1() {
			console.log('registrationStep1')
			this.registration_step = 2
		},
		registrationStep2() {
			console.log('registrationStep2')
			this.registration_step = 3
		},
		registrationStep3() {
			console.log('registrationStep3')
			
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