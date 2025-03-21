const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};
const KEY = 'feedback-form-state';
saveValue();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput() {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function saveValue() {
  const storageKey = localStorage.getItem(KEY);

  if (storageKey) {
    formData = JSON.parse(storageKey);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(KEY);
  form.reset();
}
