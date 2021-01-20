<template>
  <v-container>
    <h1>Sélectionner le format d'entrée</h1>

    <v-form v-model="valid" class="pt-6">
      <v-radio-group v-model="inputFormat" row :rules="[v => !!v]">
        <v-radio label="Fichier" value="fichier">
        </v-radio>

        <v-radio label="Application" disabled>
        </v-radio>

        <v-radio label="API" disabled>
        </v-radio>
      </v-radio-group>
    </v-form>

    <n-footer
      :disabled="!valid"
      @next="nextStep" 
      @previous="previousStep" 
    />
  </v-container>
</template>

<script>
import NFooter from '@/components/NFooter'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    NFooter,
  },

  data() {
    return {
      valid: true,
      inputFormat: ''
    }
  },

  computed: {
    ...mapState({
      card: state => state.cards.card,
    })
  },

  methods: {
    ...mapMutations({ 
      setCurrentStep: 'SET_CURRENT_STEP',
      setCard: 'SET_CARD',
      resetCard: 'RESET_CARD'
    }),

    nextStep() {
      this.setCard({ inputFormat: this.inputFormat })
      this.setCurrentStep(2)
      this.$router.push({ name: 'step2' })
    },

    previousStep() {
      this.resetCard()
      this.$router.push({ name: 'home' })
    }
  },

  mounted() {
    this.inputFormat = this.card.inputFormat || ''
  },
}
</script>