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
    return {
    };
  },
  methods: {},
  computed: {
    ...mapState({
      weather: "currentWeather",
      location: "locationWeather",
      iconPath: 'iconPath'
    }),
  },
};
</script>

<style lang="scss">
@import "../settings.scss";
.current {
  .container {
    @include flex-center;
    flex-direction: column;
    //background: linear-gradient(#ffedb2, #a76b43);
    background: linear-gradient(#547696, #0f244b);
    background-size: cover;
    background-position: center;
    height: 100vh;
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
</style>