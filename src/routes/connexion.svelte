<script>
</script>

<div class="container">
  <div class="center">
    <h1>Connexion</h1>
    <form action="">
      <div>
        <input
          type="text"
          placeholder="Votre adresse email ou numero de telephone *"
          id="email"
          name="email"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Votre mot de passe *"
          id="password"
          name="email"
        />
      </div>
      <a href="/"><button>Connexion</button></a>
      <a href="/password_forgotten">Mot de passe oublié ?</a>
      <a href="/inscription">Pas encore de compte ? Inscrivez-vous.</a>
    </form>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .center {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
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
      }
      a {
        margin: 1rem;
        button {
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
      }
    }
  }
</style>
