<template>
  <div>
    <div class="location">
      <input type="text" placeholder="Location..." v-model="location" />
      <button @click="validateLocation()"><i class="fas fa-search"></i></button>
    </div>

    <Current />
      <Forecast />
    <router-link to="/details">
    </router-link>
  </div>
</template>

<script>
import Forecast from "@/components/Forecast.vue";
import Current from "@/components/Current.vue";
export default {
  name: "Home",
  components: { Forecast, Current },
  data: () => {
    return {
      location: "",
    };
  },
  methods: {
    validateLocation() {
      this.$store.dispatch('getWeather', this.location)
    },
  },
};
</script>

<style lang="scss">
@import "../settings.scss";
.location {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  background-color: $white;
  border-radius: 5px;
  overflow: hidden;
  height: 35px;
  box-shadow: 0 0 10px;
  opacity: 0.8;
  input {
    border: none;
    font-size: 15px;
    padding: 5px;
    height: 100%;
  }
  button {
    border: none;
    font-weight: 800;
    background: none;
    height: 100%;
    font-size: 17px;
  }
}
</style>