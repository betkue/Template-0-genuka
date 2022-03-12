<script>
  import { fade } from "svelte/transition";
  export let photo;
  export let name;
  export let price;
  export let collections;
</script>

<div class="card" transition:fade>
  <img src={photo} alt="produit" />
  <button>{collections}</button>
  <div class="card-footer">
    <h2>{name}</h2>
    <h3>{price} FCFA</h3>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";

  .card {
    width: 30%;
    cursor: pointer;
    margin: 1rem;
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
</style>
