<template>
  <div>
    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="modif">
        <div class="row">
            <b-form-group id="nomInputGroup"
                            label="Nom:"
                            label-for="nomInput">
                <b-form-input id="nomInput"
                            type="text"
                            v-model="form.nom"
                            required
                            placeholder="Entrer votre nom">
                </b-form-input>
            </b-form-group>
            <b-form-group id="prenomInputGroup"
                        label="Prenom :"
                        label-for="prenomInput">
            <b-form-input id="prenomInput"
                        type="text"
                        v-model="form.prenom"
                        required
                        placeholder="Entrer votre prenom">
            </b-form-input>
        </div>
        <div class="row">
            <b-form-group id="emailInputGroup"
                        label="Adresse Mail :"
                        label-for="mailInput">
            <b-form-input id="mailInput"
                        type="text"
                        v-model="form.email"
                        required
                        placeholder="Entrer votre prenom">
            </b-form-input>
        </b-form-group>
        </div>
        <div class="row">
            <b-button type="submit" variant="success" style="margin: 5px;">Connection</b-button>
            <b-button type="reset" variant="danger">Réinitialiser</b-button>
        </div>
    </b-form> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nom: '',
        prenom: '',
        email: ''
      },
      modif: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // Affiche le résultat du formulaire de connexion : email et password
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.modif = false;
      this.$nextTick(() => { this.modif = true });
    }
  }
}
</script>