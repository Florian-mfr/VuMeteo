<template>
  <div class="current">
    <div class="container" v-if="weather !== {}">
      <h1>{{location.name}}, {{location.country}}</h1>
      <span>{{weather.temp_c}}°</span>
      <i v-bind:class="{'fas fa-cloud-sun': isCloudSun}"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Current",
  data: () => {
    return {
      weatherIcon: weather.condition.text
    }
  },
  methods:{
    isCloudSun: () => {
      if(weatherIcon === "Partly cloud") {
        return true
      } return false
    }
  },
  computed: {
    ...mapState({
      weather: 'currentWeather',
      location: 'locationWeather'
    })
  }
};
</script>

<style lang="scss">
@import '../settings.scss';
.current {
  .container {
    @include flex-center;
    flex-direction: column;
    background-image: url('../assets/Cover.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    h1 {
      margin: 20px 0 10px;
      font-size: 30px;
    }
    span {
      font-size: 35px;
      margin-bottom: 10px;
    }
    i {
      font-size: 50px;
    }
  }
}
</style>