<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { Memoire } from "../store/data.js";
  let company, logo, name;
  onMount(async function () {
    company = await Memoire.fetchCompany();
    name = company.name;
    logo = company.logo;
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

  let booleanToggleMenu = false;
  function toggleMenu() {
    booleanToggleMenu = !booleanToggleMenu;
  }
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
    <img
      src="./icons/burger.svg"
      alt="burger"
      class="burger"
      on:click={toggleMenu}
    />
  </div>
  <ul class="navigation-center">
    <li><a href="/">Acceuil</a></li>
    <li><a href="/produits">Produits</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  {#if booleanToggleMenu}
    <ul class="menu-burger" transition:fade>
      <a href="/panier" class="burger-panier"
        ><img src="./icons/cart.svg" alt="cart" /></a
      >
      <li><a href="/">Acceuil</a></li>
      <li><a href="/produits">Produits</a></li>
      <li><a href="/contact">Contact</a></li>
      <a href="/inscription"><button class="register">Inscription</button></a>
      <a href="/connexion"><button class="login">Connexion</button></a>
    </ul>
  {/if}
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

    .burger {
      cursor: pointer;
      display: none;
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
    .menu-burger {
      display: none;
    }
  }
  @media only screen and (max-width: 800px) {
    .navigation {
      &-right {
        .right-account {
          span {
            display: none;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .navigation {
      .center {
        padding: 15px;
        width: 95%;
      }
      .burger {
        display: block;
      }

      .menu-burger {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background: $lighter;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 5;
        width: 85%;
        .burger-panier {
          padding: 1rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid $light;
          a {
            width: 100%;
            padding: 1rem 0;
            text-align: center;
          }
          &:hover {
            background: $light;
          }
        }
        a {
          width: 100%;
          border-bottom: 2px solid $light;
          button {
            cursor: pointer;
            width: 100%;
            padding: 1rem 0;
            background: $orange;
            color: $light;
          }
        }
      }

      &-center,
      &-search,
      &-right {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 310px) {
    .navigation {
      .center {
        width: 99%;
      }
      .menu-burger {
        width: 80%;
      }
    }
  }
</style>
