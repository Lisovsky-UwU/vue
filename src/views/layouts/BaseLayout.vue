<template>
  <div class="back_base">
		<div class="pa-13" style="height: 100%;">
			<v-row no-gutters style="height: 100%;">

				<v-card width="250" min-height="100%" outlined style="position: relative" class="rounded-lg" color="element_background">
					<v-card-text>
						<UserMenu :user_data="user_data"/>
					</v-card-text>
				</v-card>				

				<v-col align="center" class="ml-13">
					<v-row no-gutters>
						<v-col>
							<v-sheet rounded max-width="340" class="pa-2 rounded-lg" color="element_background">
							<router-link to="/" style="text-decoration: none;" class="black--text">
								<v-row no-gutters>
									<v-col cols="3">
										<v-img max-width="50" max-height="50" src="@/assets/logo_without_back.png"/>
									</v-col>
									<v-col align-self="center">
										<div class="head_text">Энергия СГУГиТ</div>
									</v-col>
								</v-row>
							</router-link>
							</v-sheet>
						</v-col>
					</v-row>
					
					<v-row no-gutters class="main_div">
						<v-col>
							<v-main style="height: 100%">
								<router-view
									@messageShow="snackbarShow"
									:user_data="user_data"
								/>
							</v-main>
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div>

		<v-snackbar
			v-model="snackbar_show"
			:timeout="snackbar_timeout"
			:color="snackbar_color"
			top
			right
		>
			{{ snackbar_text }}

			<template v-slot:action="{ attrs }">
				<v-btn
					text
					v-bind="attrs"
					@click="snackbar_show = false"
				>
					Закрыть
				</v-btn>
			</template>
		</v-snackbar>

	</div>
</template>

<script>
import UserMenu from "@/components/UserMenu"
import {mapGetters} from 'vuex'

export default {
	data: () => ({
		snackbar_show: false,
		snackbar_timeout: 5000,
		snackbar_text: '',
		snackbar_color: '',
  }),
	methods: {
		snackbarShow(text, color) {
			this.snackbar_show = false
			this.snackbar_text = text
			this.snackbar_color = color
			this.snackbar_show = true
		}
	},
	created() {
		this.$store.dispatch('fetchUserData')
	},
	computed:{
    ...mapGetters(['user_data']),
  },
	components: { UserMenu },
}
</script>

<style>
.back_base {
	height: 100%;
	width: 100%;
	position: absolute;
	background-size: cover;
	/* background: #1D2E41; */
	background-size: cover;
	background-position-y: 65%;
	background-image: url("@/assets/login_back.jpg");
}

.main_div {
	height: calc(100% - 64.52px);
}

.head_text {
	font-size: 30px !important;
	font-weight: 300;
}

.background_color_second {
	background: #1D2E41;
}
</style>