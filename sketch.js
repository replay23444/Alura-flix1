// Array para armazenar as URLs dos filmes
let listaFilmes = [];

// Função para adicionar um filme
function adicionarFilme() {
    const filmeInput = document.getElementById('filme');
    const urlFilme = filmeInput.value;

    // Expressão regular para verificar se a URL termina com uma extensão de imagem comum
    const isImage = /\.(jpeg|jpg|gif|png|webp|bmp)$/i;

    if (urlFilme.trim() === '') {
        alert("Por favor, insira uma URL de imagem.");
        return;
    }

    if (!isImage.test(urlFilme)) {
        alert("A URL inserida não parece ser uma imagem válida. Por favor, use URLs que terminem em .jpg, .png, .gif, etc.");
        return;
    }

    // Verifica se a URL já foi adicionada para evitar duplicatas
    if (listaFilmes.includes(urlFilme)) {
        alert("Este filme já foi adicionado!");
        filmeInput.value = ''; // Limpa o campo
        return;
    }

    // Adiciona a URL à lista
    listaFilmes.push(urlFilme);

    // Chama a função para exibir os filmes atualizados
    exibirFilmes();

    // Limpa o campo de input
    filmeInput.value = '';
}

// Função para exibir os filmes na tela
function exibirFilmes() {
    const divListaFilmes = document.getElementById('listaFilmes');
    divListaFilmes.innerHTML = ''; // Limpa a lista antes de redesenhar

    listaFilmes.forEach(url => {
        const filmeElemento = document.createElement('div');
        filmeElemento.classList.add('filme-item');

        const imagemElemento = document.createElement('img');
        imagemElemento.src = url;
        imagemElemento.alt = "Capa do Filme";

        // Adiciona um listener para erros de carregamento da imagem
        imagemElemento.onerror = function() {
            console.error("Erro ao carregar imagem:", url);
            // Pode adicionar uma imagem de placeholder ou remover o elemento
            imagemElemento.src = "https://via.placeholder.com/180x270?text=Imagem+nao+disponivel"; // Imagem de placeholder
        };

        // Extrai um título simples da URL (opcional, mas útil)
        const titulo = url.substring(url.lastIndexOf('/') + 1).split('.')[0].replace(/[-_]/g, ' ');
        const tituloElemento = document.createElement('div');
        tituloElemento.classList.add('filme-titulo');
        tituloElemento.textContent = titulo;

        filmeElemento.appendChild(imagemElemento);
        filmeElemento.appendChild(tituloElemento); // Adiciona o título
        divListaFilmes.appendChild(filmeElemento);
    });
}

// Opcional: Adicionar alguns filmes de exemplo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de filmes para teste
    listaFilmes.push("https://m.media-amazon.com/images/I/71c05l-I-BL._AC_UF894,1000_QL80_.jpg");
    listaFilmes.push("https://m.media-amazon.com/images/I/81F5PF311CL._AC_UF894,1000_QL80_.jpg");
    listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/2/20/The_Batman_poster.jpg");
    listaFilmes.push("https://br.web.img3.acsta.net/pictures/21/04/28/17/04/1090473.jpg"); // Duna
    listaFilmes.push("https://br.web.img3.acsta.net/pictures/19/07/04/16/22/0831034.jpg"); // O Rei Leão

    exibirFilmes();
});
