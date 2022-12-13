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
				this.$emit('messageShow', 'Выбрано максимальное количество дней', 'red')
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
			this.$emit('messageShow', 'Вы успешно записались', 'green')
		}
	},
}
</script>

<style>

</style>