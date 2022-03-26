<script>
  import { createEventDispatcher } from "svelte";
  export let photo, currency, name, price, index;

  const dispatch = createEventDispatcher();
  function supprDep() {
    dispatch("supp-product", { id: index });
  }
 
//   function delProduct() {
//     localStorage.removeItem(index);
//   }
</script>

<div class="w-bag-items c-br">
  <div class="w-img  c-br ">
    <div class="c-img c-br">
      <img src={photo} alt="" />
    </div>
  </div>
  <div class="w-bag-item-content">
    <div class="w-bag-item-description">
      <strong class="bag-item-price"><span>{price} {currency}</span></strong>
      <h3 class="bag-item-name"><span>{name}</span></h3>
    </div>
  </div>

  <div class="w-bag-item-cross c-br" on:click={supprDep}>
    <svg
      class="svg-inline icon-delete"
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
    >
      <path
        d="M15.04 17.422c.377 0 .702-.134.976-.4.273-.267.41-.59.41-.967V3.887h.39a.71.71 0 0 0 .508-.205.642.642 0 0 0 .215-.479.702.702 0 0 0-.723-.703h-3.593V1.367c0-.377-.137-.7-.41-.967a1.35 1.35 0 0 0-.977-.4H5.703c-.39 0-.72.133-.986.4-.267.267-.4.59-.4.967V2.5H.702a.678.678 0 0 0-.498.205.667.667 0 0 0-.205.488c0 .19.068.352.205.489a.678.678 0 0 0 .498.205h.606v12.168c0 .377.136.7.41.966.273.267.599.4.976.4H15.04zM11.835 2.5H5.684V1.387h6.152V2.5zm3.203 13.555H2.695V3.887H15.04v12.168zM8.76 14.16a.667.667 0 0 0 .489-.205.678.678 0 0 0 .205-.498V6.934a.632.632 0 0 0-.215-.489.622.622 0 0 0-.478-.215.667.667 0 0 0-.489.206.678.678 0 0 0-.205.498v6.523c0 .195.069.361.205.498.137.137.3.205.489.205zm-3.798 0a.678.678 0 0 0 .498-.205.678.678 0 0 0 .205-.498V6.934a.632.632 0 0 0-.215-.489.632.632 0 0 0-.488-.215.678.678 0 0 0-.498.206.678.678 0 0 0-.205.498v6.523c0 .195.068.361.205.498a.678.678 0 0 0 .498.205zm7.559 0a.678.678 0 0 0 .498-.205.678.678 0 0 0 .205-.498V6.934a.632.632 0 0 0-.215-.489.632.632 0 0 0-.488-.215.678.678 0 0 0-.499.206.678.678 0 0 0-.205.498v6.523c0 .195.069.361.205.498a.678.678 0 0 0 .499.205z"
        fill="#354957"
        fill-rule="evenodd"
      /></svg
    >
  </div>
</div>

<style lang="scss">
  // c : component
  // w : wrapper
  // cta : call to action (btn/input)
  // -br : border-radius; -sp : space-between
  .c-br {
    background: #eff3f1;
    border-radius: 10px;
  }
  .w-img {
    width: 25%;
    overflow: clip;
  }
  .c-img {
    position: relative;
    padding-bottom: 100%;
    background: #fff;
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      object-fit: cover;
    }
  }
  .w-bag-items {
    display: flex;
    padding: 20px 30px;
    gap: 20px;
    span {
      color: #000;
    }
  }
  .w-bag-item-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .w-bag-item-description {
    display: flex;
    flex-direction: column;
    gap: 12.5px;
    strong {
      span {
        font-weight: 700;
        letter-spacing: 1.7px;
        font-size: 16px;
      }
    }
    h3 {
      span {
        font-size: 15.75px;
      }
    }
  }

  .w-bag-item-cross {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px 0 0;
  }
</style>
