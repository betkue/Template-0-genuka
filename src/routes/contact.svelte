<script>
  import { onMount } from "svelte";
  import { Memoire } from "../store/data.js";
  let company, logo, name, description, email, phone;
  onMount(async function () {
    company = await Memoire.fetchCompany();
    name = company.name;
    logo = company.logo;
    description = company.description;
    email = company.email;
    phone = company.phone;
  });
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="container">
  <div class="center">
    <div class="container-contact">
      <h1>Contactez nous</h1>
          <br>
      <h2><a href="tel:+{phone}">{phone}</a></h2>
      <h2><a href="mailto:{email}">{email}</a></h2>
    </div>
    <!-- <form action="">
      <div>
        <input type="text" placeholder="Nom *" id="name" name="name" required />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email *"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message *" required/>
      </div>
      <button>Envoyer</button>
    </form> -->
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    .center {
      width: 80%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    form {
      padding: 1rem;
      width: 100%;
      background: $lighter;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        width: 100%;
        margin: 1rem;
        input {
          width: 100%;
          border: none;
          outline: none;
          border-radius: 5px;
          padding: 1rem;
        }
        textarea{
          width: 100%;
          border: none;
          outline: none;
          border-radius: 5px;
          padding: 1rem;
          resize: none;
        }
      }
      button {
        margin: 1rem;
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
      a {
        margin: 0.5rem;
        &:hover {
          color: $orange;
        }
      }
    }
  }
</style>
