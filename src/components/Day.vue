<template>
    <div class="main__week-item">
        <p class="main__week-item-weekday">{{ getWeekDay }}</p>
        <p class="main__week-item-month">{{ getDay }} {{ getMonth }}</p>
        <img :src="getImg" alt="" class="main__week-item-img">
        <p class="main__week-item-temp">{{ Math.round(day.temp.max) }}°</p>
        <p class="main__week-item-info">{{ day.weather[0].description }}</p>
    </div>
</template>

<script>
import { weatherName } from '@/icon'
import { unix } from '@/unix'
    export default {
        props: {
            day: {
                type: Object
            }
        },
        computed: {
            getImg() {
                return weatherName[this.day.weather[0].description] || weatherName['пасмурно']
            },
            getWeekDay() {
                return unix(this.day.dt, 'weekday')
            },
            getDay() {
                return unix(this.day.dt, 'day')
            },
            getMonth() {
                return unix(this.day.dt, 'month')
            }
        }
    }
</script>

