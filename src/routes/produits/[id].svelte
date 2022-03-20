<script context="module">
  let idCompany = 468;

  export function preload(page, session) {
    const { id } = page.params;
    console.log(id);
    return { id };
  }
</script>

<script>
  export let id;
  import { beforeUpdate, onMount } from "svelte";
  let produits, currentProduit, currency;
  onMount(async function () {
    const url = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/products?page`;
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produits.forEach((produit, index) => {
      if (id == produit.id) {
        currentProduit = produits[index];
      }
    });
  });
  onMount(async function () {
    const urlCompagny = `https://dashboard.genuka.com/api/2021-10/companies/details/${idCompany}`;
    const response = await fetch(urlCompagny);
    const data = await response.json();
    currency = data.currency.symbol;
  });
</script>

<svelte:head>
  <title>Produits</title>
</svelte:head>

<section class="l-product-page">
  <div class="l-rl">
    <div class="l-tb">
      <div class="w-2-half-wrapper">
        <div class="w-gallery product-page">
          <div class="w-img product-page primary">
            {#if currentProduit != undefined}
              <img src={currentProduit.medias[0].link} alt="" />
            {:else}
              <span>Loading...</span>
            {/if}
          </div>
        </div>
        <div class="w-text product-page">
          <h1 class="product-name">
            {#if currentProduit != undefined}
              <span>{currentProduit.name}</span>
            {:else}
              <span>Loading...</span>
            {/if}
          </h1>
          <div class="product-description">
            {#if currentProduit != undefined}
              {@html currentProduit.description}
            {:else}
              <span>Loading...</span>
            {/if}
          </div>
          <div class="w-product-price">
            <div class="product-discounted_price">
              {#if currentProduit != undefined}
                <span>{currentProduit.discounted_price} {currency}</span>
              {:else}
                <span>Loading...</span>
              {/if}
            </div>
            {#if currentProduit != undefined}
              {#if currentProduit.comparaison_price != 0}
                <div class="product-reduction">
                  <span
                    >- {((currentProduit.price -
                      currentProduit.discounted_price) *
                      100) /
                      currentProduit.price}%</span
                  >
                </div>
                <div class="product-price">
                  <span>{currentProduit.price}</span>
                </div>
              {/if}
            {/if}
          </div>
          <div class="c-add-to-cart">
            <div class="w-add-to-cart-input">
              <div class="minus"><span>-</span></div>
              <div
                data-qty="0"
                data-id=""
                data-index=""
                data-price=""
                class="add-to-cart-input"
              >
                <span>0</span>
              </div>
              <div class="plus"><span>+</span></div>
            </div>
            <button class="btn-add-to-cart"
              ><span>Ajouter au panier</span></button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "./../../styles/settings";
  // c : component
  // w : wrapper
  // l : layout; &-rl : padding(right, left); &-tb : padding(top, bottom)
  // cta : call to action (btn/input)
  // -br : border-radius; -sp : space-between
  .l-product-page {
    .l-rl {
      padding: 0 210px;
    }
    .l-tb {
      padding: 50px 0 100px;
    }
  }
  .w-2-half-wrapper {
    display: flex;
    > div {
      min-width: 50%;
    }
  }
  .w-img {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-bottom: 100%;
    width: 100%;
    position: relative;
    border-radius: 15px;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .w-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    &.product-page {
      align-items: stretch;
      gap: 0;
      padding: 0 10px 0 70px;
      margin: 50px 0 0;
    }
  }
  .w-gallery {
    align-self: center;
    padding: 0 50px 0 0;
    margin: 50px 0 0;
  }
  .product-name {
    padding: 15px 0 0;
    font-size: 40px;
  }
  .product-description {
    padding: 30px 0 0;
    line-height: 1.7;
    font-size: 16px;
    color: rgba(#000, 0.9);
  }
  .w-product-price {
    display: grid;
    padding: 25px 0 0;
    gap: 10px;
    grid-template: auto auto / auto auto;
    align-self: flex-start;
    justify-content: center;
    > div {
      display: inline-flex;
    }
  }
  .product-discounted_price {
    font-size: 28px;
  }
  .product-reduction {
    font-size: 16px;
    padding: 2.5px 7.5px;
    border-radius: 5px;
    align-items: center;
    color: #000;
    background: rgba(#000, 0.1);
  }
  .product-price {
    color: rgba(#000, 0.5);
    text-decoration: line-through;
  }
  .c-add-to-cart {
    display: flex;
    padding: 40px 0;
    gap: 15px;
    button {
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 15px;
      padding: 17.5px 0;
      background: $orange;
      color: #fff;
      line-height: 1;
      flex: 1;
      cursor: pointer;
    }
  }
  .w-add-to-cart-input {
    display: flex;
    justify-content: space-between;
    border-radius: 50px;
    background: rgba(#000, 0.1);
    min-width: 130px;
    padding: 0 10px;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 20px;
      border-radius: 50%;
    }
    .minus,
    .plus {
      width: 30px;
      height: 30px;
      justify-content: center;
      background: rgba(#000, 0);
      cursor: pointer;
      &:hover {
        background: rgba(#000, 0.05);
      }
    }
  }
</style>
