<template>
	<v-container
		id="scroll-target"
		style="max-height: 400px"
		class="overflow-y-auto"
	>
		<h3 class="mt-3">Список на {{ weekday }}</h3>

		<v-card 
			v-for="(weekday, index) in students_for_day"
			:key="'weekday' + index"
			class="my-4 mx-8"
		>
			<v-card-title style="background: #8595BE;">

				<v-row align="center" no-gutters>
					<v-col>
						<h3 style="font-weight: 400;">{{ weekday.time }}</h3>
					</v-col>
				</v-row>
			</v-card-title>

			<v-card-text>
				<v-row 
					v-for="(student, index_student) in weekday.students"
					:key="weekday.time + 'student' + index_student"
					no-gutters
				>
					<v-col>
						{{ student }}
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
    students_for_day: [{time: '123', studets: ['d', 'i', 'c']}]
  }),
	props: [ 'weekday' ],
	mounted() {
		this.$store.dispatch('fetchAllEntriesOfDay', this.weekday).then(resp => this.students_for_day = resp)
		console.log(this.students_for_day)
	}
}
</script>

<style>

</style>