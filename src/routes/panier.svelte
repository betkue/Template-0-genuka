<script>
  import { onMount } from "svelte";
  import ProduitPanier from "../components/produit-panier.svelte";
  import { Memoire } from "../store/data.js";
  //let cart;
  let cart = [];

  if (process.browser) {
    Object.values(localStorage).forEach((element, index) => {
      // Object.values(localStorage) = []
      cart[index] = JSON.parse(Object.values(localStorage)[index]);
    });
  }

  let totalPrice = 0;

  cart.forEach(element => {
     totalPrice += element.price * element.quantity;
  });

  let currency;
  let shipping_fee;
  let total;
  onMount(async function () {
    currency = await Memoire.fetchCompany();
    currency = currency.currency.symbol;
    shipping_fee = await Memoire.fetchCompany();
    shipping_fee = shipping_fee.shipping_fee;
    total = totalPrice + shipping_fee;
  });

  function delProduct(e) {
    alert("Produit retiré du panier");
    localStorage.removeItem(e.detail.id);
    // if (process.browser) {
    //   Object.values(localStorage).forEach((element, index) => {
    //     // Object.values(localStorage) = []
    //     cart[index] = JSON.parse(Object.values(localStorage)[index]);
    //   });
    // }
  }
</script>

<svelte:head>
  <title>Panier</title>
</svelte:head>

<section class="l-cart">
  <div class="l-rl">
    <div class="l-tb">
      <div class="w--grid">
        <div class="w-bag-items">
          <h3 class="c-header bag-items c-br">
            <span>Mon panier</span>
          </h3>
          <div class="w-bag-items-list">
            {#each cart as items}
              <ProduitPanier
                photo={items.thumb}
                name={items.name}
                {currency}
                price={items.price}
                index={items.id}
                quantity={items.quantity}
                on:supp-product={delProduct}
              />
            {/each}
          </div>
          <div class="w-bag-sub-total c-br">
            <p>
              <strong>Sous-total</strong><span>{totalPrice}</span>
            </p>
          </div>
        </div>
        <div class="w-bag-total c-br">
          <h3 class="c-header bag-total">
            <span>Total</span> <span>{total} {currency}</span>
          </h3>
          <div class="w-bag-total-detail">
            <p class="w-flex--sb">
              <strong>Sous-total</strong><span>{totalPrice}</span>
            </p>
            <p class="w-flex--sb">
              <strong>Livraison</strong><span>{shipping_fee}</span>
            </p>
          </div>
          <button class="cta-btn"
            ><a href="/caisse">PROCEDER AU PAIMENT</a></button
          >
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  // c : component
  // w : wrapper
  // l : layout; &-rl : padding(right, left); &-tb : padding(top, bottom)
  // cta : call to action (btn/input)
  // -br : border-radius; -sp : space-between
  @import "./../styles/settings";
  strong {
    font-weight: 700;
  }
  .c-br {
    background: #eff3f1;
    border-radius: 10px;
  }
  .l-cart {
    color: $darker;
    .l-rl {
      padding: 0 calc((100vw - 960px) / 2);
    }
    .l-tb {
      padding: 150px 0;
    }
  }
  .w-flex--sb {
    display: flex;
    justify-content: space-between;
  }
  .w--grid {
    display: grid;
    grid-template: auto / 60% 1fr;
    gap: 12px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
  .c-header {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    &.bag-items {
      padding: 24px 30px;
    }
    &.bag-total {
      display: flex;
      justify-content: space-between;
      padding: 0 0 24px 0;
      border-bottom: 1px solid #fff;
    }
  }
  .w-bag-items-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .w-bag-sub-total {
    padding: 30px 24px;
    p {
      text-align: right;
    }
    span {
      min-width: 95px;
    }
  }
  .w-bag-total {
    align-self: flex-start;
    position: sticky;
    top: 12px;
    padding: 24px 0;
    > * {
      margin: 0 30px;
    }
  }
  .cta-btn {
    background: $orange;
    color: #fff;
    border-radius: 50px;
    display: flex;
    align-items: stretch;
    a {
      width: 100%;
      display: inline-block;
      padding: 15px;
    }
  }
</style>
