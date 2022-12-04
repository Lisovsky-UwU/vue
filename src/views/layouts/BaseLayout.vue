<template>
  <div class="back_base">
		<div class="px-13 py-13" style="height: 100%;">
			<v-row no-gutters style="height: 100%;">

				<v-card max-width="250" min-height="100%" outlined style="position: relative" class="rounded-lg" color="element_background">
					<v-card-text>
						Инфа о пользователе
						<v-btn @click="$store.commit('singOut')">Выйти</v-btn>
					</v-card-text>
				</v-card>				

				<v-col align="center" class="ml-13">
					<v-row no-gutters>
						<v-col>
							<v-sheet rounded max-width="400" class="py-2 rounded-lg" color="element_background">
								<v-row no-gutters>
									<v-col cols="3">
										<v-img max-width="50" max-height="50" src="@/assets/logo_without_back.png"/>
									</v-col>
									<v-col>
										<h1>Энергия СГУГиТ</h1>
									</v-col>
								</v-row>
							</v-sheet>
						</v-col>
					</v-row>
					
					<v-row no-gutters class="main_div">
						<v-col>
							<v-main style="height: 100%">
								<router-view/>
							</v-main>
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.back_base {
	height: 100%;
	width: 100%;
	position: absolute;
	background-size: cover;
	background: #1D2E41;
}

.main_div {
	height: calc(100% - 64.52px);
}
</style>