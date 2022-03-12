var filmes = [
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/79/16/19961587.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/3/30/WALL-E.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27242689.jpg%27&ImageUrl=%27242689.jpg%27&EntityType=%27Item%27&EntityId=%2725097%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
  "https://upload.wikimedia.org/wikipedia/pt/8/83/Encanto_poster.jpg",
  "https://media.fstatic.com/qubG_xQHviVsn1TAnKvt-r4VXf4=/210x312/smart/media/movies/covers/2014/02/jojo-no-kimyou-na-bouken-stardust-crusaders-1a-temporada_t95197.jpg",
  "http://cdn.shopify.com/s/files/1/0450/0717/5837/products/image-1_b77d20ef-5766-4335-8710-02917f4d7599_grande.jpg?v=1607094044",
  "https://a-static.mlcdn.com.br/1500x1500/lego-batman-o-filme-dvd-warner/whiteshark/v27125/033f7735664279a6f39c69b6d080cfc1.jpg"
];

//   valor incial      condição     expressão final
for (var indíce = 0; indíce < filmes.length; indíce++) {
  document.write("<img src=" + filmes[indíce] + ">");
}