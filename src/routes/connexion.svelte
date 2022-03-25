<script>
  let email, tel, password;
  let fromApi = true;
  let company_id = 468;
  let result = null;

  async function connect() {
    const res = await fetch(
      "https://dashboard.genuka.com/api/2021-10/clients/login",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          company_id,
          fromApi,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const json = await res.json();
    result = JSON.stringify(json);
    console.log(result.length);
  }

  const axios = require("axios");

  const login = (email, password) => {
    const data = JSON.stringify({
      email: "leonelngoya@gmail.com",
      password: "qwerty",
      fromApi: true,
    });

    const config = {
      method: "post",
      url: "https://dashboard.genuka.com/api/2021-10/clients/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("LOGIN_SUCCESS");
        return getUser(response.data.access_token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getUser = (token) => {
    const config = {
      method: "get",
      url: "https://dashboard.genuka.com/api/2021-10/user",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("GET_USER", response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const resultLogin = login('+237699576276', '12345678');

  login("leonelngoya@gmail.com", "qwerty");
</script>

<div class="container">
  <div class="center">
    <h1>Connexion</h1>
    <div class="form">
      <div>
        <input
          type="email"
          placeholder="Votre adresse email *"
          id="email"
          name="email"
          bind:value={email}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Votre mot de passe *"
          id="password"
          name="password"
          bind:value={password}
          required
        />
      </div>
      <button type="button" on:click={connect}>Connexion</button>
      <a href="/password_forgotten">Mot de passe oublié ?</a>
      <a href="/inscription">Pas encore de compte ? Inscrivez-vous.</a>
    </div>
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
          &:focus{
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
