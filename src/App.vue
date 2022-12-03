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

  mounted() {
    this.$store.dispatch('checkToken')
  },

  computed: {
		layout() {
			if (this.$store.getters.is_login) {
				return 'BaseLayout'
			}
			else {
				return 'LoginLayout'
			}
		}
	},
};
</script>
