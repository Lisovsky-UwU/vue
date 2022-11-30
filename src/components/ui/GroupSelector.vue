<template>
  <!-- <v-card>
    <v-card-title>
			Институт
    </v-card-title>
		<v-card-text> -->
			<v-stepper v-model="selected_step" min-height="300">
				<v-stepper-items>


					<v-stepper-content step="1">
						<v-row 
							v-for="(courses, institute) in group_list"
							:key="institute"
							no-gutters
						>
							<v-col align="center">
								<v-btn
									@click="select_institute(courses)"
									class="mt-1 mb-2"
								>
									{{ institute }}
								</v-btn>
							</v-col>
						</v-row>
						<v-row no-gutters>
							<v-col align="center">
								<v-btn
									@click="$emit('close')"
									class="mt-1 mb-2"
									color="primary"
								>
									Закрыть
								</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>

					<v-stepper-content step="2">
						<v-row 
							v-for="(groups, course) in visible_courses"
							:key="course"
							no-gutters
						>
							<v-col align="center">
								<v-btn
									@click="select_course(groups)"
									class="mt-1 mb-2"
								>
									{{ course }}
								</v-btn>
							</v-col>
						</v-row>
						<v-row no-gutters>
							<v-col align="center">
								<v-btn
									@click="(selected_step = 1)"
									class="mt-1 mb-2"
									color="primary"
								>
									Назад
								</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>

					<v-stepper-content step="3">
						<v-row 
							v-for="group in visible_gropus"
							:key="group"
							no-gutters
						>
							<v-col align="center">
								<v-btn
									@click="select_group(group)"
									class="mt-1 mb-2"
								>
									{{ group }}
								</v-btn>
							</v-col>
						</v-row>
						<v-row no-gutters>
							<v-col align="center">
								<v-btn
									@click="(selected_step = 2)"
									class="mt-1 mb-2"
									color="primary"
								>
									Назад
								</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>


				</v-stepper-items>
			</v-stepper>
			
		<!-- </v-card-text>
  </v-card> -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data () {
    return {
				selected_step: null,

				visible_courses: {},
				visible_gropus: {},

				selected_institute: '',
      }
  },
	computed: {
    ...mapGetters(['group_list']),
  },
	methods: {
		select_institute(courses) {
			this.visible_courses = courses
			this.selected_step = 2
		},
		select_course(groups) {
			this.visible_gropus = groups
			this.selected_step = 3
		},
		select_group(group) {
			this.$emit('onSelectGroup', group)
			this.selected_step = 1
		}
	}
}
</script>

<style>

</style>