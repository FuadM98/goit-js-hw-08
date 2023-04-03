import throttle from 'lodash.throttle';

const STORAGE__KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', onTextAreaInput);

refs.form.addEventListener('input', throttle(onFormInput, 500));

checkTheStorage();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE__KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  localStorage.removeItem(STORAGE__KEY);

  evt.currentTarget.reset();
}

function checkTheStorage() {
  const savedInfo = localStorage.getItem(STORAGE__KEY);
  const parsedInfo = JSON.parse(savedInfo);

  if (parsedInfo) {
    refs.email.value = parsedInfo.email;
    refs.textarea.value = parsedInfo.message;
  }
}
