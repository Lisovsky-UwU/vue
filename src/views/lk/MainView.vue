<template>
  <div class="mt-10" style="height: calc(100% - 40px);">
		<v-row no-gutters style="height: 100%;">
			<v-col cols="12" md="6">


				<v-card min-height="100%" outlined style="position: relative" class="rounded-lg mr-7" color="element_background">

					<v-card-text v-if="user_data.status == 'Тренер'" class="pa-0">
						<v-container
							id="scroll-target"
							style="max-height: 450px;"
							class="overflow-y-auto"
						>
							<v-row justify="center" no-gutters class="mt-1">
								<v-col md="auto">
									<h4 class="mt-1">Выберите дату: </h4>
								</v-col>
								<v-col md="auto">
									<v-menu
										ref="date_picker"
										v-model="date_picker"
										:close-on-content-click="false"
										transition="scale-transition"
										offset-y
										max-width="290px"
										min-width="auto"
									>
										<template v-slot:activator="{ on, attrs }">
											<v-btn 
												v-bind="attrs"
												v-on="on"
												class="ml-4 white--text"
												color="second"
											>
												{{ user_visits_date }}
											</v-btn>
										</template>
										<v-date-picker
											color="green"
											v-model="user_visits_date"
											no-title
											@input="date_picker = false"
											locale="ru"
											:first-day-of-week="1"
										></v-date-picker>
									</v-menu>
								</v-col>
							</v-row>

							<v-row justify="center" no-gutters class="mt-4">
								<v-col md="auto" class="text-">
									<h4 class="mt-1">Время: </h4>
								</v-col>
								<v-col md="auto">
									<v-menu offset-y>
										<template v-slot:activator="{ on, attrs }">
											<v-btn
												v-bind="attrs"
												v-on="on"
												class="ml-4 white--text"
												color="second"
											>
												{{ times_items[selected_time_id] }}
											</v-btn>
										</template>
										<v-list color="second">
											<v-list-item-group
												v-model="selected_time_id"
												color="primary"
											>
												<v-list-item
													v-for="(item, index) in times_items"
													:key="index"
													class="white--text"
												>
													<v-list-item-title>{{ item }}</v-list-item-title>
												</v-list-item>
											</v-list-item-group>
										</v-list>
									</v-menu>
								</v-col>
							</v-row>

							<v-row
								v-for="(visit, index) in visits_list"
								:key="index"
								no-gutters
								class="mt-8"
							>
								<v-col>
									<v-sheet class="rounded-lg" color="second">
											<v-row justify="center" class="px-4">
												<v-col md="auto">
													<div class="mt-2 white--text">
														{{ visit.student_name }}
													</div>
												</v-col>
												<v-col md="3">
													<v-combobox
														dark
														dense
														class="ma-0"
														:items="visits_status_items"
														color="white"
													></v-combobox>
												</v-col>
											</v-row>
									</v-sheet>
								</v-col>
							</v-row>
						</v-container>
					</v-card-text>

					<v-card-text v-else>
						<v-row 
							no-gutters
							v-for="(entry, index) in my_entries"
							:key="index"
						>
							<v-col>
								<v-card color="second" class="rounded-lg">
									<div class="py-3 white--text mb-3">
										{{ entry.weekday }}: {{ entry.time }}
									</div>
								</v-card>
							</v-col>
						</v-row>
					</v-card-text>

				</v-card>
			</v-col>


			<v-col cols="12" md="6">
				<v-card min-height="100%" outlined style="position: relative" class="rounded-lg ml-7" color="element_background">
					<v-card-text>
						<v-row 
							no-gutters
							v-for="(ads, index) in ads_list"
							:key="index"
						>
							<v-col>
								<div class="ads mb-4">
									<v-sheet color="second" class="rounded-lg" align="left">
										<div class="py-3 px-6 white--text">
											От: {{ ads.date }}
											<br>
											{{ ads.text }}
										</div>
									</v-sheet>
								</div>
							</v-col>
						</v-row>
					</v-card-text>

					<v-card-actions 
						v-if="user_data.status == 'Тренер'"
						class="background_color_second"
						style="position: absolute; bottom: 0; width: 100%"
					>
						<v-text-field
							dense
							class="white--text mt-2 mx-3"
							dark
							color="white"
						/>
						<v-btn
							text
							dark
						>
							<v-icon>mdi-send</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>

		</v-row>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data: () => ({
    date_picker: false,
		user_visits_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
		time_picker: false,
		times_items: ['16:00', '17:30', '19:00', '20:30'],
		selected_time_id: 0,
		selected_time: '16:00',

		visits_status_items: ['О', 'У', 'П'],

		items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
	computed:{
    ...mapGetters(['my_entries', 'ads_list', 'visits_list']),
  },
	mounted() {
		this.$store.dispatch('fetchMyEntries')
		this.$store.dispatch('fetchAds')
	},
	props: [ 'user_data' ],
}
</script>

<style>
.ads {
	padding: 1rem;
  position: relative;
  background: linear-gradient(90deg, rgba(50,204,19,1) 0%, rgba(24,24,219,1) 30%, rgba(236,124,12,1) 70%, rgba(115,16,207,1) 100%);
  padding: 2px;
	border-radius: 10px;
}
</style>