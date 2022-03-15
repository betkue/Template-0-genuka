<script>
  import { fade } from "svelte/transition";
  export let id, photo, currency, name, price, collections;

  function openProduct(){

  }
</script>

<a href="/produits/{id}" class="card" on:click={openProduct} transition:fade>
  
    <div class="content">
      <img src={photo} alt="produit" />
      <button>{collections}</button>
      <div class="card-footer">
        <h2>{name}</h2>
        <h3>{price} {currency}</h3>
      </div>
    </div>
  
</a>

<style lang="scss">
  @import "./../styles/settings";

  .card {
    width: calc(100% / 3);
    cursor: pointer;
    border-radius: 10px;
    transition: .3s ease;
    &:hover{
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
    button {
      color: $light;
      background: $gray;
      border-radius: 15px;
      border: none;
      font-weight: bold;
      padding: 0.5rem;
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
