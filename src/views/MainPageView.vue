<template>
  <div>
		<v-app-bar 
			color="second" 
			clipped-left 
			dark
			elevation="1"
			height="70"
		>
			<div class="d-flex align-center ml-5">
				<!-- <v-icon large class="mr-4">mdi-counter</v-icon> -->
				<v-img src="@/assets/logo_without_back.png" width="50"/>
				<h1 class="ml-5">Энергия</h1>
			</div>
		
			<v-spacer/>
		
			<v-btn 
				text
				class="mx-5"
			>
				Скачать приложение
			</v-btn>
		
			<v-btn 
				text
				class="mx-5"
				to="/lk"
			>
				Личный кабинет
			</v-btn>
			<v-btn 
				text
				class="mx-5"
			>
				Обратная связь
			</v-btn>
		</v-app-bar>

		<div class="main_page_div pb-10">
			<v-row>
				<v-col align="center">
					<v-parallax src="@/assets/login_back.jpg" height="400"/>
				</v-col>
			</v-row>
			<v-row>
				<div class="px-15 pt-7 white--text">
					<h3 style="font-weight: 400;">
						Дорогие студенты, приглашаем вас в спортивный зал “Энергия”, в который вы можете записаться, перейдя в <a href="/lk">личный кабинет</a>. 
						<br>
						Если у вас имеются вопросы или пожелания, пишите на почту <a href="mailto:energycats@gmail.com">energycats@gmail.com</a>.
						<br>
						Также для записи Вы можете воспользваться <a href="#">мобильным приложением</a>.
					</h3>
				</div>
			</v-row>
			<v-row>
				<div class="div-horizontal-scroll px-7 mt-10">
					<v-img src="@/assets/mobile-screen/1.png" width="300" class="div-horizontal-scroll-items"/>
					<v-img src="@/assets/mobile-screen/2.png" width="300" class="div-horizontal-scroll-items"/>
					<v-img src="@/assets/mobile-screen/3.png" width="300" class="div-horizontal-scroll-items"/>
					<v-img src="@/assets/mobile-screen/4.png" width="300" class="div-horizontal-scroll-items"/>
					<v-img src="@/assets/mobile-screen/5.png" width="300" class="div-horizontal-scroll-items"/>
					<v-img src="@/assets/mobile-screen/6.png" width="300" class="div-horizontal-scroll-items"/>
					<v-img src="@/assets/mobile-screen/7.png" width="300" class="div-horizontal-scroll-items"/>
				</div>
			</v-row>

			<v-row>
				<div class="px-15 pt-7 white--text">
					<h3 style="font-weight: 400;" class="mb-3">
						Новости спортивного зала
					</h3>
					<v-row 
						no-gutters
						v-for="(news, index) in news_list"
						:key="index"
					>
						<v-col>
							<div class="news-card mb-4">
							<v-sheet color="second" class="rounded-lg" align="left">
								<div class="py-3 px-6 white--text">
									От: {{ news.date }}
									<br>
									{{ news.text }}
								</div>
							</v-sheet>
							</div>
						</v-col>
					</v-row>
				</div>
			</v-row>
		</div>
		
		<v-footer
			padless="true"
		>
			<v-card
				flat
				tile
				width="100%"
				class="lighten-1 text-center"
				color="second_element_background"
			>
				<v-card-text class="white--text" >
					<v-btn text absolute height="100" style="right: 0%; bottom: 0%;" disabled>
						<v-img src="@/assets/клубок.png" width="30"/>
						<v-img src="@/assets/cat.svg" width="80"/>
					</v-btn>

					<v-row>
						<v-col cols="2"/>
						<v-col cols="5">
							<div class="text-left">
								Адрес: 630108 г. Новосибирск ул. Плахотного 8/1
								<br>
								Тренер: Дьяченко Наталья Николавена
								<br>
								Номер телефона: 8(913) 9143990
							</div>
						</v-col>

						<v-col cols="5">
							<div class="text-left">
								Ссылки:
								<br>
								СГУГиТ: <a class="white--text" href="https://sgugit.ru/">https://sgugit.ru/</a>
								<br>
								Скачать на андроид: <a href="#" class="white--text">download</a>
							</div>
						</v-col>
					</v-row>
					
					<v-row>
						<v-col>
							© Сибирский государственный университет геосистем и технологий. 1994-2022
						</v-col>
					</v-row>

					
				</v-card-text>
			</v-card>
		</v-footer>


	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	mounted() {
		this.$store.dispatch('fetchNews')
	},
	computed:{
    ...mapGetters(['news_list']),
  },
}
</script>

<style>
.main_page_div {
	background-color: #1D2E41;
	background-position: initial;
}

.div-horizontal-scroll {
	background-color: #616D7A;
  overflow: auto;
  white-space: nowrap;
	width: 100%;
}

.div-horizontal-scroll-items {
	display: inline-block;
}

.news-card {
	padding: 1rem;
  position: relative;
  background: linear-gradient(90deg, rgba(50,204,19,1) 0%, rgba(24,24,219,1) 30%, rgba(236,124,12,1) 70%, rgba(115,16,207,1) 100%);
  padding: 2px;
	border-radius: 10px;
}
</style>