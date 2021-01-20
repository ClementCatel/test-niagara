<template>
  <v-footer absolute color="white" elevation="6" height="120" class="px-16">
    <v-btn color="primary" outlined rounded @click="previousStep"><v-icon left>mdi-arrow-left</v-icon>Précédent</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="primary" :disabled="disabled" rounded @click="nextStep">{{ nextButtonText }}</v-btn>
  </v-footer>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: function () {
        return true
      }
    },

    nextButtonText: {
      type: String,
      default: function() {
        return 'Suivant'
      }
    }
  },

  methods: {
    previousStep() {
      this.$emit('previous')
    },

    nextStep() {
      this.$emit('next')
    }
  },
}
</script>
