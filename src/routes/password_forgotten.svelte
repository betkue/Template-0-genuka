<script>
</script>

<div class="container">
  <div class="center">
    <h1>Mot de passe oublié</h1>
    <form action="">
      <div>
        <input
          type="email"
          placeholder="Votre adresse email *"
          id="email"
          name="email"
          required
        />
      </div>
      <a href="/"><button>Reinitialiser mon compte</button></a>
      <a href="/connexion">Revenir à la connexion.</a>
    </form>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    display: flex;
    justify-content: center;
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
