<script>
</script>

<svelte:head>
  <title>Acceuil</title>
</svelte:head>

<div class="container">
  <a href="/produits"><button>Decouvrir nos produits</button></a>
</div>

<style lang="scss">
  @import "./../styles/settings";

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }
  a {
    margin: 1rem;
    button {
      cursor: pointer;
      border: none;
      background: $orange;
      color: $light;
      border-radius: 50px;
      padding: 14px 24px;
      text-transform: uppercase;
      transition: 0.3s ease;
      &:hover {
        background: $darker;
      }
    }
  }
</style>
