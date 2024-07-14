<template>
  <div class="container" v-if="weather">
    <Navbar/>
    <Main/>
  </div>
  <div class="loading" v-else>
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import { mapState, mapActions } from 'vuex'

  export default {
    components: { 
      Navbar,
      Main
    },
    created() {
      setTimeout(() => {
        this.getWeather('Ташкент')
      }, 3000);
    },
    computed: {
      ...mapState(['weather'])
    },
    methods: {
      ...mapActions(['getWeather'])
    },
}
</script>
