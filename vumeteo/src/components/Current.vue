<template>
  <div class="current">
    <div class="container" v-if="iconPath">
      <h1>{{ location.name }}, {{ location.country }}</h1>
      <span>{{ weather.temp_c }}°</span>
      <img :src="iconPath" :alt="weather.condition.text" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Current",
  data: () => {
    return {};
  },
  methods: {},
  computed: {
    ...mapState({
      weather: "currentWeather",
      location: "locationWeather",
      iconPath: "iconPath",
    }),
  },
};
</script>

<style lang="scss">
@import "../settings.scss";
.current {
  background: linear-gradient(#997d4a, #406180);
  background-size: cover;
  background-position: center;
  height: 50vh;
  .container {
    @include flex-center;
    flex-direction: column;
    height: 100%;
    padding-top: 20px;
    color: $white;
    h1 {
      margin: 20px 5px;
      font-size: 35px;
      text-align: center;
    }
    span {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    img {
      width: 120px;
    }
  }
}
.day {
  background: linear-gradient(#c08964, #ffedb2);
}
</style>