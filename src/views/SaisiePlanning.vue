<template>
  <div id="saisiePlanning">
    <b-container fluid>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-alert v-if="this.showDismissibleAlert == true" show variant="danger" >Une saisie existe déjà, veuillez reset puis enregistrer votre saisie</b-alert>
          <!-- Ligne pour la date et le bouton de présence -->
          <div class="row justify-content-center" style="padding: 5px;">
            <b-col col md="2" >
              <b-form-group id="joursListeInputGroup"
                              label="Date du jour :"
                              label-for="joursListeInput">
                      <b-form-input id="joursListeInput"
                              type="date"
                              v-model="myJson.user[0].planning[0].date"
                              required>
                      </b-form-input>
              </b-form-group>
            </b-col>
            <b-col col md="2">
              <b-form-group label="Je suis présent :">
                  <b-form-radio-group id="boutonPresence"
                                      button-variant
                                      v-model="myJson.user[0].planning[0].presence"
                                      :options="optionsPresence"
                                      :change="myJson.user[0].planning[0].presence"
                                      name="radioBtnPresence" />
              </b-form-group>
            </b-col>
          </div>
          <!-- Ligne pour la saisie des heures -->
          <b-row v-if="myJson.user[0].planning[0].presence == true" class="justify-content-center" style="padding: 5px;">
            <b-form-group id="heureDebInputGroup"
                          label="Heure début de journée :"
                          label-for="heureDebInput"
                          style="padding: 5px;">
                <b-form-input id="heureDebInput"
                              type="time"
                              v-model="myJson.user[0].planning[0].heureDeb"
                              required>
                </b-form-input>
            </b-form-group>
            <b-form-group id="pauseMidiInputGroup"
                              label="Durée pause midi :"
                              label-for="pauseMidiInput"
                              style="padding: 5px;">
                      <b-form-input id="pauseMidiInput"
                              type="time"
                              v-model="myJson.user[0].planning[0].pauseMidi"
                              required>
                      </b-form-input>
            </b-form-group>
            <b-form-group id="heureFinInputGroup"
                              label="Heure de fin de journée :"
                              label-for="heureFinInput"
                              style="padding: 5px;">
                      <b-form-input id="heureFinInput"
                              type="time"
                              v-model="myJson.user[0].planning[0].heureFin"
                              required>
                      </b-form-input>
            </b-form-group>
          </b-row>
          <!-- Ligne si on n'est pas présent, alors on affiche le choix pour dire la raison de l'absence la durée -->
          <div v-if="myJson.user[0].planning[0].presence == false">
            <b-row class="justify-content-center" style="padding: 5px;">
                <b-form-group label="Cocher la durée de l'absence :">
                    <b-form-radio-group id="boutonDuree"
                                    button-variant
                                    v-model="myJson.user[0].planning[0].duree"
                                    :options="optionsDuree"
                                    name="radioBtnDuree" 
                                    required/>
                </b-form-group>
            </b-row>
            <b-row class="justify-content-center" style="padding: 5px;">
                <b-form-group label="Cocher le type de congés :">
                        <b-form-radio-group id="boutonConges"
                                    buttons
                                    size="sm"
                                    v-model="myJson.user[0].planning[0].typeConges"
                                    :options="optionsConges"
                                    name="radioBtnConges" 
                                    required/>
                    </b-form-group>
            </b-row>
          </div>
          <b-row class="justify-content-center" style="padding: 5px;">
              <b-button type="submit" size="lg" variant="success" style="margin: 5px;">Valider</b-button>
              <b-button type="reset" size="lg" variant="danger" style="margin: 5px;">Reset</b-button>
          </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myJson: {},
      modif: true,
      showDismissibleAlert: false,
      optionsDuree: [
        { text: "Matinée", value: "matin" },
        { text: "Après-Midi", value: "aprem" },
        { text: "Journée Entière", value: "journee" }
      ],
      optionsConges: [
        { text: "Congés Payés", value: "cp" },
        { text: "RTT", value: "rtt" },
        { text: "Récupération", value: "recup" }
      ],
      optionsPresence: [
        { text: "Oui", value: true },
        { text: "Non", value: false }
      ]
    };
  },
  mounted() {
    // On récupère le localstorage dans la page
    this.myJson = JSON.parse(localStorage.getItem("data"));
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // Affiche le résultat du formulaire dans une popup
      // alert(JSON.stringify(this.myJson));

      //Contrôles si on saisie une présence ou une absence
      if (this.myJson.user[0].planning[0].presence == true) {
        if (this.myJson.user[0].planning[0].typeConges != null) {
          this.showDismissibleAlert = true;
          console.log(this.showDismissibleAlert);
          throw "reset your current demand";
          // throw new ExceptionUtilisateur("reset your current demand");
        } else {
          // Ajout dans le localstorage
          localStorage.setItem("data", JSON.stringify(this.myJson));
        }
      } else {
        if (this.myJson.user[0].planning[0].heureDeb != null) {
          this.showDismissibleAlert = true;
          console.log(this.showDismissibleAlert);
          throw "reset your current demand";
          // throw new ExceptionUtilisateur("reset your current demand");
        } else {
          // Ajout dans le localstorage
          localStorage.setItem("data", JSON.stringify(this.myJson));
        }
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.myJson.user[0].planning[0].date = null;
      this.myJson.user[0].planning[0].duree = null;
      this.myJson.user[0].planning[0].typeConges = null;
      this.myJson.user[0].planning[0].heureDeb = null;
      this.myJson.user[0].planning[0].heureFin = null;
      this.myJson.user[0].planning[0].pauseMidi = null;
      /* Trick to reset/clear native browser form validation state */
      this.modif = false;
      this.showDismissibleAlert = false;
      this.$nextTick(() => {
        this.modif = true;
      });
      localStorage.setItem("data", JSON.stringify(this.myJson));
    },
    ExceptionUtilisateur(message) {
      this.message = message;
      this.name = "ExceptionUtilisateur";
    }
  }
};
</script>