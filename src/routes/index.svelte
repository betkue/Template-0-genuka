<script>
  import { onMount } from "svelte";

  let logo;
  let name;
  let description;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/489";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.logo);
    logo = data.logo
    name = data.name;
    description = data.description;
  });
</script>

<svelte:head>
  <title>Acceuil</title>
</svelte:head>

<h1>{name}</h1>

<h3>{description}</h3>

<img src={logo} alt="logo">

<h1>Acceuil</h1>

<a href="/produits"><button>Voir les produits</button></a>

<style lang="scss">
  @import "./../styles/settings";
  h1 {
    color: $dark;
  }
</style>
