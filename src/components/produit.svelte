<script>
    export let photo;
    export let name;
    export let price;
    export let description;
</script>

<div>
    <img src={photo} alt="">
    <h2>{name}</h2>
    <h3>{price}</h3>
    <h4>{description}</h4>
</div>

