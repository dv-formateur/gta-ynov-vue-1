<template>
  <div id="profil">
    <b-form @submit="onSubmit" @reset="onReset" v-if="modif">
        <div class="row justify-content-center" style="padding: 5px;">
            <b-form-group id="nomProfilInputGroup"
                            label="Nom:"
                            label-for="nomInput">
                <b-form-input id="nomInput"
                            type="text"
                            v-model="myJson.user[0].nom"
                            required
                            placeholder="Entrer votre nom">
                </b-form-input>
            </b-form-group>
            <b-form-group id="prenomProfilInputGroup"
                        label="Prenom :"
                        label-for="prenomInput">
              <b-form-input id="prenomInput"
                          type="text"
                          v-model="myJson.user[0].prenom"
                          required
                          placeholder="Entrer votre prenom">
              </b-form-input>
            </b-form-group>
        </div>
        <div class="row justify-content-center" style="padding: 5px;">
        <b-form-group id="emailProfilInputGroup"
                        label="Adresse Mail :"
                        label-for="mailInput">
            <b-form-input id="mailInput"
                        type="email"
                        v-model="myJson.user[0].email"
                        required
                        placeholder="Entrer votre adresse mail">
            </b-form-input>
        </b-form-group>
        <b-form-group id="passwordProfilInputGroup"
                        label="Mot de passe :"
                        label-for="passwordInput">
            <b-form-input id="passwordInput"
                        type="password"
                        v-model="myJson.user[0].password"
                        required
                        placeholder="Pensez aux différents caractères et à une longueur supérieure à 7">
            </b-form-input>
        </b-form-group>
        </div>
        <div class="row justify-content-center" style="padding: 5px;">
            <b-button type="submit" variant="success" style="margin: 5px;">Sauvegarder</b-button>
            <b-button type="reset" variant="info" style="margin: 5px;">Annuler</b-button>
        </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modif: true,
      myJson: {}
    };
  },
  mounted() {
    // On récupère le localstorage dans la page
    this.myJson = JSON.parse(localStorage.getItem("data"));
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // Affiche le résultat du formulaire de connexion : email et password
      // alert(JSON.stringify(this.myJson));
      localStorage.setItem("data", JSON.stringify(this.myJson));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.myJson.email = "";
      this.myJson.password = "";
      /* Trick to reset/clear native browser form validation state */
      this.modif = false;
      this.$nextTick(() => {
        this.modif = true;
      });
    }
  }
};
</script>