<script>
  import { onMount } from "svelte";
  let phone;
  let email;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/468";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    phone = data.phone;
    email = data.email;
  });

</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<h2>{phone}</h2>
<h2>{email}</h2>

<style lang="scss">
  @import "./../styles/settings";
  h1 {
    color: $dark;
  }
</style>
