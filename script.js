function toggleMode() {
    const html = document.documentElement

   // if(html.classList.contains('light')) {
   //     html.classList.remove('light')
   // } else {
   //     html.classList.add('light')
   // }


    html.classList.toggle('light') // essa linha está substituindo o código acima

    // pegaando a img
    const img = document.querySelector("#profile img")

    // substituindo a imagem
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver sem light mode, manter a img normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}