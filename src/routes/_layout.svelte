<script>
  import Footer from "../components/footer.svelte";
import Navigation from "../components/navigation.svelte";

  export let segment;
</script>

<Navigation {segment} />

<main>
  <slot />
</main>

<Footer />
