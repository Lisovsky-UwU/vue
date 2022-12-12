<template>
  <div>
		<v-card class="rounded-lg">
			<v-card-text>
				{{ title }}
				<v-item-group>
					<v-row no-gutters>
						<template v-for="(time_el, index) in times">
							<v-col :key="index">
								<v-item v-slot="{ active, toggle }" class="mx-3">
									<v-btn 
										class="white--text mt-2"
										:color="active ? btns_color[index] : 'second'"
										:disabled="!time_el.available"
										@click="pressTime(active, time_el.code) ? toggle() : ''"
									>
										{{ time_el.time }}
									</v-btn>
								</v-item>
							</v-col>
							<v-responsive
								v-if="(index + 1) % 2 === 0"
								:key="`Responsive ${index}`"
								width="100%"
							/>
						</template>
					</v-row>
				</v-item-group>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	data: () => ({
    btns_color: ['#8DCF43', '#3EA0D6', '#EB8119', '#7D2880'],
		is_selected: false,
  }),
	props: ['title', 'times', 'select_is_limit'],
	methods: {
		pressTime(active, code) {
			if (active) {
				this.$emit('cancle', this.title)
				this.is_selected = false
				return true
			} 
			else {
				this.$emit('select', this.title, code)

				if (!this.select_is_limit) {
					this.is_selected = true
				}

				return this.is_selected
			}
		},
	}
}
</script>

<style>

</style>