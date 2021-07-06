<template>
  <div class="favourites-list">
    <h1>List</h1>
    <h1 v-if="!favouritesList">No saved items</h1>
    <p v-if="!favouritesList">You can create a custom list of items by clicking the <i class="fas fa-plus"></i> symbol on the item card in the 'Shop' tab. Any item you add will be displayed here. To remove the item, simply click the remove button.</p>


    <div class="results-wrapper" v-if="favouritesList">
      <div class="results-list-wrap" v-for="(result, index) in favourites" :key=index>
        <resultsComponent :result="result" :list="true"></resultsComponent>

      </div>
    </div>

  </div>
</template>
<script>
import resultsComponent from '../components/resultsComponent.vue'
export default {
  components: {
    resultsComponent
  },
  computed: {
    favouritesList() {
      if (this.$store.state.favouritesList.length >=1) {return true} else {return false}
    },
    favourites() {
      return this.$store.state.favouritesList
    }
  }
}
</script>

<style scoped>

.favourites-list {
  display: grid;
}
.fa-plus {
  color: #2b435d;
}

.results-wrapper {
  position: relative;
  grid-gap: 1rem;
  
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 1rem 0;
}

.results-list-wrap {
  
  border-radius: 15px;
  width: 100%;
  background: #fff;
  min-height: 280px;
  display: grid;
  align-items: flex-end;
  width: 250px;
}

@media (min-width: 1000px) {
  .results-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    width: 100%;
    grid-gap: 1rem;
    padding: 1rem;
  }
}

/* @media (max-width: 999px) {
  .favourites-list {
    justify-content: center;
  }
} */
</style>