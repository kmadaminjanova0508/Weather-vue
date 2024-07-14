<template>
    <div class="main__content">
        <div class="main__content-left">
            <p class="main__content-left-degree">{{ Math.round(weather.current.temp) }}°</p>
            <p class="main__content-left-today">Сегодня</p>
            <p class="main__content-left-time">Время: {{ getTime }}</p>
            <p class="main__content-left-city">Город: {{ weather.name.toUpperCase() }}</p>
            <img :src="getImg" alt="" class="main__content-left-img">
        </div>
        <div class="main__content-right">
            <img src="@/assets/images/headerBg.svg" alt="" class="main__content-right-bg">
            <div class="main__content-right-item" v-for="item in content" :key="item.name">
                <div class="main__content-right-item-img">
                    <img :src="item.img" alt="">
                </div>
                <span>{{ item.name }}</span>
                <p>{{ item.info }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { weatherName } from '@/icon'
    export default {
        computed: {
            ...mapState(['weather']),
            getTime() {
                return new Date().toLocaleString('ru-Ru', {
                    timeZone: this.weather.timezone,
                    timeStyle: 'short',
                    hourCycle: 'h23'
                })
            },
            description () {
                return this.weather.current.weather[0].description
            },
            getImg() {
                return weatherName[this.description] || weatherName['пасмурно']
            },
            content() {
                return [
                    { 
                        img: require('@/assets/images/temp.svg'), 
                        name: 'Температура',
                        info: `${Math.round(this.weather.current.temp)}° - ощущается как ${Math.round(this.weather.current.feels_like)}°`
                    },
                    { 
                        img: require('@/assets/images/davlenie.svg'), 
                        name: 'Давление',
                        info: `${this.weather.current.pressure} мм ртутного столба - нормальное`
                    },
                    { 
                        img: require('@/assets/images/osadki.svg'), 
                        name: 'Облочность',
                        info: `${this.weather.current.clouds}%`
                    },
                    { 
                        img: require('@/assets/images/wind.svg'), 
                        name: 'Ветер',
                        info: `${this.weather.current.wind_speed}м/с`
                    },
                ]
            }
        }
    }
</script>

