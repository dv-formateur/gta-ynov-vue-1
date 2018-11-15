<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="emailInputGroup"
                    label="Adresse Mail :"
                    label-for="emailInput"
                    description="Votre adresse mail nous est précieuse, nous ne la divulguerons pas.">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Entrer votre adresse mail">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordInputGroup"
                    label="Mot de passe :"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Entrer votre mot de passe">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success" style="margin: 5px;">Connection</b-button>
      <b-button type="reset" variant="danger">Réinitialiser</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
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
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- b-form-1.vue -->