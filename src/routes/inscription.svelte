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

<!--Utilisateur cree -->

<!-- 
    {
"user": {
"last_name": "NGOYA",
"first_name": null,
"email": "leonel.ngoya@facsciences-uy1.cm",
"tel": 237699792037,
"sex": null,
"other": null,
"id": 1536,
"entreprise_id": 468
},
"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMyIsImp0aSI6IjYzNDM2YWRlYmYwZTcwMWZiZWY5ZDJhMzkxOGFkNWM1M2RjMDI4YjNmMzAzMTMxNWRhNTAzMGM2ZGUzMjk5NDQ3OTI2ZTcxMjUwZWVkNTBhIiwiaWF0IjoxNjQ3ODcyNTkwLCJuYmYiOjE2NDc4NzI1OTAsImV4cCI6MTY3OTQwODU5MCwic3ViIjoiMTUzNiIsInNjb3BlcyI6W119.QhnZ49W3a3TlOYttUpNjU0PYbYQ4DVy_Cn5LN3UGxXZeQQ47eodPyZSPj7aTzmsfAeKOjxJr8Oo0ZR7Ug9RFQAI2q6Ba3uBQeXYbPmM8bxX2p_5541cyFe2d8k156ynqTHNjMT8NZlVwYTmfqvFbfcLpPK8vY7qarqfGMJs7sVFrH5BJaCVfetIC-DLcmKTJpvF4quH5GSOA1kZcLMIDAZth_z4cUSHyn_sB9vIxsBKBbxAeXMGpsJFfxoi4WoG7Q8NIgwsosxFwNUvWgKgCl2WW9bqHJhcGDYt241J5V4CEyickqruCnC5pztHTwEiaMQwdoP8924pTccU3ujutqgEwKdAs79n3KvBT7EIJ19qQZFgOgVoijFZWHZCLivLSfD37QsqByhZO_vYEVLEEKIZzLzC_WWpJxZT3RIZ1AhXmGhIAX5Dis8hW_N-qxSInEnvj0rz_dbXjjIV8OBvPnyp12IT5Js4EPa7Da-d-wE6bZz30xL6CZnXyb9hDSUdYnXKtcvi462m3PBwf6N-GlSjqwWWIRj5GyhpjucIhau3DxFeLq99hHEN6vaLv3EcH3cq84zaajOA-7lBBSiACSnCdZ2bOGtCmltRgQiAvtZjOzevxStfL3rc76GHaBAPb7v1OE-7-ZNew3uJJTgUPQ176sIqmhc6DITqsg0FvwWg"
}

mot de passe : qwerty
   -->
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
      padding: 1rem;
      border-radius: 10px;
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
