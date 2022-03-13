<script>
  import { onMount } from "svelte";
  import Produit from "../components/produit.svelte";
  let produits = [];
  let produitsFilter = produits;
  let collections = [];
  let loaders = [1, 2, 3, 4, 5];
  let currency;
    const urlCompagny =
        "https://dashboard.genuka.com/api/2021-10/companies/details/468";
    //const url = "https://dashboard.genuka.com/api/2021-10/companies/byurl?url=http://localhost:2974"
    onMount(async function () {
        const response = await fetch(urlCompagny);
        const data = await response.json();
        currency = data.currency.symbol;

    });
  const url = "https://dashboard.genuka.com/api/2021-10/companies/468/products";
  const urlCollections =
    "https://dashboard.genuka.com/api/2021-10/companies/468/collections";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produitsFilter = produits;
  });

  onMount(async function () {
    const response = await fetch(urlCollections);
    const data = await response.json();
    collections = data.data;
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
      {#each produitsFilter as produit}
        <Produit
          photo={produit.medias[0].link}
          name={produit.name}
          price={produit.price}
          collections={produit.collections}
          currency ={currency}
        />
      {:else}
        {#each loaders as loader}
          <div class="loader" />
        {/each}
      {/each}
    </div>
    <h3>{produitsFilter.length} produits affichés</h3>
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
      button {
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
    }
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
</style>
