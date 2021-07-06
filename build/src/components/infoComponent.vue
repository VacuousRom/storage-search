<template>
  <div class="info-component">
      <p>{{infoMessage}}</p>
  </div>
</template>

<script>
export default {
    props:['infoMessage']
}
</script>

<style scoped>
    .info-component {
        position: fixed;
        top: 50%;
        left: 50%;
        background: #2b435d;
        width: 40%;
        height: 30%;
        display: grid;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        padding: 1rem;
        z-index: 999;
        
    }
    p {
        color: #E9E9E9;
        line-height: 2rem;
        font-size: 1.5rem;
        text-align: center;
    }

    @media (max-width: 1000px) {
        .info-component {
            width: 90%;
        }
    }
</style>