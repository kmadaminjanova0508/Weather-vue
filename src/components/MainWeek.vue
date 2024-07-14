<template>
    <div class="main__week">
        <Day
            v-for="(day, i) in weather.daily"
            :key="i"
            :day="day"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Day from '@/components/Day.vue'
    export default {
        components: {
            Day
        },
        computed: {
            ...mapState(['weather'])
        }
    }
</script>

