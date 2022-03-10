<script>
  import { onMount } from "svelte";
  let name;
  let description;
  let logo;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/468";
  //const url = "https://dashboard.genuka.com/api/2021-10/companies/byurl?url=http://localhost:2974"
  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    name = data.name;
    description = data.description;
    logo = data.logo;
  });
</script>

<div class="footer">
  <div class="cards">
    <div class="footer-left">
      <h2>HORAIRES DE TRAVAIL</h2>
    </div>
    <div class="footer-center">
      <img src={logo} alt="logo" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
    <div class="footer-right" />
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .footer {
    background: $blueDark;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .cards {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-left {
      h2 {
        color: $orange;
      }
    }
    &-center {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
      h2 {
        color: $orange;
      }
      p {
        color: $light;
      }
    }
  }
</style>
