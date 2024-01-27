function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "assets/avatar.jpg")
  }

  const alt = document.querySelector("#profile img").getAttribute("alt")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Bruno Tiago de jaqueta com estampa de camuflagem e zíper frontal e camiseta preta, em um campo de futebol bem cuidado com grama verde e linhas marcadas, de óculos escuro e sorrindo."
    )
  } else {
    img.setAttribute(
      "alt",
      "Bruno Tiago de terno preto e gravata vermelha, em frente a uma parede clara e plantas verde."
    )
  }
}
