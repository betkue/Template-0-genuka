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
  cart.forEach((element) => {
    totalPrice += element.price * element.quantity;
  });
  let shipping_fee = 0;
  let total;
  onMount(async function () {
    shipping_fee = await Memoire.fetchCompany();
    shipping_fee = shipping_fee.shipping_fee;
    total = totalPrice + shipping_fee;
  });

  let currency;
  onMount(async function () {
    currency = await Memoire.fetchCompany();
    currency = currency.currency.symbol;

    payment_modes = await Memoire.fetchCompany();

    payment_modes = payment_modes.payment_modes.cash.full_name;
  });

  let payment_modes = [];
  let cash;
  let paypal;
  let mobilemoney;
  let mobilemoney_phone;
  let paypal_link;
  onMount(async function () {
    payment_modes = await Memoire.fetchCompany();

    cash = payment_modes.payment_modes.cash.full_name;
    paypal = payment_modes.payment_modes.paypal.full_name;
    paypal_link = payment_modes.payment_modes.paypal.link;
    mobilemoney = payment_modes.payment_modes.mobilemoney.full_name;
    mobilemoney_phone = payment_modes.payment_modes.mobilemoney.phone;
  });
</script>

<svelte:head>
  <title>Caisse</title>
</svelte:head>

<section class="l-cart">
  <div class="l-rl">
    <div class="l-tb">
      <div class="w--grid">
        <div class="w-bag-total c-br">
          <h3 class="c-header bag-total">
            <span>MODE DE PAIEMENT</span> <span>{currency}</span>
          </h3>
          <div class="w-bag-total-detail">
            <h4 class="w-flex--sb">
              Sélectionnez un mode paiement pour votre commande.
            </h4>
            <div class="payment">
              {#if !(cash === "")}
                <div>
                  <span>{cash}</span>
                </div>
              {/if}
              {#if !(paypal === "")}
                <div>
                  <span>{paypal}</span>
                </div>
              {/if}
              {#if !(mobilemoney === "")}
                <div>
                  <span>{mobilemoney}</span>
                  <!-- <span>{mobilemoney_phone}</span> -->
                </div>
              {/if}
            </div>
          </div>
          <div class="w-bag-total-detail">
            <h2 class="w-flex--sb">
              <strong>TOTAL</strong><span>{total}</span>
            </h2>
          </div>
          <button class="cta-btn"
            ><a href="/caisse">FINALISER LE PAIEMENT</a></button
          >
        </div>
        <div class="w-bag-items">
          <h3 class="c-header bag-items c-br">
            <span>ADRESSE DE LIVRAISON</span>
          </h3>
          <div class="w-bag-items-list" />
          <div class="w-bag-sub-total c-br" />
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
      padding: 24px 0;
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
    &-detail {
      border-bottom: 1px solid #fff;
    }
    > * {
      margin: 0 30px;
    }
  }

  .w-bag-total-detail {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .payment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 30%;
      padding: 10px;
      background: $light;
      border-radius: 10px;
      transition: 0.3s ease;
      span {
        display: block;
        text-align: center;
        padding: 3px 0;
      }

      &:hover {
        box-shadow: rgba($color: $darker, $alpha: 0.3) 0 1px 10px 0;
      }
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

  @media only screen and (max-width: 730px) {
    .payment {
      flex-direction: column;
      div {
        width: 100%;
        margin: 5px 0;
      }
    }
  }
</style>
