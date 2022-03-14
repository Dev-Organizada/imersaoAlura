var listaFilmes = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/93/75/86/20275816.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71jeQnaNsJL.jpg",
  "https://pausadrammatica.files.wordpress.com/2015/06/minions-movie-poster.jpg"
];

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice] + ">");
}
