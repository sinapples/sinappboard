import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        taro: '#b49fcc',
        thai: '#ffac81',
        matcha: '#bbd79b',
        berry: '#fda3cc',
        milk: '#deb780',
        primary: '#abdae1',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})
