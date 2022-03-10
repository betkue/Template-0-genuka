<script>
</script>

<div class="container">
  <div class="center">
    <h1>Inscription</h1>
    <form action="">
      <div>
        <input
          type="text"
          placeholder="Votre prenom"
          id="firstname"
          name="firstname"
        />
      </div>
      <div>
        <input type="text" placeholder="Votre nom *" id="name" name="name" />
      </div>
      <div>
        <input
          type="number"
          placeholder="Votre numéro de téléphone (Avec indicatif) *"
          name="phone"
          id="phone"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Votre adresse email *"
          name="email"
          id="email"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Votre mot de passe *"
          name="password"
          id="password"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirmez votre mot de passe *"
          name="confirmpassword"
          id="confirmpassword"
        />
      </div>
      <a href="/"><button>M'inscrire</button></a>
      <a href="/connexion">Déjà un compte? Connectez-vous.</a>
    </form>
  </div>
</div>

<style lang="scss">
  @import "./../styles/settings";
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 450px;
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
