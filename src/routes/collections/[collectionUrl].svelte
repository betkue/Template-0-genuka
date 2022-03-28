<script context="module">
  export function preload(page, session) {
    const { collectionUrl } = page.params;
    return { collectionUrl };
  }
</script>

<script>
  export let collectionUrl;
  
  import { beforeUpdate, afterUpdate, onMount } from "svelte";
  import { each } from "svelte/internal";
  import Produit from "../../components/produit.svelte";
  import { Memoire } from "../../store/data.js";

  let idCompany = Memoire.idCompany;


  let produits = [];
  let produitsFilter = produits;
  let collections = [];
  let loaders = [1, 2, 3, 4, 5];
  let currency;

  let currentPage;
  let nextPage;
  let previousPage;
  let collectionActive;
  $: page = 1;

  onMount(async function () {
    const url = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/products?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    currentPage = data.meta.current_page;
    produits = data.data;

    if (collectionUrl == "all") {
      produitsFilter = produits;
    } else {
      let currentCollection = collectionUrl;
      const produitsCollections = produits.filter((produit) =>
        produit.collections.includes(currentCollection)
      );
      produitsFilter = produitsCollections;
      collectionActive = currentCollection;
    }
    nextPage = data.links.next;
    previousPage = data.links.prev;
  });
  let pageTable = [],
    lastPage = 0;
  onMount(async function () {
    const collectionsJson = await Memoire.fetchCollections();
    const productsJson = await Memoire.fetchProducts();
    lastPage = productsJson.meta.last_page;
    for (let i = 0; i < lastPage; i++) {
      pageTable[i] = i + 1;
    }
    collections = collectionsJson.data;
    currency = await Memoire.fetchCompany();
    currency = currency.currency.symbol;
  });

  // Au clic
  function showAllProduct(e) {
    produitsFilter = produits;
  }

  function showCollection(e) {
    let currentCollection = e.target.textContent;
    const produitsCollections = produits.filter((produit) =>
      produit.collections.includes(currentCollection)
    );
    produitsFilter = produitsCollections;
    collectionActive = currentCollection;
     (() => window.scrollTo(0,100));
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
    requestAnimationFrame(() => window.scrollTo(0,100)); 
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
    requestAnimationFrame(() => window.scrollTo(0,100));
  }

  async function callPage(e) {
    page = e.target.textContent;
    const url = `https://dashboard.genuka.com/api/2021-10/companies/${idCompany}/products?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produitsFilter = produits;
    nextPage = data.links.next;
    previousPage = data.links.prev;
    requestAnimationFrame(() => window.scrollTo(0,100));
  }
</script>

<svelte:head>
  <title>Produits</title>
</svelte:head>

<div class="container">
  <div class="center">
    <h1>Nos produits</h1>
    <div class="w--grid">
      <div class="container-collections">
        <h3>Filtrer par:</h3>
        {#if produitsFilter == produits}
          <button class="active" on:click={showAllProduct}>Tout voir</button>
        {:else}
          <button on:click={showAllProduct}>Tout voir</button>
        {/if}
        {#each collections as collection}
          {#if collectionActive == collection.name && !(produitsFilter == produits)}
            <button class="active" on:click={showCollection}
              >{collection.name}</button
            >
          {:else}
            <button on:click={showCollection}>{collection.name}</button>
          {/if}
        {/each}
      </div>
      <div class="w--flex">
        <div class="container-products">
          {#each produitsFilter as produit (produit.id)}
            <Produit
              photo={produit.medias[0].link}
              name={produit.name}
              price={produit.price}
              collections={produit.collections}
              {currency}
              discounted_price={produit.discounted_price}
              medias={produit.medias}
              id={produit.id}
            />
          {:else}
            {#each loaders as loader}
              <div class="loader" />
            {/each}
          {/each}
        </div>
        <h3 class="number-product">
          {produitsFilter.length} produits affichés
        </h3>
        {#if !(previousPage == null) || !(nextPage == null)}
          <div class="w-pagination">
            {#if !(previousPage == null)}
              <button class="previous-page" on:click={callPreviousPage} />
            {:else}
              <button
                
                class="previous-page disabled"
                on:click={callPreviousPage}
              />
            {/if}
            {#each pageTable as pages, i}
              {#if page == pageTable[i]}
                <button class="i-page active" on:click={callPage}
                  >{pageTable[i]}</button
                >
              {:else}
                <button class="i-page" on:click={callPage}
                  >{pageTable[i]}</button
                >
              {/if}
            {/each}
            {#if !(nextPage == null)}
              <button class="next-page" on:click={callNextPage} />
            {:else}
              <button  class="next-page disabled" on:click={callNextPage} />
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./src/styles/settings";
  h1 {
    align-self: flex-start;
    font-size: 80px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 100px;
    .center {
      padding: 0 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }

    &-collections {
      h3 {
        align-self: flex-start;
        margin: 0 0 10px;
      }
      padding: 50px 0 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: sticky;
      top: 0;
      align-self: flex-start;
      gap: 10px;
      button {
        min-width: 150px;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-size: 15px;
        background: $lighter;
        color: $darker;
        border: 1.5px solid transparent;
        border-radius: 10px;
        &:hover {
          background: $light;
          border: 1.5px solid $lighter;
        }
        &.active {
          background: $light;
          border: 1.5px solid $lighter;
        }
      }
    }

    &-products {
      padding: 50px 0 0;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  .number-product {
    text-align: center;
    padding: 50px 0;
  }

  .loader {
    border-radius: 10px;
    width: calc((100% - 65px) / 3);
    aspect-ratio: 1/1;
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

  .w-pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    align-self: flex-end;
    .i-page {
      color: $orange;
      height: 40px;
      background: transparent;
      border-radius: 50%;
      &.active {
        background: $orange;
        color: $light;
      }
    }
    .next-page {
      &::after {
        content: "\e5e1";
        transform: translate(-50%, -50%);
      }
    }
    .previous-page {
      &::after {
        content: "\e5e0";
        transform: translate(-25%, -50%);
      }
    }
    button {
      line-height: 1;
      &::after {
        font-size: 24px;
        font-family: "Material Icons";
        position: absolute;
        top: 50%;
        left: 50%;
      }
      position: relative;
      cursor: pointer;
      width: 40px;
      color: $orange;
      &.disabled {
        visibility: hidden;
      }
    }
  }
  .w--grid {
    gap: 50px;
    display: grid;

    grid-template: auto/ auto 1fr;
  }
</style>
