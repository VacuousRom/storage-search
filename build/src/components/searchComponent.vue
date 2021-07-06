<template>
  <div class="search-component">
    <div class="side-bar-section">
      
      <!-- search bar imported-->
      <search-bar @updateSearch="searchValue=$event"></search-bar>

      <!-- info section -->
      <p>You can create a custom list of items by clicking the <i class="fas fa-plus"></i> symbol. Any item you add will be displayed in the 'List' (<i class="fas fa-clipboard-list"></i>) tab.</p>
     
      
    </div>

    <!-- display section -->
    <div class="results-section">
      
      <!-- results component  -->
      <div class="result-wrap" v-for="(result, index) in results" :key=index>

      <results-component :result="result" @addAFavourite="addToFavourites($event)" ></results-component>
      
      </div>
      <p class="info-msg" v-if="filteredItems.length==0 && searchValue != ''">{{errorMessage}}</p>


    </div>
    <!-- info component that informs if something was added to the custom list or if something is already there -->
    <transition name="fade">
    <info-component v-if="displayInfo" :infoMessage="infoMessage" ></info-component>
    </transition>
  </div>
</template>

<script>
import resultsComponent from './resultsComponent.vue'
import infoComponent from './infoComponent.vue'
import searchBar from './searchBar.vue'
import {setTimeout} from 'timers';

export default {
  name: "searchComponent",
  components: {
    resultsComponent,
    infoComponent,
    searchBar,
  },
  data() {
    return {
      searchValue: '',
      displayFiltered: false,
      displayInfo: false,
      infoMessage: ''
    }
  },
  methods: {
    showInfo(msg) {
      
      this.displayInfo = true;
      this.infoMessage = msg;
      setTimeout(()=> {
      this.displayInfo = false;
        
      },1000)
    },
    // function that handles adding to the list in store by pushing to the array
    addToFavourites(result) {
      if (!this.$store.state.favouritesList.includes(result)) {
        this.$store.state.favouritesList.push(result);
      } else {
        this.showInfo('Artykuł o kodzie ' + result[this.filterBy] + ' znajduje się już na liście!')
        return
      }
      this.showInfo('Artykuł o kodzie ' + result[this.filterBy] + ' został dodany do listy.')
      this.$store.state.notificationMsgArr.push('Artykuł o kodzie ' + result[this.filterBy] + ' został dodany do listy.')
      
    },

  },

  computed: {
    errorMessage() {
      if (this.$store.state.articlesSelected) {
        return "Artykuł o kodzie " + this.searchValue + " nie istnieje!"
      } else if (this.$store.state.containersSelected) {
        return "Artykuł o kodzie " + this.searchValue + " nie istnieje lub jest nieaktywny!"

      }
    },

    // helper computed function to sort results wether by articles or containers
    mode() {
      if (this.$store.state.currentSelection === "getArticles") {
        return "articles"
      } else if (this.$store.state.currentSelection === "getContainers") {
        return "boxes"
      }
    },

    // function that helps to resize everything on larger screens
    screenWidth() {
       if (this.$store.state.windowWidth >= 1600) {
         return true
       } else {
         return false
       }
    },

    // function that returns either all articles, all boxes or filtered items if the user started typing in the search box
    results() {
      if (this.$store.state.articlesSelected && this.searchValue === '') {
        return this.$store.getters.getArticles[this.mode]
      }
      if (this.$store.state.containersSelected && this.searchValue === '') {
        return this.$store.getters.getContainers[this.mode]
      }
      else {
        return this.filteredItems;
      }
    },

    // a helper function used by filtered items, returns the object key by which the array is sorted
    filterBy(){
      if (this.mode==="articles") { return "code"} else if (this.mode ==="boxes") {return "BoxCode"}
    },

    // function that filters the results from the input field by returning a filtered temporary array
    // this function would have been in vuex (so other components have an easier time using it) but due to the project specification it's here!
    filteredItems() {
      let temporaryItems = this.$store.getters[this.$store.state.currentSelection][this.mode]

      if (this.searchValue != '' && this.searchValue) {
        temporaryItems = temporaryItems.filter((item) => {
          
          return item[this.filterBy].toString()
            .includes(this.searchValue.toString())
            
        })
      }

      temporaryItems = temporaryItems.filter((item) => {
        return item[this.filterBy].toString()
            .includes(this.searchValue.toString());
      })
      
      return temporaryItems;
    }

  },
};
</script>

<style scoped>
* {
  color: #2b435d;
}

.search-component {
  position: relative;
}

.search-wrap {
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  background: #fff;
  max-height: 75px;
}
.search-input {
  width: 85%;
  border: none;
  height: 2.2rem;
  font-size: 1.4rem;
  line-height: 2rem;
  background: #fff;
  outline: none;
  margin-right: 0.5rem;
}

p {
  font-weight: bold;
}

/* result styling */
.results-section {
  display: grid;
}

.result-wrap {
  position: relative;
  background: #fff;
  border-radius: 15px;
  width: 250px;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 1rem 0;
}

@media (min-width: 1000px) {
  .search-component {
    grid-template-columns: 2fr 4fr;
    align-items: baseline;
  }

  .results-section {
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    width: 100%;
    grid-gap: 1rem;
  }

  .sort-table {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }
  .sort-table li {
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid #2b435d;
    width: 100%;
    line-height: 2rem;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
  }

  .fa-plus {
    align-self: center;
    
  }

  .fa-search {
    cursor: pointer;
  }

}
</style>
