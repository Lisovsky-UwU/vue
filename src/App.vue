<template>
  <v-app>
    <component :is="layout"></component>
  </v-app>
</template>

<script>
import BaseLayout from '@/views/layouts/BaseLayout'
import LoginLayout from '@/views/layouts/LoginLayout'

export default {
  name: 'App',

  components: { BaseLayout, LoginLayout },

  data: () => ({
    //
  }),

  computed: {
		layout() {
			if (true) {
				return 'LoginLayout'
			}
			else {
				return 'BaseLayout'
			}
		}
	},
};
</script>
