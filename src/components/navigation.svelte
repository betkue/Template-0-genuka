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
      <img src={logo} alt="logo" />
      <h2>{name}</h2>
    </div>
    <ul class="navigation-center">
      <li><a href="/">Acceuil</a></li>
      <li><a href="/produits">Produits</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="navigation-right">
      <div class="right-account">
        <img src="./icons/account.svg" alt="cart" /><span>Mon compte</span>
        <div class="auth">
          <a href="/inscription"
            ><button class="register">Inscription</button></a
          >
          <a href="/connexion"><button class="login">Connexion</button></a>
        </div>
      </div>
      <a href="/panier"><img src="./icons/cart.svg" alt="cart" /></a>
    </div>
  </div>
</nav>

<style lang="scss">
  @import "./../styles/settings";
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 0px 5px rgba($color: $darker, $alpha: 0.1);
    .cards {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
        border: 1px solid $darker;
      }
    }
    &-center {
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        a {
          text-transform: uppercase;
          padding: 1rem;
          &:hover {
            color: $orange;
          }
        }
      }
    }
    &-right {
      display: flex;
      justify-content: center;
      align-items: center;
      .right-account {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        &:hover .auth {
          opacity: 1;
          transform: translate(0);
        }
        .auth {
          transform: translateY(50px);
          opacity: 0;
          position: absolute;
          left: 0;
          top: 50px;
          // box-shadow: 2px 2px 5px rgba($color: $darker, $alpha: .1);
          // background: $light;
          transition: 0.3s ease;
          button{
            cursor: pointer;
            width: 100%;
            border: none;
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            background: $orange;
            color: $light;
          }
        }
      }
    }
  }
</style>
