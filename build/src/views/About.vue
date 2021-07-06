<template>
  <div class="about">
    <h1>About</h1>
    <p>This storage app will let you browse through the available items (JSONs kept in vuex), sorting them by their unique IDs (codes). The user can browse items in two categories: articles and containers.</p>
    <p>Each item can be added to a custom list if necessary. They can also be removed if the user no longer needs them on the list. Each item can be added to the list only once. After the user adds an item (or if this item is already there) they will get a pop-up with confirmation.</p>
    <p>Notification tab keeps track of every item added to the list.</p>
    <p>The app is responsive, can be viewed on desktops and on mobile devices.</p>
  </div>
</template>
<style scoped>
@media (min-width: 1000px) {
  p {
  line-height: 2rem;
  font-size:1.6rem;
  font-weight: 300;
  }
}

</style>