<script>
  export let status, error;
  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container">
  <div class="center">
    <h1>{status}</h1>

    <h2>{error.message}</h2>

	<a href="/">Retournez a l'acceuil</a>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    min-height: 500px;
    display: flex;
	justify-content: center;
    align-items: center;
	.center{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
    h1 {
      font-size: 5em;
    }
	a{
		padding: 1rem 0;
		color: $orange;
	}
  }
</style>
