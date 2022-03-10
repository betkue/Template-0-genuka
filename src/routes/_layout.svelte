<script>
  import Footer from "../components/footer.svelte";
  import Navigation from "../components/navigation.svelte";
import Panier from "../components/panier.svelte";
</script>

<Navigation/>

<main>
  <slot />
  <Panier />
</main>

<Footer />
