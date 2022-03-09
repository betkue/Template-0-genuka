<script>
    export let photo;
    export let name;
    export let price;
    export let description;
    export let collections;
</script>

<div>
    <img src={photo} alt="">
    <h2>{name}</h2>
    <h3>{price}</h3>
    <h4>{description}</h4>
    <button>{collections}</button>
</div>

<style lang="scss">
  @import "./../styles/settings";
  img{
      width: 300px;
      height: 300px;
      object-fit: cover;
  }
</style>


