<template>
	<div>
		<component :is="layout"></component>
	</div>
</template>

<script>
import BaseLayout from '@/views/layouts/BaseLayout'
import LoginLayout from '@/views/layouts/LoginLayout'

export default {
  components: { BaseLayout, LoginLayout },

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
}
</script>

<style>

</style>