<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" @click.native="selectMode('shopActive')"><i class="fas fa-shopping-cart icon-hover" v-if="!screenWidth" :class="{'active': shopActive}"></i><span class="icon-hover" v-if="screenWidth" :class="{'active': shopActive}">Shop</span></router-link>
      <router-link to="/favourites" @click.native="selectMode('favouritesActive')"><i class="fas fa-clipboard-list icon-hover" v-if="!screenWidth" :class="{'active': favouritesActive}"></i><span class="icon-hover" v-if="screenWidth" :class="{'active': favouritesActive}">List</span></router-link>
      <router-link to="/notifications" @click.native="selectMode('notificationsActive')"><i class="far fa-bell icon-hover" v-if="!screenWidth" :class="{'active': notificationsActive}"></i><span class="icon-hover" v-if="screenWidth" :class="{'active': notificationsActive}">Notifications</span></router-link>
      <router-link to="/about" @click.native="selectMode('aboutActive')"><i class="far fa-clipboard icon-hover" v-if="!screenWidth" :class="{'active': aboutActive}"></i><span class="icon-hover" v-if="screenWidth" :class="{'active': aboutActive}">About</span></router-link>
      

    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowInnerWidth: window.innerWidth,
      shopActive: true,
      aboutActive: false,
      favouritesActive: false,
      notificationsActive: false,
    }
  },
  methods: {
    selectMode(mode) {
      this.shopActive = false;
      this.aboutActive = false;
      this.favouritesActive = false;
      this.notificationsActive = false;
      this[mode] = true;
    },
    getWindowWidth() {
      this.windowInnerWidth = window.innerWidth;
      this.$store.state.windowWidth = window.innerWidth;
    },
  },
   computed: {
    screenWidth() {
      if (this.windowInnerWidth >=1000) {
        return true;
      } else {
        return false;
      }
    },
    
  },
  created(){
    window.addEventListener('resize', this.getWindowWidth)
    this.$store.state.windowWidth = window.innerWidth;

  }
}
</script>

<style>
/* colors main: #2B435D bg: #B1B5BE */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

h1,
h3, p {
  justify-self: flex-start;
  margin: 1rem 0 1rem 1rem;
  color: #2b435d;

}

.search-component, .side-bar-section {
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  background: #f2f3f7;
}

a, i {
 text-decoration: none;
 color: #E9E9E9;
 font-size: 1.4rem;
}

ul {
  list-style: none;
}

ul li {
  font-weight: 700;
}

/*scroll */
*::-webkit-scrollbar {
  width: .5rem;
}
 
*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
*::-webkit-scrollbar-thumb {
  background-color: #2B435D;
  outline: 1px solid slategrey;
  border-radius: 5px;
}

/* hide input arrows */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

#app {
  padding-top: 90px;
  background: #F2F3F7;
  min-height: 100vh;
  position: relative;
}
/* navbar styling */

#nav {
  position: fixed;
  height: 90px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: #2B435D;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.active {
  color: #FEA53F;
}



/* sort styling */

.selection {
  display: flex;
  justify-content: space-evenly;
  grid-gap: 1rem;
}

/* transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* icon hover */
.icon-hover {
  transition: all .3s ease-in-out;
  cursor: pointer;
}
.icon-hover:hover {
  color: #FEA53F;
}
</style>
