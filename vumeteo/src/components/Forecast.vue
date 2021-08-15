<template>
  <div v-if="iconPath">
      <div>
          <h1>{{forecast[0].date}}</h1>
          <span>04h : {{ forecast[0].hour[4].temp_c }}°</span><br>
          <span>08h : {{ forecast[0].hour[8].temp_c }}°</span><br>
          <span>12h : {{ forecast[0].hour[12].temp_c }}°</span><br>
          <span>16h : {{ forecast[0].hour[16].temp_c }}°</span><br>
          <span>20h : {{ forecast[0].hour[20].temp_c }}°</span><br>
      </div>
      <div>
          <h1>{{forecast[1].date}}</h1>
          <span>04h : {{ forecast[1].hour[4].temp_c }}°</span><br>
          <span>08h : {{ forecast[1].hour[8].temp_c }}°</span><br>
          <span>12h : {{ forecast[1].hour[12].temp_c }}°</span><br>
          <span>16h : {{ forecast[1].hour[16].temp_c }}°</span><br>
          <span>20h : {{ forecast[1].hour[20].temp_c }}°</span><br>
      </div>
      
      <div>
          <h1>{{forecast[2].date}}</h1>
          <span>04h : {{ forecast[2].hour[4].temp_c }}°</span><br>
          <span>08h : {{ forecast[2].hour[8].temp_c }}°</span><br>
          <span>12h : {{ forecast[2].hour[12].temp_c }}°</span><br>
          <span>16h : {{ forecast[2].hour[16].temp_c }}°</span><br>
          <span>20h : {{ forecast[2].hour[20].temp_c }}°</span><br>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Forecast",
  computed: {
    ...mapState({
      forecast: "hoursForecast",
      iconPath: "iconPath",
    }),
  },
};
</script>
