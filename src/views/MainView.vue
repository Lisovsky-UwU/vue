<template>
  <div class="mt-10" style="height: calc(100% - 40px);">
		<v-row no-gutters style="height: 100%;">
			<v-col cols="12" md="6">
				<v-card min-height="100%" outlined style="position: relative" class="rounded-lg mr-7" color="element_background">
					<v-card-text>
						<v-img width="300" src="@/assets/calendar-mock.png"/>
						<!-- <v-calendar
							ref="calendar"
							:weekdays="[1, 2, 3, 4, 5, 6, 0]"
							type="month"
							dark
							style="background: #1D2E41"
						></v-calendar> -->
						<v-row 
							no-gutters
							v-for="(entry, index) in my_entries"
							:key="index"
						>
							<v-col>
								<v-card color="second" class="rounded-lg">
									<div class="py-3 white--text mt-4">
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
								<!-- <div class="ads">
								<v-card color="second" class="rounded-lg" align="left">
									<div class="py-3 px-6 white--text mt-4">
										От: {{ ads.date }}
										<br>
										{{ ads.text }}
									</div>
								</v-card>
								</div> -->
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed:{
    ...mapGetters(['my_entries', 'ads_list']),
  },
	mounted() {
		this.$store.dispatch('fetchMyEntries')
		this.$store.dispatch('fetchAds')
	}
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