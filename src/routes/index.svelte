<script>
  import { onMount } from "svelte";
  import Produit from "../components/produit.svelte";
  import { Memoire } from "../store/data.js";
  let company, collections, logo, name, description, products, currency;
  onMount(async function () {
    company = await Memoire.fetchCompany();
    products = await Memoire.fetchProducts();
    collections = await Memoire.fetchCollections();
    collections = collections.data;
    products = products.data;
    currency = company.currency.symbol;
    name = company.name;
    logo = company.logo;
    description = company.description;
  });
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<section class="l-hero">
  <div class="l-rl">
    <div class="l-tb">
      <div class="w--grid">
        <div class="w-compagny">
          <div class="w-logo">
            <img src={logo} alt="logo" />
            <h1>{name}</h1>
          </div>
          <p>{description}</p>
        </div>
        <div class="w-collections-hero">
          {#if collections != undefined}
            {#each collections as collection}
              <div
                class="collection"
                style="width:calc(100% / {collections.length});"
              >
                {#each products as produit}
                  {#if produit.collections[0] == collection.name}
                    <a href="/collections/{collection.name}">
                      <div class="c-img" style="height:calc(100% / 3);">
                        <img src={produit.medias[0].link} alt="" />
                      </div></a
                    >
                  {/if}
                {/each}
                <strong class="f-vertical">{collection.name}</strong>
                <strong class="f-horizontal">{collection.name}</strong>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
<section class="l-collections">
  <div class="l-rl">
    <div class="l-tb">
      <div class="w--flex">
        {#if collections != undefined && products != undefined}
          {#each collections as collection}
            <div class="w-collections">
              <h3>Collection | {collection.name}</h3>
              <div class="w--flex-sb">
                {#each products as produit}
                  {#if produit.collections[0] == collection.name}
                    <Produit
                      photo={produit.medias[0].link}
                      name={produit.name}
                      price={produit.price}
                      collections={produit.collections}
                      {currency}
                      discounted_price={produit.discounted_price}
                      medias={produit.medias}
                      id={produit.id}
                    />
                  {/if}
                {/each}
              </div>
            </div>
          {/each}
        {/if}
        <a class="cta-all-products " href="/collections/all"
          ><button>Decouvrez tous nos produits</button></a
        >
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "./../styles/settings";
  .l-hero {
    color: $darker;
    .l-rl {
      padding: 0 10%;
    }
    .l-tb {
      padding: 30px 0 0;
    }
  }
  .l-collections {
    color: $darker;
    .l-rl {
      padding: 0 10%;
    }
    .l-tb {
      padding: 75px 0 100px;
    }
  }
  .w--grid {
    display: grid;
    grid-template: auto / 1fr 60%;
    gap: 30px;
  }
  .w-compagny {
    align-self: center;
    padding: 0 0 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .w-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 50px;
    }
  }
  .w-collections-hero {
    display: flex;
    overflow: hidden;
    gap: 10px;
    justify-content: space-between;
  }
  .collection {
    height: 80vh;
    border-radius: 10px;
    transition: 0.3s ease-out;
    cursor: pointer;
    position: relative;
    overflow: clip;
    color: $light;
    strong {
      font-size: 24px;
      mix-blend-mode: difference;
    }
    .f-vertical {
      position: absolute;
      bottom: 20px;
      left: 5px;
      writing-mode: sideways-lr;
    }
    .f-horizontal {
      position: absolute;
      white-space: nowrap;
      bottom: 20px;
      left: 50%;
      opacity: 0;
      transform: translateX(-50%);
    }
    &:hover {
      width: 100% !important;
      .f-vertical {
        opacity: 0;
      }
      .f-horizontal {
        opacity: 1;
      }
    }
  }
  .c-img {
    transform: rotate(-10px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .w--flex {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    position: relative;
  }
  .w-collections {
    width: 100%;
    h3 {
      font-size: 40px;
    }
  }
  .w--flex-sb {
    padding: 30px 0 0;
    display: flex;
    justify-content: space-between;
      overflow: hidden;
      gap: 30px;
  }
  .cta-all-products {
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
  @media only screen and (max-width: 700px) {
    .w--grid {
      grid-template-columns: auto;
      .w-compagny{

      }
      .w-collections-hero{
        height: 50vh;
      }
    }
  }
</style>
