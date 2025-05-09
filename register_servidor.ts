const form = document.getElementById("servidorForm") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const matricula = (document.getElementById("matricula") as HTMLInputElement).value.trim();

  if (!name || !email || !matricula) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  console.log("Servidor cadastrado:", { name, email, matricula });
  alert("Servidor cadastrado com sucesso!");
});
