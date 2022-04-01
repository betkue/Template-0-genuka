<script>
  import Footer from "../components/footer.svelte";
  import Navigation from "../components/navigation.svelte";
  import Panier from "../components/panier.svelte";
import ToTop from "../components/toTop.svelte";
</script>

<Navigation />

<main>
  <slot />
  <Panier />
  <ToTop />
</main>

<Footer />

<style>
  main {
    min-height: 50vh;
  }
</style>