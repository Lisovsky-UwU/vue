<template>
  <div class="px-8">
		<v-row>
			<v-col>
				<v-btn 
					v-for="(weekday, index) in weekdays"
					:key="index"
					block
					class="mt-4 white--text"
					color="second"
					large
					:to="'student-list/' + weekday"
				>
					{{ weekday }}
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data: () => ({
    weekdays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  }),
}
</script>

<style>

</style>