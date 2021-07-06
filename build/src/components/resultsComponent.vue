<template>
  <div class="result">

      <i class="fas fa-plus" @click="addToFavourites(result)" v-if="!list"></i>
      
      <div class="articles-wrap " v-if="result.name">
        <p ><span class="bold-span">Name:</span> {{result.name}}</p>
        <p ><span class="bold-span">Code:</span> {{result.code}}</p>
        <p><span class="bold-span">Price:</span> {{result.price}} zł</p>
        <p ><span class="bold-span">Stock:</span> {{result.stock}}</p>
      </div>

        <div class="box-wrap " v-if="result.BoxCode">
          <p><span class="bold-span">Box code:</span> {{result.BoxCode}}</p>
          <p><span class="bold-span">Width:</span> {{result.Width}}</p>
          <p><span class="bold-span">Height:</span> {{result.Height}}</p>
          <p><span class="bold-span">Depth:</span> {{result.Depth}}</p>
        </div>

        <button class="remove-btn" v-if="list" @click="removeItem(result)">Remove</button>
  </div>
</template>

<script>
export default {
    props: ['result', 'list'],
    methods: {
        addToFavourites() {
            this.$emit('addAFavourite', this.result)
        },
        removeItem(item) {
          let index = this.$store.state.favouritesList.indexOf(item);
          this.$store.state.favouritesList.splice(index, 1);
          this.$store.state.notificationMsgArr.push('Artykuł został usunięty z listy.')
        }
        
    }
}
</script>

<style scoped>

/* result styling */

.result {
  padding: 1rem;  
}

.bold-span {
  font-weight: 700;
}
.remove-btn {
    cursor: pointer;
    border: none;
    border-radius: 15px;
    background: #2b435d;
    color: #FEA53F;
    width: 100%;
    line-height: 2rem;
    padding: .5rem;
    font-size: 1.4rem;
}
.fa-plus {
  position: absolute;
  top: 5%;
  left: 5%;
  color: #2b435d;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.fa-plus:hover {
  color: red;
}

.fa-search {
  cursor: pointer;
}

</style>