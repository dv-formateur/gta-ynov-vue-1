<template>
  <div id="saisiePlanning">
    <b-form @submit="onSubmit" @reset="onReset" v-if="modif">
        <div class="row justify-content-center" style="padding: 5px;">
                <b-form-group id="joursListeInputGroup"
                            label="Jours :"
                            label-for="joursListeInput">
                    <b-form-input id="joursListeInput"
                            type="date"
                            v-model="myJson.date"
                            required>
                    </b-form-input>
                </b-form-group>
        </div>
        <b-row class="justify-content-center" style="padding: 5px;">
            <b-form-group label="Cocher la durée :">
                <b-form-radio-group id="boutonDuree"
                                button-variant
                                v-model="myJson.duree"
                                :options="optionsDuree"
                                name="radioBtnDuree"
                                required />
            </b-form-group>
        </b-row>
        <b-row class="justify-content-center" style="padding: 5px;">
            <b-form-group label="Cocher le type de congés :">
                    <b-form-radio-group id="boutonConges"
                                buttons
                                size="sm"
                                v-model="myJson.typeConges"
                                :options="optionsConges"
                                name="radioBtnConges"
                                required />
                </b-form-group>
        </b-row>
        <b-row class="justify-content-center" style="padding: 5px;">
            <b-button type="submit" size="lg" variant="success" style="margin: 5px;">Valider</b-button>
            <b-button type="reset" size="lg" variant="danger" style="margin: 5px;">Reset</b-button>
        </b-row>
    </b-form>
  </div>
</template>

<script>
import json from '../json/data_user.json'

export default {
  data () {
    return {
      myJson: json,
      modif: true,
      selectedDuree: 'entiere',
      optionsDuree: [
        { text: 'Matinée', value: 'matin' },
        { text: 'Après-Midi', value: 'aprem' },
        { text: 'Journée Entière', value: 'journee' }
      ],
      selectedConges: 'cp',
      optionsConges: [
          { text: 'Congés Payés', value: 'cp'},
          { text: 'RTT', value: 'rtt'},
          { text: 'Récupération', value: 'recup'}
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // Affiche le résultat du formulaire
      alert(JSON.stringify(this.myJson));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.myJson.date = '';
      this.myJson.duree = '';
      this.myJson.typeConges = '';
      /* Trick to reset/clear native browser form validation state */
      this.modif = false;
      this.$nextTick(() => { this.modif = true });
    }
  }
}
</script>