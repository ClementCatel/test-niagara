<template>
  <v-stepper alt-labels v-model="currentStep">
    <v-container>
      <v-stepper-header class="elevation-0">
        <v-stepper-step step="1">
          Etape 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">
          Etape 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Etape 3
        </v-stepper-step>
      </v-stepper-header>
    </v-container>
  </v-stepper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentStep'])
  }
}
</script>