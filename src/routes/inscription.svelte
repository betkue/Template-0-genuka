<script>
  let email, tel, password, firstname, lastname;
  let fromApi = true;
  let company_id = 468;
  let result = null;
  async function register() {
    const res = await fetch(
      "https://dashboard.genuka.com/api/2021-10/clients/register",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          tel,
          password,
          firstname,
          lastname,
          company_id,
          fromApi,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const result = await res.json();
    return getUser(result.access_token);
  }

  async function getUser(token) {
    const res = await fetch("https://dashboard.genuka.com/api/2021-10/user", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const infosUser = await res.json();
    console.log(infosUser);
  }

  // la2spaille@gmail.com - qwertyuiop
</script>

<svelte:head>
  <title>Inscription</title>
</svelte:head>

<div class="container">
  <div class="center">
    <h1>Inscription</h1>
    <div class="form">
      <div>
        <input
          type="text"
          placeholder="Votre prenom"
          id="firstname"
          name="firstname"
          bind:value={lastname}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Votre nom *"
          id="name"
          name="name"
          bind:value={firstname}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Votre numéro de téléphone (Avec indicatif) *"
          name="phone"
          id="phone"
          bind:value={tel}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Votre adresse email *"
          name="email"
          id="email"
          bind:value={email}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Votre mot de passe *"
          name="password"
          id="password"
          bind:value={password}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirmez votre mot de passe *"
          name="confirmpassword"
          id="confirmpassword"
          bind:value={password}
          required
        />
      </div>
      <button type="button" on:click={register}>M'inscrire</button>
      <a href="/connexion">Déjà un compte? Connectez-vous.</a>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 100px;
    .center {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    h1 {
      padding: 1rem;
    }
    .form {
      border-radius: 10px;
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
          background: $light;
          a &:focus {
            background: $light;
          }
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
  @media only screen and (max-width: 1200px) {
    .container {
      .center {
        width: 60%;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      .center {
        width: 90%;
      }
    }
  }
</style>
