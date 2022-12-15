<template>
  <div class="mt-10" style="height: calc(100% - 40px);">
		<v-card height="100%" class="mx-15 rounded-lg" color="element_background">
			<v-card-title class="background_color_second white--text">
				<v-row align="center" no-gutters>
					<v-col>
						<h2 style="font-weight: lighter;">Списки студентов</h2>
					</v-col>
				</v-row>
			</v-card-title>

			<v-card-text class="pa-0" style="height: calc(100% - 64px);">
				<router-view/>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>