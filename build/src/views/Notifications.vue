<template>
  <div class="about">
    <h1>Notifications</h1>
    <h3 v-if="!notificationList">No new notifications</h3>

    <div class="list-wrapper">
      <ul class="notification-list" v-for="(element, index) in this.$store.state.notificationMsgArr" :key=index>
        <li>{{element}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    notificationList(){
      if (this.$store.state.notificationMsgArr.length ==0) {return false} else {return true}
    }
  }
}
</script>

<style scoped>
.list-wrapper {
  padding: 1rem;
}
  .notification-list li {
    color: #2B435D;
    font-weight: 300;
    line-height: 2.2rem;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
</style>