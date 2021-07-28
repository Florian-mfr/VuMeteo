import { createStore } from 'vuex'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1'
});

export default createStore({
  state: {
    currentWeather: {},
    locationWeather: {},
    iconPath: '',
    hoursForecast: []
  },
  mutations: {
    getCurrentWeather: (state, weather) => {
      state.currentWeather = weather.current
      state.locationWeather = weather.location
    },
    getIconPath: (state, condition) => {
      let url = condition.icon.split("com");
      state.iconPath = '../img' + url[1]
    },
    getDayWeather: (state, weather) => {
      console.log(weather.forecast.forecastday[0].hour)
      state.hoursForecast = weather.forecast.forecastday[0].hour
    }
  },
  actions: {
    getWeather: ({ commit }, city) => {
      return new Promise((resolve, reject) => {
        instance.get(`forecast.json?key=92de2517212e42e78a4193948212507&q=${city}&aqi=no&days=3`)
          .then(res => {
            commit('getIconPath', res.data.current.condition);
            commit('getCurrentWeather', res.data);
            commit('getDayWeather', res.data);
            resolve(res)
          })
          .catch(err => reject(err))
      });
    }
  },
  modules: {
  }
})
