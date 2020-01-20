import Input from '../components/input.js';
import Button from '../components/button.js';
import TitleOne from '../components/h-one.js';
import TitleTwo from '../components/h-two.js';
import Paragraph from '../components/paragraph.js';

const saveEvent = () => {
  const imageInput = document.querySelector('.input-image').value;
  const bandNameInput = document.querySelector('.input-bandName').value;
  const dateInput = document.querySelector('.input-date').value;
  const timeInput = document.querySelector('.input-time').value;
  const genresInput = document.querySelector('.genres').value;
  const name = document.querySelector('.name').textContent;

  firebase.firestore().collection('events').add({
    image: imageInput,
    bandName: bandNameInput,
    date: dateInput,
    time: timeInput,
    genres: genresInput,
    userId: firebase.auth().currentUser.uid,
    addedAt: (new Date()).toLocaleString('pt-BR'),
    name: name,
  })

  document.querySelector('.input-image').value = '';
  document.querySelector('.input-bandName').value = '';
  document.querySelector('.input-date').value = '';
  document.querySelector('.input-time').value = '';
  document.querySelector('.genres').value = '';

};

const cleanForm = () => {
  document.querySelector('.form-event').reset();
}

const logOut = () => {
  firebase.auth().signOut();
}

const userHome = () => {
  window.location = '#home';
}

const userProfile = () => {
  window.location = '#profile';
};

const Event = (props) => {
  const template = `
  <header class='header'>
    <div class='header-title'>
      <div class="text-header">
        <label for='toggle-side-menu'>
          <div class='fas fa-bars'></div>
        </label>
        ${Paragraph({
          class: 'my-home',
          text: 'Meus Eventos',
        })}
      </div>
    </div>
    <input 
      type='checkbox'
      id='toggle-side-menu' 
      class='toggle-side-menu'
    />
    <div class='side-menu hide-desktop'>
      ${Button({
      type: 'button',
      class: 'btn profile-btn menu-options',
      onClick: userHome,
      title: 'Home',
      })}
      ${Button({
      type: 'button',
      class: 'btn logout-btn menu-options',
      onClick: logOut,
      title: 'Sair'
      })}
    </div>
  </header>
  <section>
    <form class="form-event">
      ${TitleOne({
      class: 'name',
      text: props.users.name || "Bem Vindo!",
      })}
      ${Input({
      class: 'input-image input-post',
      placeholder: 'Insira a URL de sua imagem',
      type: 'text',
      })}
      ${Input({
      class: 'input-bandName input-post',
      placeholder: 'Nome da banda/artista',
      type: 'text',
      })}
      ${Input({
      class: 'input-date input-post',
      placeholder: 'Selecione a data',
      type: 'date',
      })}
      ${Input({
      class: 'input-time input-post',
      placeholder: 'Selecione a data',
      type: 'time',
      min: '00:00',
      max: '23:00',
      })}
  <select class="genres">
    <option value="Rock">Rock</option>
    <option value="MPB">MPB</option>
    <option value="Samba">Samba</option>
    <option value="Sertanejo">Sertanejo</option>
    <option value="Pop">Pop</option>
  </select>
  <div class="div-event">
    ${Button({
    class: 'button-back',
    title: 'LIMPAR',
    onClick: cleanForm,
    })}
    ${Button({
    class: 'button-continue',
    title: 'SALVAR',
    onClick: saveEvent,
    })}
  </div>
  </form>
  </section>
  <footer class="footer">
    <div class='menu-icon'></div>
    ${Button({
    type: 'button',
    class: 'btn logout-btn fas fa-user menu-icon',
    onClick: userProfile,
    title: '',
  })}
  </footer>

`;
  return template;
};

export default Event;
