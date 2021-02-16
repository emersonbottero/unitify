import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@/scss/main.scss";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {      
      customProperties: true
    },
    themes: {
      light: {
        primary: "#012f6b",
        secondary: "#215795",
        accent: "#3a397b",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
