<script>
  let countPanier = 0;

  let cart = [];

  if (process.browser) {
    Object.values(localStorage).forEach((element, index) => {
      // Object.values(localStorage) = []
      cart[index] = JSON.parse(Object.values(localStorage)[index]);
    });
  }

  cart.forEach((element) => {
    countPanier += element.quantity;
  });
</script>

<a href="/panier">
  <div class="container">
    <img src="./icons/cart.svg" alt="cart" />
    <div class="count">{countPanier}</div>
  </div></a
>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    cursor: pointer;
    position: fixed;
    top: 50%;
    right: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: $orange;
    z-index: 2;
    .count {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -3px;
      left: -3px;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background: $darker;
      color: $light;
      font-size: 11px;
      font-weight: 500;
    }
  }
</style>
