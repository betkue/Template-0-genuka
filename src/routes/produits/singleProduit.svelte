<script>
import { onMount } from "svelte";

  onMount(async function () {
    const url = `https://dashboard.genuka.com/api/2021-10/companies/468/products?`;
    const response = await fetch(url);
    const data = await response.json();
    produits = data.data;
    produitsFilter = produits;
    nextPage = data.links.next;
    previousPage = data.links.prev;
  });
</script>

<svelte:head>
  <title></title>
</svelte:head>

<div class="container">

</div>

<style lang="scss">
  @import "./../../styles/settings";

</style>