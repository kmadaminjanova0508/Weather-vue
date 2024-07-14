<template>
    <nav class="nav">
        <a href="#" class="logo">
            <img src="@/assets/images/logo.svg" alt="">
            <span class="logo__span">vue weather</span>
        </a>
        <div class="nav__search">
            <img src="@/assets/images/kaplya.svg" alt="">
            <input 
                type="text" 
                placeholder="Выбрать город" 
                class="nav__search-input"
                v-model="getCity"
                @keydown.enter="getWeather(getCity)"
            >
        </div>
    </nav>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
       computed: {
            ...mapState(['city']),
            getCity: {
                get() {
                    return this.city
                },
                set(val) {
                  this.setCity(val)
                }
            }
       },
       methods: {
            ...mapMutations(['setCity']),
            ...mapActions(['getWeather'])
       },
    }
</script>
