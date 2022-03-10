<script>
  import { onMount } from "svelte";
  import Produit from "../components/produit.svelte";

  let produits = [];
  let loaders = [1, 2, 3, 4, 5];

  const url = "https://dashboard.genuka.com/api/2021-10/companies/468/products";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
  });
</script>

<svelte:head>
  <title>Produits</title>
</svelte:head>

<div class="container">
  <div class="center">
    <h1>Nos produits</h1>
    <button>Tout voir</button>
    <div class="container-products">
      {#each produits as produit}
        <Produit
          photo={produit.medias[0].link}
          name={produit.name}
          price={produit.price}
          collections={produit.collections}
        />
      {:else}
        {#each loaders as loader}
          <div class="loader" />
        {/each}
      {/each}
    </div>
    <h3>{produits.length} produits affichés</h3>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 450px;
    .center {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }

    button {
      cursor: pointer;
      padding: 1rem;
      font-size: 15px;
      background: $lighter;
      color: $darker;
      border: none;
      border-radius: 10px;
    }

    &-products {
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
