<script>
  import { onMount } from "svelte";
  let name;
  let logo;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/468";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    name = data.name;
    logo = data.logo;
  });
</script>

<nav class="navigation">
  <div class="cards">
    <div class="navigation-left">
      <img src={logo} alt="logo">
      <h2>{name}</h2>
    </div>
    <ul class="navigation-center">
      <li><a href="/">Acceuil</a></li>
      <li><a href="/produits">Produits</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="navigation-right">
      <a href="/inscription"><button class="register">Inscription</button></a>
      <a href="/connexion"><button class="login">Connexion</button></a>
      <a href="/panier"><img src="./icons/cart.svg" alt="cart"></a>
    </div>
  </div>
</nav>

<style lang="scss">
  @import "./../styles/settings";
</style>
