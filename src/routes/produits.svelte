<script>
  import { onMount } from "svelte";
  import Produit from "../components/produit.svelte";

  let photo;
  let name;
  let price;
  let description;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/489/products";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    name = data.data[0].name
    photo = data.data[0].medias[0].link
    console.log(photo);
    price = data.data[0].price
    description = data.data[0].description
  });
</script>

<svelte:head>
  <title>Produits</title>
</svelte:head>

<main>
  <h1>Produits</h1>
  <Produit photo={photo} name={name} price={price} description={description} />
</main>

<style lang="scss">
  @import "./../styles/settings";
</style>
