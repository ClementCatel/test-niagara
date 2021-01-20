<template>
  <v-container>
    <h1>Renseignez la carte</h1>

    <v-form v-model="valid" class="pt-6">
      <vue-dropzone 
        ref="myVueDropzone" 
        id="dropzone" 
        :options="dropzoneOptions" 
        :useCustomSlot="true"
        class="my-8"
      >
        <div>
          <h3>Glisser et déposer vos fichiers ici</h3>
          Ou chercher un fichier
        </div>
      </vue-dropzone>

      <v-text-field
        v-model="cardName"
        label="Donner un nom à votre carte"
        solo
        :rules="[v => !!v]"
      ></v-text-field>

      <v-select
        v-model="selectedTags"
        :items="tags"
        chips
        label="Ajouter des étiquettes d’équipe"
        item-text="title"
        return-object
        multiple
        solo
        :rules="[v => v.length > 0]"
      >
        <template v-slot:selection="data">
          <v-chip
            dark
            :color="data.item.color"
            v-bind="data.attrs"
            :input-value="data.selected"
            @click="data.select"
          >
            {{ data.item.title }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <v-list-item-content class="d-block">
            <v-chip dark :color="data.item.color">{{ data.item.title }}</v-chip>
          </v-list-item-content>
        </template>
      </v-select>
    </v-form>

    <n-footer
      :disabled="!valid"
      @next="nextStep" 
      @previous="previousStep" 
    />
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import vue2Dropzone from 'vue2-dropzone'
import NFooter from '@/components/NFooter'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  components: {
    vueDropzone: vue2Dropzone,
    NFooter
  },

  data() {
    return {
      valid: true,
      cardName: '',
      selectedTags: [],
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  },

  computed: {
    ...mapState({
      tags: state => state.tags,
      card: state => state.cards.card
    })
  },

  methods: {
    ...mapMutations({ 
      setCurrentStep: 'SET_CURRENT_STEP',
      setCard: 'SET_CARD'
    }),

    nextStep() {
      this.setCard({
        name: this.cardName,
        tags: this.selectedTags
      })
      this.setCurrentStep(3)
      this.$router.push({ name: 'step3' })
    },

    previousStep() {
      this.setCurrentStep(1)
      this.$router.push({ name: 'step1' })
    }
  },

  mounted() {
    this.cardName = this.card.name || ''
    this.selectedTags = this.card.tags || []
  },
}
</script>