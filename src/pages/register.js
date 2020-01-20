import Input from '../components/input.js';
import Button from '../components/button.js';
import InputFunction from '../components/input-function.js';

const createAccount = () => {
  const nameInput = document.querySelector('.input-name').value;
  const cnpjInput = document.querySelector('.input-CNPJ').value;
  const cepInput = document.querySelector('.input-CEP').value;
  const addressInput = document.querySelector('.input-address').value;
  const numberInput = document.querySelector('.input-number').value;
  const additionalInput = document.querySelector('.input-additionalAddress').value;
  const neighborhoodInput = document.querySelector('.input-neighborhood').value;
  const cityInput = document.querySelector('.input-city').value;
  const phoneInput = document.querySelector('.input-phone').value;
  const emailInput = document.querySelector('.input-email').value;
  const passwordInput = document.querySelector('.input-password').value;
  if (nameInput.length > 0 && cnpjInput.length > 0 && cepInput.length > 0 && numberInput.length > 0 && phoneInput.length > 0) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailInput, passwordInput)
      .then(() => {
        firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name: nameInput,
            cnpj: cnpjInput,
            email: emailInput,
            address: addressInput,
            number: numberInput,
            additional: additionalInput,
            neighborhood: neighborhoodInput,
            city: cityInput,
            phone: phoneInput,
            cep: cepInput,
            password: passwordInput,
            userId: firebase.auth().currentUser.uid,
            addedAt: (new Date()).toLocaleString('pt-BR'),
          })
      })
      .then(() => {
        window.location = '#about';
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          document.querySelector('.error').textContent = 'E-mail já possui uma conta cadastrada!';
        } else if (errorCode === 'auth/invalid-email') {
          document.querySelector('.error').textContent = 'Formato de email inválido!';
        } else if (errorCode === 'auth/weak-password') {
          document.querySelector('.error').textContent = 'Senha deve possuir no mínimo 6 caracteres!';
        }
      });
  } else {
    document.querySelector('.error').textContent = 'Preencha todos os campos para registrar-se';
  }
};

const zipNumber = () => {
  const cep = event.target.value;
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(response => response.json())
      .then(response => {
        document.querySelector('.input-address').value = response.logradouro;
        document.querySelector('.input-neighborhood').value = response.bairro;
        document.querySelector('.input-city').value = response.localidade;
      })
  }
}

const backToLogin = () => {
  window.location = '#login';
}

const Register = () => {
  const template = `
  <section class="register-main">
    <div class="register-title">
      <h1 >Bem vindo ao liveinSampa!</h1>
      <h2>Informações do Estabelecimento:</h2>
    </div>
    <div>
      <form class="register-form" class="form">
        ${Input({
        class: 'input-name input-register',
        placeholder: 'Nome do estabelecimento',
        type: 'text',
        })}
        ${Input({
        class: 'input-CNPJ input-register',
        placeholder: 'CNPJ',
        type: 'number',
        })}
        ${InputFunction({
        class: 'input-CEP input-register',
        placeholder: 'CEP - Ex.01234567',
        type: 'number',
        onchange: zipNumber,
        })}
        ${Input({
        class: 'input-address input-register',
        placeholder: 'Endereço - Ex.Rua/Avenida',
        type: 'text',
        })}
        ${Input({
        class: 'input-number input-register',
        placeholder: 'Nº',
        type: 'number',
        })}
        ${Input({
        class: 'input-additionalAddress input-register',
        placeholder: 'Complemento',
        type: 'text',
        })}
        ${Input({
        class: 'input-neighborhood input-register',
        placeholder: 'Bairro',
        type: 'text',
        })}
        ${Input({
        class: 'input-city input-register',
        placeholder: 'Cidade',
        type: 'text',
        })}
      <select class="input-estate input-register">
        <option value="SP">SP</option>
      </select>
        ${Input({
        class: 'input-phone input-register',
        placeholder: 'Telefone',
        type: 'number',
        })}
      <h2>Email de Acesso:</h2>
        ${Input({
        class: 'input-email input-register',
        placeholder: 'email@exemplo.com',
        type: 'email',
        })}
      <h2>Senha:</h2>
        ${Input({
        class: 'input-password input-register',
        placeholder: 'Senha',
        type: 'password',
        })}
      <p class="error"></p>
    </form>
    <div class="register-buttons">
      ${Button({
      class: 'button-back',
      title: 'VOLTAR',
      onClick: backToLogin,
      })}
      ${Button({
      class: 'button-continue',
      title: 'CONTINUAR',
      onClick: createAccount,
      })}
    </div>
  </div>
</section>
  `;

  return template;
};

export default Register;
