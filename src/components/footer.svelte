<script>
  import { onMount } from "svelte";
  let name;
  let description;
  let logo;
  let phone;
  let email;

  const url = "https://dashboard.genuka.com/api/2021-10/companies/details/468";
  //const url = "https://dashboard.genuka.com/api/2021-10/companies/byurl?url=http://localhost:2974"
  onMount(async function () {
    const response = await fetch(url);
    const data = await response.json();
    name = data.name;
    description = data.description;
    logo = data.logo;
    phone = data.phone;
    email = data.email;
  });
</script>

<div class="footer">
  <div class="container">
    <div class="footer-left">
      <h3>Nos contacts</h3>
      <h4>{email}</h4>
      <h4>{phone}</h4>
    </div>
    <div class="footer-center">
      <div class="w-logo">
        <img src={logo} alt="logo" />
        <h3>{name}</h3>
      </div>

      <p>{description}</p>
    </div>
    <div class="footer-right">
      <div class="w-text">
        <h3>Newsletter</h3>
        <p>
          <span
            >Ne manquez plus nos offres et promotions. Inscrivez-vous à notre
            newsletter en enregistrant votre email/ numéro de téléphone</span
          >
        </p>
      </div>
      <label>
        <input type="email" placeholder="Email" />
        <button type="submit">Go</button>
      </label>
    </div>
  </div>
  <div class="attribution">
    <strong>
      created by 
      <a
        rel="noopener"
        href="https://twitter.com/ln_dev7"
        target="_blank"
        ><span> @LN </span></a
      >
      X
      <a
        rel="noopener"
        href="https://twitter.com/la2spaille?t=DKdFp3xhoD0HMBn9TGa6Rw&amp;s=09"
        target="_blank"
        ><span> @La2spaille </span></a
      >
      - Boutique propulsée par <a
        rel="noopener"
        href="https://www.genuka.com"
        target="_blank"
      >
        Genuka </a
      > . Version 1.1.4
    </strong>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  @import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&family=Lora:wght@500;700&family=Montserrat:wght@400;500;700&display=swap");
  .attribution strong {
    font-family: "Montserrat", sans-serif;
    letter-spacing: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 25px 0;
    color: $orange;
  }
  .attribution a {
    text-transform: none;
  }
  .attribution span {
    font-weight: 700;
    text-decoration: underline;
  }
  .footer {
    background: $blueDark;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 135px;
    .container {
      width: 100%;
      padding: 45px 0 160px;
      display: flex;
      justify-content: space-between; 
      >div {
        width: auto;
      }
    }
    &-left,
    &-right {
      h3 {
        color: $orange;
      }
    }
    &-center {
      display: flex;
      flex-direction: column;
      gap: 15px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
      h3 {
        font-size: 40px;
        color: $orange;
      }
      p {
        color: rgba( #fff, .75);
        max-width: 350px;
      }
    }
  }
  .w-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .footer-right {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .w-text {
    display: flex;
    flex-direction: column;
    max-width: 350px;
  }
  .footer-right h3 {
    font-weight: 500;
    font-size: 32px;
  }
  .footer-right p {
    padding: 15px 0 0;
    color: rgba( #fff, .75);
  }
  .footer-right label {
    overflow: hidden;
    border-radius: 55px;
    max-width: 350px;
    height: 55px;
    background: #fff;
    padding: 4px;
    display: flex;
    justify-content: space-between;
  }
  .footer-right input {
    color: #000;
    font-weight: 500;
    padding: 17px;
    background: transparent;
    width:calc(100% - 46px);
  }
  .footer-right input::placeholder {
    color: #000;
    font-weight: 500;
  }
  .footer-right button {
    justify-content: center;
    height: 46px;
    width: 46px;
    padding: -4px;
    background: $orange;
    border-radius: 50%;
    color: #fff;
    line-height: 1;
    cursor: pointer;
  }
  @media (max-width: 1050px) {
    .footer {
      padding: 0 100px;
    }
    .container{
      gap: 20px;
    }
  }
  @media (max-width: 950px) {
    .footer {
      padding: 0 20px;
    }
    
  }
  @media (max-width: 700px) {
    .footer {
      padding: 0 50px;
    }
    .container {
      padding: 40px 0 195px;
      flex-direction: column;
      gap: 60px;
    }
  }
  @media (max-width: 450px) {
    .footer {
      padding: 0 40px;
    }
    
    
  }
</style>
