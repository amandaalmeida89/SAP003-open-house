import Input from '../components/input.js'
import Button from '../components/button.js'

//Funcao para fazer login
const signIn = () => {
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location = '#home';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        document.querySelector('.error').textContent = 'Senha Incorreta.';
      } else if (errorCode === 'auth/user-not-found') {
        document.querySelector('.error').textContent = 'E-mail não registrado.';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error').textContent = 'Formato de email inválido.';
      }
    });
};

// Funcao ir pagina de registro - chamar no botao registar-se
const register = () => {
  window.location = '#register';
}

const Login = () => {
  const template = `
    <div class="login-main">
      <section class= "login-section">
        <img class="login-logo" src="./images/logo.png" alt="logo autofalante escrito live In Sampa">
        <form class="login-form" class="form">
          ${Input({
            class: 'input-email input-register',
            placeholder: 'Email',
            type: 'email',
          })}
          ${Input({
            class: 'input-password input-register',
            placeholder: 'Senha',
            type: 'password',
          })}
          <div class="login-buttons">
            ${Button({
              class: 'button-login',
              title: 'ENTRAR',
              onClick: signIn,
            })}
            ${Button({
              class: 'button-register',
              title: 'REGISTRAR',
              onClick: register,
            })}
          </div>
          <p class="error"></p>
        </form>
      </section>
    </div>
  `;

  return template;
};

export default Login;