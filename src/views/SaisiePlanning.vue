<template>
  <div id="saisiePlanning">
    <b-container fluid>
      <b-form @submit="onSubmit" @reset="onReset" v-if="modif">
          <div class="row justify-content-center" style="padding: 5px;">
            <b-col col md="2" >
              <b-form-group id="joursListeInputGroup"
                              label="Date du jour :"
                              label-for="joursListeInput">
                      <b-form-input id="joursListeInput"
                              type="date"
                              v-model="myJson.date"
                              required>
                      </b-form-input>
                  </b-form-group>
            </b-col>
            <b-col col md="2">
              <b-form-group label="Je suis présent :">
                  <b-form-radio-group id="boutonPresence"
                                  button-variant
                                  v-model="myJson.presence"
                                  :options="optionsPresence"
                                  :change="myJson.presence"
                                  name="radioBtnPresence" />
              </b-form-group>
            </b-col>
          </div>
          <div v-if="myJson.presence == false">
            <b-row class="justify-content-center" style="padding: 5px;">
                <b-form-group label="Cocher la durée de l'absence :">
                    <b-form-radio-group id="boutonDuree"
                                    button-variant
                                    v-model="myJson.duree"
                                    :options="optionsDuree"
                                    name="radioBtnDuree" />
                </b-form-group>
            </b-row>
            <b-row class="justify-content-center" style="padding: 5px;">
                <b-form-group label="Cocher le type de congés :">
                        <b-form-radio-group id="boutonConges"
                                    buttons
                                    size="sm"
                                    v-model="myJson.typeConges"
                                    :options="optionsConges"
                                    name="radioBtnConges" />
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
import json from "../json/data_user.json";

export default {
  data() {
    return {
      myJson: json,
      modif: true,
      selectedDuree: "entiere",
      optionsDuree: [
        { text: "Matinée", value: "matin" },
        { text: "Après-Midi", value: "aprem" },
        { text: "Journée Entière", value: "journee" }
      ],
      selectedConges: "cp",
      optionsConges: [
        { text: "Congés Payés", value: "cp" },
        { text: "RTT", value: "rtt" },
        { text: "Récupération", value: "recup" }
      ],
      selectedPresence: true,
      optionsPresence: [
        { text: "Oui", value: true },
        { text: "Non", value: false }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // Affiche le résultat du formulaire
      alert(JSON.stringify(this.myJson));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.myJson.date = "";
      this.myJson.duree = "";
      this.myJson.typeConges = "";
      this.myJson.presence = false;
      /* Trick to reset/clear native browser form validation state */
      this.modif = false;
      this.$nextTick(() => {
        this.modif = true;
      });
    }
  }
};
</script>