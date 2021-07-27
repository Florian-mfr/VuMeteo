import { createStore } from 'vuex'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1'
});

export default createStore({
  state: {
    currentWeather: {},
    forecastWeather: {},
    locationWeather: {},
    iconPath: ''
  },
  mutations: {
    getWeather: (state, weather) => {
      state.currentWeather = weather.current
      state.forecastWeather = weather.forecast
      state.locationWeather = weather.location
    },
    getIconPath: (state, weather) => {
      let url = weather.current.condition.icon.split("com");
      state.iconPath = '../img' + url[1]
    }
  },
  actions: {
    getWeather: ({ commit }, city) => {
      return new Promise((resolve, reject) => {
        instance.get(`forecast.json?key=92de2517212e42e78a4193948212507&q=${city}&aqi=no&days=3`)
          .then(res => {
            commit('getIconPath', res.data);
            commit('getWeather', res.data);
            resolve(res)
          })
          .catch(err => reject(err))
      });
    }
  },
  modules: {
  }
})
