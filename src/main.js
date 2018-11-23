import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;
import json from "./json/data_user.json";

// let getData = () => JSON.parse(localStorage.getItem("data"));
// let setData = a => localStorage.setItem("data", JSON.stringify(a));

// let checkData = () => {
//   if (getData() == null) {
//     setData({
//       user: [
//         {
//           nom: "Desvallées",
//           prenom: "Alexandre",
//           email: "alex.desvallees@gmail.com",
//           password: "test",
//           connecté: false,
//           planning: [
//             {
//               date: "",
//               duree: "",
//               typeConges: ""
//             }
//           ]
//         }
//       ]
//     });
//   }
// };

new Vue({
  data: {
    myJson: json
  },
  router,
  mounted() {
    // Mettre le code localstorage
    localStorage.setItem("data", JSON.stringify(this.myJson));
    // console.log(localStorage);
  },
  methods: {},
  render: h => h(App)
}).$mount("#app");
