<template>
  <div class="mt-10" style="height: calc(100% - 40px);">
		<v-card height="100%" class="mx-15 rounded-lg" color="element_background">
			<v-card-title class="background_color_second white--text">
				<v-row align="center" no-gutters>
					<v-col>
						<h2 style="font-weight: lighter;">{{ title }}</h2>
					</v-col>
				</v-row>
			</v-card-title>

			<v-card-text class="pa-0" style="height: calc(100% - 64px);">
				<v-container fill-height justify="center">
					<v-row no-gutters>
						<v-col align="center">
							<h2>
								Раздел находится в разработке
								<br>
								По всем вопросам пишите на почту <a href="mailto:energycats@gmail.ru">energycats@gmail.ru</a>
							</h2>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

		</v-card>
	</div>
</template>

<script>
export default {
	props: ['title'],
}
</script>

<style>

</style>