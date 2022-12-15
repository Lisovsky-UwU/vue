<template>
  <div class="mt-10" style="height: calc(100% - 40px);">
		<v-card height="100%" class="mx-15 rounded-lg" color="element_background">
			<v-card-title class="background_color_second white--text">
				<v-row align="center" no-gutters>
					<v-col>
						<h2 style="font-weight: lighter;">Настройки профиля</h2>
					</v-col>
				</v-row>
			</v-card-title>

			<v-card-text class="pa-0" style="height: calc(100% - 64px);">
				 <v-container
					id="scroll-target"
					style="max-height: 400px"
					class="overflow-y-auto"
				>
					<v-row>
						<v-col>
							<h2>Основная информация</h2>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-text-field 
								class="mt-2 mx-3"
								label="Фамилия" 
								required
								:rules="[ required_field_rule ]"
								v-model="firstname"
							/>
						</v-col>
						<v-col>
							<v-text-field 
								class="mt-2 mx-3"
								label="Имя" 
								required
								:rules="[ required_field_rule ]"
								v-model="secondname"
							/>
						</v-col>
					</v-row>
					<v-row  no-gutters>
						<v-col>
							<v-text-field 
								class="mt-2 mx-3"
								label="Отчество" 
								required
								:rules="[ required_field_rule ]"
								v-model="patronymic"
							/>
						</v-col>
						<v-col>
							<v-text-field 
								v-if="user_data.status != 'Тренер'"
								class="mt-2 mx-3"
								label="Номер студенческого билета"
								readonly
								v-model="stud_code"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<template v-if="user_data.status != 'Тренер'">
								<div class="mt-1">
									Группа:
								</div>
								<GroupSelectorBtn 
									:selected_group="usergroup"
									@changeGroup="changeGroup"
								/>
							</template>
						</v-col>
						<v-col>
							<div class="mt-1">
								Фото профиля:
							</div>
							<v-btn
								class="mt-2 white--text"
								color="menu_btn_1"
								@click="uploadPhoto"
							>
								Выбрать фото
							</v-btn>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-btn 
								color="green"
								class="white--text"
							>
								Сохранить изменения
							</v-btn>
						</v-col>
					</v-row>


					<v-divider class="my-5"/>
					

					<v-row>
						<v-col>
							<h2>Сменить пароль</h2>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-text-field 
								class="mt-2 mx-3"
								label="Прежний пароль" 
								required
								type="password"
								:rules="[ required_field_rule, password_field_rule ]"
								v-model="old_password"
							/>
						</v-col>
						<v-col>
							<v-text-field 
								class="mt-2 mx-3"
								label="Новый пароль" 
								required
								type="password"
								:rules="[ required_field_rule, password_field_rule ]"
								v-model="new_password"
							/>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-text-field 
								class="mt-2 mx-3"
								label="Повторите новый пароль" 
								required
								type="password"
								:rules="[ 
									required_field_rule, 
									() => new_password == repeat_new_password || 'Пароли не совпадают'
								]"
								v-model="repeat_new_password"
							/>
						</v-col>
						<v-col>
							<v-btn 
								color="green"
								class="white--text mt-4"
							>
								Сменить пароль
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

		</v-card>
	</div>
</template>

<script>
import GroupSelectorBtn from '@/components/ui/GroupSelectorBtn.vue'
import {mapGetters} from 'vuex'

export default {
	data: () => ({
		valid: false,
		is_loading: false,

		firstname: '',
		secondname: '',
		patronymic: '',

		stud_code: '',

		old_password: '',
		new_password: '',
		repeat_new_password: '',
		
		usergroup: '',

		required_field_rule: v => !!v || 'Поле обязательно',
		password_field_rule: v => ( v.length >= 8 && v.length <= 64 ) || 'Допустимая длина от 8 до 64 символов',
	}),
	methods: {
		changeGroup(new_group) {
			this.usergroup = new_group
		},
		uploadPhoto() {
			this.$emit('messageShow', 'Функция находится в разработке', 'warning')
		},
	},
	computed:{
    // ...mapGetters(['user_data']),
  },
	components: { GroupSelectorBtn },
	mounted() {
		this.firstname = this.user_data.firstname
		this.secondname = this.user_data.secondname
		this.patronymic = this.user_data.patronymic
		this.usergroup = this.user_data.group
		this.stud_code = this.user_data.stud_code
	},
	props: [ 'user_data' ]
}
</script>

<style>

</style>