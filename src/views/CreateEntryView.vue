<template>
  <div class="mt-10" style="height: calc(100% - 40px);">
		<v-card height="100%" class="mx-15 rounded-lg " color="element_background">
			<v-card-title class="background_color_second white--text">
				<v-row align="center" no-gutters>
					<v-col>
						<h2 style="font-weight: lighter;">Запись в зал</h2>
					</v-col>
				</v-row>
			</v-card-title>

			<v-card-text>
				<v-row no-gutters>
					<template v-for="(day, index) in available_time_list">
						<v-col :key="`Entry ${index}`">
							<EntryTimeSelector
								class="mt-3 mx-2"
								:title="day.weekday"
								:times="day.times"
								:select_is_limit="select_is_limit"
								@select="selectTime"
								@cancle="cancleSelect"
							/>
						</v-col>
						<v-responsive
							v-if="(index + 1) % 3 === 0"
							:key="`Responsive ${index}`"
							width="100%"
						/>
					</template>
				</v-row>

				<v-snackbar
					v-model="snackbar_show"
					:timeout="snackbar_timeout"
					:color="snackbar_color"
					top
					right
				>
					{{ snackbar_text }}
		
					<template v-slot:action="{ attrs }">
						<v-btn
							text
							v-bind="attrs"
							@click="snackbar_show = false"
						>
							Закрыть
						</v-btn>
					</template>
				</v-snackbar>
			</v-card-text>

			<v-card-actions class="background_color_second" style="position:absolute; bottom:0; width: 100%;">
				<v-spacer/>
				<v-btn color="create_entry_btn" class="white--text" width="250" @click="commitEntries">
					Записаться
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import EntryTimeSelector from '@/components/EntryTimeSelector'

export default {
	data: () => ({
    selected_times: {},
		selected_weekkdays: [],
		select_is_limit: false,


		snackbar_show: false,
		snackbar_timeout: 5000,
		snackbar_text: '',
		snackbar_color: '',
  }),
	
	computed:{
    ...mapGetters(['available_time_list']),
  },

	mounted() {
		this.$store.dispatch('fetchAvailableTimeList')
	},

	components: { EntryTimeSelector },

	methods: {
		selectTime(weekday, code) {
			if (!this.select_is_limit || Object.keys(this.selected_times).includes(weekday)) {
				this.selected_times[weekday] = code

				if (Object.keys(this.selected_times).length == 3) {
					this.select_is_limit = true
				}
			}
			else {
				this.snackbar_show = true
				this.snackbar_text = 'Выбрано максимальное количество дней'
				this.snackbar_color = 'red'
			}
		},

		cancleSelect(weekday) {
			delete this.selected_times[weekday]

			if (Object.keys(this.selected_times).length < 3) {
				this.select_is_limit = false
			}
		},

		commitEntries() {
			console.log(this.selected_times)
			this.snackbar_show = true
			this.snackbar_text = 'Вы успешно записались'
			this.snackbar_color = 'green'
		}
	},
}
</script>

<style>

</style>