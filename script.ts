document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form') as HTMLFormElement;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
  
      if (email && password) {
        alert(`Bem-vindo ao Hanniker Point, ${email}!`);
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  });
  