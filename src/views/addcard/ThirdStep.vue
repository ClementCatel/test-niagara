<template>
  <v-container>
    <h1>
      Sélectionner le déclencheur
    </h1>

    <v-form v-model="valid" class="pt-6">
      <v-select
        :items="triggers"
        v-model="selectedTrigger"
        label="Choissez le type de déclencheur pour mettre à jour les données"
        solo
        :rules="[v => !!v]"
      ></v-select>

      <p>Choissez la date de mise à jour attendue (pour envoyer une alerte en cas de non réalisation)</p>
      
      <div class="d-flex align-center">
        <v-date-picker v-model="date"></v-date-picker>
        <h3 class="pa-6">{{ dateFr }}</h3>
      </div>
    </v-form>

    <n-footer
      :disabled="!valid"
      next-button-text="Terminer" 
      @next="next" 
      @previous="previousStep" 
    />
  </v-container>
</template>

<script>
import NFooter from '@/components/NFooter'
import { mapActions, mapMutations } from 'vuex'

export default {
  components: {
    NFooter
  },

  data() {
    return {
      valid: true,
      triggers: [
        'Manuel',
        'Action prédéfnie',
        'Calendrier'
      ],
      selectedTrigger: '',
      date: new Date().toISOString().substr(0, 10),
    }
  },

  computed: {
    dateFr () {
      return new Date(this.date).toLocaleDateString("fr", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
    }
  },

  methods: {
    ...mapActions(['addCard']),
    ...mapMutations({ 
      setCurrentStep: 'SET_CURRENT_STEP',
      setCard: 'SET_CARD'
    }),

    next() {
      this.setCard({
        trigger: this.selectedTrigger,
        date: this.date
      })
      this.addCard()
      this.setCurrentStep(1)
      this.$router.push({ name: 'home' })
    },

    previousStep() {
      this.setCurrentStep(2)
      this.$router.push({ name: 'step2' })
    }
  },
}
</script>