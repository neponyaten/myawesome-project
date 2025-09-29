const dlg = document.getElementById('registerDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('registerForm');
let lastActive = null;

openBtn.addEventListener('click', () => {
  lastActive = document.activeElement;
  dlg.showModal();
  dlg.querySelector('input')?.focus();
});

closeBtn.addEventListener('click', () => dlg.close('cancel'));

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  [...form.elements].forEach(el => el.setCustomValidity?.(''));
  if (!form.checkValidity()) {
    form.reportValidity();
    [...form.elements].forEach(el => {
      if (el.willValidate) el.toggleAttribute('aria-invalid', !el.checkValidity());
    });
    return;
  }

  dlg.close('success');
  alert('Регистрация прошла успешно!');
  form.reset();
});

dlg.addEventListener('close', () => { lastActive?.focus(); });