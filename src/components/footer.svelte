<script>
  import { onMount } from "svelte";
  let name;
  let description;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/468";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    name = data.name;
    description = data.description;
  });
</script>

<div class="footer">
    <h2>{name}</h2>
    <p>{description}</p>
</div>
