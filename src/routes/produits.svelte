<script>
  import { beforeUpdate, afterUpdate, onMount } from "svelte";
  import Produit from "../components/produit.svelte";

  let idCompany = 468; // 489 - 468

  let produits = [];
  let produitsFilter = produits;
  let collections = [];
  let loaders = [1, 2, 3, 4, 5];
  let currency;

  let nextPage;
  let previousPage;

  $: page = 1;

  onMount(async function () {
    const url = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/products?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produitsFilter = produits;
    nextPage = data.links.next;
    previousPage = data.links.prev;
  });

  onMount(async function () {
    const urlCollections = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/collections`;
    const response = await fetch(urlCollections);
    const data = await response.json();
    collections = data.data;
  });

  onMount(async function () {
    const urlCompagny = `https://dashboard.genuka.com/api/2021-10/companies/details/${idCompany}`;
    const response = await fetch(urlCompagny);
    const data = await response.json();
    currency = data.currency.symbol;
  });

  function showAllProduct(e) {
    produitsFilter = produits;
  }

  function showCollection(e) {
    let currentCollection = e.target.textContent;
    const produitsCollections = produits.filter((produit) =>
      produit.collections.includes(currentCollection)
    );
    produitsFilter = produitsCollections;
    console.log(produitsCollections);
  }

  async function callPreviousPage() {
    page--;
    const url = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/products?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produitsFilter = produits;
    nextPage = data.links.next;
    previousPage = data.links.prev;
  }

  async function callNextPage() {
    page++;
    const url = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/products?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produitsFilter = produits;
    nextPage = data.links.next;
    previousPage = data.links.prev;
  }
</script>

<svelte:head>
  <title>Produits</title>
</svelte:head>

<div class="container">
  <div class="center">
    <h1>Nos produits</h1>
    <div class="container-collections">
      <button on:click={showAllProduct}>Tout voir</button>
      {#each collections as collection}
        <button on:click={showCollection}>{collection.name}</button>
      {/each}
    </div>
    <div class="container-products">
      {#each produitsFilter as produit (produit.id)}
        <Produit
          photo={produit.medias[0].link}
          name={produit.name}
          price={produit.price}
          collections={produit.collections}
          {currency}
          id={produit.id}
        />
      {:else}
        {#each loaders as loader}
          <div class="loader" />
        {/each}
      {/each}
    </div>
    <h3 class="number-product">{produitsFilter.length} produits affichés</h3>
    <div class="container-pages">
      {#if !(previousPage == null)}
        <button on:click={callPreviousPage}>Précédent</button>
      {/if}
      {#if !(nextPage == null)}
        <button on:click={callNextPage}>Suivant</button>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    .center {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }

    &-collections {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        height: 2px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: $gray;
      }
      button {
        min-width: 150px;
        cursor: pointer;
        padding: 0.5rem 1rem;
        margin: 1rem;
        font-size: 15px;
        background: $lighter;
        color: $darker;
        border: none;
        border-radius: 10px;
        &:hover {
          background: $light;
        }
        & + button {
          margin-left: 5px;
        }
      }
    }

    &-products {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 75px 30px;
    }

    &-pages {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        cursor: pointer;
        padding: 1rem;
        font-size: 16px;
        border: solid 2px $orange;
        background: $light;
        color: $orange;
      }
    }
  }

  .number-product {
    padding: 50px 0;
  }

  .loader {
    border-radius: 10px;
    width: 200px;
    height: 300px;
    margin: 1rem;
    background: $lighter;
    animation: loader 1s both infinite alternate;
    @keyframes loader {
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 1210px) {
    .container {
      .center {
        width: 90%;
      }
    }
  }
</style>
