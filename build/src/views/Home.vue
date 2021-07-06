<template>
  <div class="home">
    <h1>Store</h1>

      <!-- mode selection -->
      <ul class="selection">
        <li @click="selectMode('articlesSelected')" :class="{'highlight': articles, 'opacity-low': !articles}">Articles</li>
        <li @click="selectMode('containersSelected')" :class="{'highlight': containers, 'opacity-low': !containers }">Containers</li>
      </ul>
    <searchComponent></searchComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import searchComponent from '@/components/searchComponent.vue'

export default {
  name: 'home',
  components: {
    searchComponent
  },
  data() {
    return {
      
      
    }
  },
  methods: {
    selectMode(mode) {
      if (mode === 'articlesSelected') {
        this.$store.state.currentSelection = 'getArticles'
      } else { this.$store.state.currentSelection = 'getContainers' }
      this.$store.state.articlesSelected=false;
      this.$store.state.containersSelected=false;
      this.$store.state[mode] = true;
      
    }
  },
  computed: {
    articles(){ return this.$store.state.articlesSelected},
    containers(){ return this.$store.state.containersSelected},
  }
  
}
</script>
<style scoped>

.highlight {
  opacity: 1;
}

.opacity-low {
  opacity: .6;
}

.selection {
  margin-bottom: 1rem;
  color: #2b435d;
}

@media (min-width: 1000px) {
  

  .selection {
    flex-direction: column;
    margin-left: 1rem;
    
  }
  .selection li {
    cursor: pointer;
    
  }

  
}
</style>
