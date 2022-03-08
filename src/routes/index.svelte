<script>
  // async function lnshop(){
  //   let reponse = await fetch('https://dashboard.genuka.com/api/2021-10/companies/byurl?url=https://ln-dev.genuka.shop/');
  //   let data = await reponse.json();
  //   console.log(data);
  // }
  // lnshop();
</script>

<svelte:head>
  <title>Acceuil</title>
</svelte:head>

<h1>Acceuil</h1>

<a href="/produits"><button>Voir les produits</button></a>

<style lang="scss">
  @import "./../styles/settings";
  h1 {
    color: $dark;
  }
</style>
