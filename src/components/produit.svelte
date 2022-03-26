<script>
  import { fade } from "svelte/transition";
  export let id, currency, name, price, collections, photo, discounted_price, medias;

  function addTocart() {
    alert("Produit ajouté au panier");
    localStorage.setItem(
      id,
      `{
                "id":${id},
                "price":${discounted_price},
                "quantity": 1,
                "add_to_cart_date": "",
                "note":"",   
                "complement": "",
                "thumb": "${medias[0].link}",
                "name": "${name}"
            }`
    );
  }
</script>

<a href="/produits/{`${id}`}" class="card" transition:fade>
  <div class="content">
    <img src={photo} alt="produit" />
    <div class="buttons">
      <button>{collections}</button>
      <button on:click|preventDefault={addTocart}>Ajouter au panier</button>
    </div>
    <div class="card-footer">
      <h2>{name}</h2>
      <h3>{price} {currency}</h3>
    </div>
  </div>
</a>

<style lang="scss">
  @import "./../styles/settings";

  .card {
    width: calc((100% - 60px) / 3);
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s ease;
    &:hover {
      background: $lighter;
    }
    .content {
      padding: 1rem;
    }
    img {
      width: 100%;
      border-radius: 10px;
      height: 300px;
      object-fit: cover;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      button {
        color: $light;
        background: $gray;
        border-radius: 15px;
        border: none;
        font-weight: bold;
        padding: 0.5rem;
      }
      button:last-child {
        cursor: pointer;
        background: $light;
        color: $gray;
        box-shadow: rgba($color: $darker, $alpha: 0.15) 0 1px 4px 0;
      }
    }
    &-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: $orange;
        font-weight: bold;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .card {
      width: 50%;
    }
  }
  @media only screen and (max-width: 600px) {
    .card {
      width: 90%;
    }
  }
</style>
