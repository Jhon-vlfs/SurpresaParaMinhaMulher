window.onload = function () {
    let player = document.getElementById("spotifyPlayer");
    player.style.display = "block";

    setTimeout(() => {
        player.src += "&autoplay=1";}, 1000);
};

// TODO: melhorar essa bomba aqui também
let imagens = ["22c1b6b7-78e3-4de1-aa7d-b096ffbf98ca.jpg", "44f33482-ab4f-4106-bccf-d81b50095139.jpg", "76f32772-6447-4515-9fe0-be01590b73bd.jpg", "7705f9ea-0541-4d30-8c0e-d1a6f1988c0b.jpg", "050174c4-1f23-49d6-a11f-2d6d8cdc0099.jpg", "cef10204-b322-4132-b27d-a77d8bff1cd3.jpg", "de89c91f-1e2a-4a10-915a-90f09aa010ba.jpg"];
let index = 0;
function mudarImagem() {
    document.getElementById("slide").src = imagens[index];
    index = (index + 1) % imagens.length;
}
setInterval(mudarImagem, 3000);

// * essa bomba nem ficou tão ruim, mas dá pra ser melhor
// ! NÃO TIRA O MATH.FLOOR PELO AMOR DE DEUS
let dataInicio = new Date("2022-02-27T07:21:00");
function atualizarContador () {
    let agora = new Date();
    let diferenca = agora - dataInicio;

    let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    let dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    document.getElementById("contador").innerText = `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
setInterval(atualizarContador, 1000);