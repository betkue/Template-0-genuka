<script>
  import { onMount } from "svelte";
  import Produit from "../components/produit.svelte";

  let produits = [];

  const url = "https://dashboard.genuka.com/api/2021-10/companies/489/products";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
  });
</script>

<svelte:head>
  <title>Produits</title>
</svelte:head>

<main>
  <h1>Produits</h1>
  {#each produits as produit}
    <Produit photo={produit.medias[0].link} name={produit.name} price={produit.price} description={produit.description} />
    {:else}
    <p> Loading ... </p>
  {/each}
</main>

<style lang="scss">
  @import "./../styles/settings";
</style>
