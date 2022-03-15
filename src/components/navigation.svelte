<script>
  import { onMount } from "svelte";
  let name, logo, textSearch;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/468";

  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    name = data.name;
    logo = data.logo;
  });

  // const urlSearch = `https://dashboard.genuka.com/api/2021-10/companies/468/products?search=Mac`;

  // async function search() {
  //   const res = await fetch(urlSearch, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       textSearch,
  //     }),
  //   });

  //   const json = await res.json();
  //   result = JSON.stringify(json);
  //   console.log(result);
  // }

</script>

<nav class="navigation">
  <div class="center">
    <div class="navigation-left">
      <img src={logo} alt="logo" />
      <h2>{name}</h2>
    </div>
    <div class="navigation-search">
      <input
        type="search"
        name="search"
        class="search"
        placeholder="Cherchez un produit ... "
      />
      <div class="search-list" />
    </div>
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
  <ul class="navigation-center">
    <li><a href="/">Acceuil</a></li>
    <li><a href="/produits">Produits</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<style lang="scss">
  @import "./../styles/settings";
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 0px 5px rgba($color: $darker, $alpha: 0.1);
    .center {
      padding: 17.5px 0 0 0;
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

    &-search {
      width: 40%;
      position: relative;
      .search {
        width: 100%;
        background: $lighter;
        padding: 1rem 15px;
        border-radius: 30px;
        outline: none;
        overflow: hidden;
        color: $darker;
        transition: 0.3s ease;
        &:focus {
          background: $light;
          border: 1px solid $darker;
        }
      }
      .search-list {
        position: absolute;
        width: 100%;
        height: 300px;
        z-index: 2;
        display: none;
      }
    }
    &-center {
      width: 100%;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        a {
          text-transform: uppercase;
          padding: 1rem;
          color: $darker;
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
        gap: 2.5px;
        color: $darker;
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
          button {
            cursor: pointer;
            width: 100%;
            border: none;
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            background: $orange;
            color: $light;
            border: 1px solid $orange;
            &:hover {
              background: $light;
              color: $orange;
            }
          }
        }
      }
    }
  }
</style>
