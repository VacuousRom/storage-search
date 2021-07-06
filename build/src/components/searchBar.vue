<template>
  <div class="search-wrap">
        <input type="number"  placeholder="Search by ID..." class="search-input" v-model="searchValue" :maxLength="checkLength" @input="checkLength" />        
        <i class="fas fa-search fa-2x"></i>
      </div>
</template>

<script>
export default {
    data(){
        return {
            searchValue: '',
        }
    },
    methods: {
        // function that checks if the input field has a correct amount of characters by slicing any amount over
        //correct amount of characters is taken from computed based on what the user is actually browsing: articles or boxes
        checkLength(){
            
            if (this.searchValue.length > this.charLen) {
                this.searchValue = this.searchValue.slice(0, this.charLen)}
                this.$emit('updateSearch', this.searchValue )
            }
            

    },
    computed: {
            // helper computed function used to set the desired max amount of characters in the input field based on what the user is searching for
            //the selected mode is tracked in  vuex store
            charLen() {
            if (this.$store.state.currentSelection === "getArticles") {
                return "13"
            } else if (this.$store.state.currentSelection === "getContainers") {
                return "6"
            }
        },
    }
}
</script>

<style scoped>
* {
  color: #2b435d;
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

.fa-search {
    cursor: pointer;
  }

</style>