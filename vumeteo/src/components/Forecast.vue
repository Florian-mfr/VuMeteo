<template>
    <h1>{{forecast[0].temp_c}}</h1>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Forecast',
    computed: {
        ...mapState({
      forecast: "hoursForecast",
      iconPath: "iconPath",
    }),
    }
}
</script>
