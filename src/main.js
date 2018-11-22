import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;
import json from "./json/data_user.json";

let getData = () => JSON.parse(localStorage.getItem("data"));
let setData = a => localStorage.setItem("data", JSON.stringify(a));

let checkData = () => {
  if (getData() == null) {
    setData({
      user: [
        {
          nom: "Desvallées",
          prenom: "Alexandre",
          email: "alex.desvallees@gmail.com",
          password: "test",
          connecté: false,
          planning: [
            {
              date: "",
              duree: "",
              typeConges: ""
            }
          ]
        }
      ]
    });
  }
};

new Vue({
  getData: () => getData(),
  setData: obj => setData(obj),
  resetData: () => {
    localStorage.removeItem("data");
    sessionStorage.removeItem("user");
    checkData();
  },
  isLogged: () => sessionStorage.getItem("user") != null,
  isLoggin: false,
  getLoggedUser: () => JSON.parse(sessionStorage.getItem("user")),
  logout: () => sessionStorage.removeItem("user"),
  login: (login, password) => {
    checkData();
    let user = getData().users.find(
      e => e.mail == login && e.password == password
    );
    if (user != undefined) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }
    return user;
  },
  saveUser: uUser => {
    let data = getData();
    let userIndex = data.users
      .map(function(user) {
        return user.id;
      })
      .indexOf(uUser.id);
    data.users[userIndex] = uUser;
    setData(data);
    if (JSON.parse(sessionStorage.getItem("user")).id == uUser.id) {
      sessionStorage.setItem("user", JSON.stringify(uUser));
    }
  },
  data: {
    myJson: json
  },
  router,
  render: h => h(App)
}).$mount("#app");
