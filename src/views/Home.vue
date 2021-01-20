<template>
	<v-container>
    <h1 class="mt-15">Bienvenue</h1>

    <div class="d-flex justify-space-between align-center py-10">
      <div>
        <v-select
          v-model="selectedTags"
          :items="tags"
          chips
          label="Filtres"
          item-text="title"
          return-object
          multiple
          solo
          hide-details
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              @click="data.select"
              dark
              :color="data.item.color"
            >
              {{ data.item.title }}
            </v-chip>
          </template>
        </v-select>
      </div>

      <v-btn color="primary" rounded large :to="{ name: 'step1' }">
        <v-icon left>
          mdi-plus
        </v-icon>
        Ajouter une carte
      </v-btn>
    </div>

    <v-card 
      v-for="(card, index) in cards" 
      :key="index" 
      class="d-flex justify-space-between align-center mb-4"
    >
      <v-card-title>{{ card.name }}</v-card-title>
      <div class="px-8">
        <v-chip 
          v-for="(tag, index) in card.tags" 
          :key="index" 
          class="ml-2" 
          dark 
          :color="tag.color">
          {{ tag.title }}
        </v-chip>
      </div>
    </v-card>

    <p v-if="cards.length < 1" class="text-center">C'est bien vide ici...</p>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  
  data() {
    return {
      selectedTags: []
    }
  },

  computed: {
    ...mapState({
      cards: state => state.cards.cards,
      tags: state => state.tags
    }),
    ...mapGetters({
      cardsByTags: 'getCardsByTags'
    }),
    cards () {
      return this.cardsByTags(this.selectedTags)
    }
  }
}
</script>
