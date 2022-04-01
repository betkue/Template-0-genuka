<script>
    function toTop(){
        requestAnimationFrame(() => window.scrollTo(0, 0));
        console.log(window.height);
    }
</script>

<div on:click={toTop}>
  <div class="container">
      <img src="./icons/arrow-up.svg" alt="arrow" />
  </div></div
>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: $orange;
    box-shadow: rgba($color: $darker, $alpha: 0.3) 0 1px 10px 0;
    z-index: 2;
  }
</style>