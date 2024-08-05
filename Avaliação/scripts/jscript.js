const musicas = document.querySelectorAll(".musica-album");

musicas.forEach((musica) => {
  console.log(musica);
  const letra = musica.querySelector(".letra");
  const botao = musica.querySelector(".botao-letra");

  botao.addEventListener("click", () => {
    if (letra.classList.contains("show")) {
      letra.classList = "letra hidden";
    } else if (letra.classList.contains("hidden")) {
      letra.classList = "letra show";
    }
  });
});
