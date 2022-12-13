<template>
  <v-menu 
		transition="scroll-y-transition" 
		:close-on-content-click="false"
		top
		v-model="group_selector_vis"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				color="primary"
				class="mt-2 white--text"
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
</template>

<script>
import GroupSelector from '@/components/ui/GroupSelector.vue'

export default {
	data: () => ({
		group_selector_vis: false,
	}),
	props: ['selected_group'],
	methods: {
		onUpdateGroup(group) {
			this.selected_group = group
			this.group_selector_vis = false
			this.$emit('changeGroup', group)
		}
	},
	components: { GroupSelector },
}
</script>

<style>

</style>