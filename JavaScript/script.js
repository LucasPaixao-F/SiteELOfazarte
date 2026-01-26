// script.js

// --- DADOS DAS OBRAS (Agora com Título e Descrição) ---
const obrasConexao = [
	{
		src: "img/serie-conexao/jardim da alma.png",
		titulo: "Jardim da Alma",
		tamanho: "70x90cm",
		desc: "Uma obra delicada que combina formas circulares, miniaturas de flores e folhas com palavras escritas em pequena escala. O título sugere que esses elementos representam a complexidade e a beleza do mundo interior, convidando à contemplação atenta dos detalhes sutis da alma.",
		tecnica: "Acrílico sobre tela",
	},
	{
		src: "img/serie-conexao/agenere.png",
		titulo: "Agênere",
		tamanho: "50x60cm",
		desc: "Agênere é uma pintura intuitiva sem esboço prévio, onde o pincel foi guiado pela inspiração e intuição. Agênere faz referência ao momento em que Cristo se tornou tangível aos olhos humanos sobre doação ectoplasmática de Maria de Nazará.",
		tecnica: "Acrílico sobre tela",
	},
	{
		src: "img/serie-conexao/os 5 elementos 2.png",
		titulo: "Os 5 Elementos II",
		desc: "Equilíbrio entre terra, água, fogo, ar e éter.",
	},
	{
		src: "img/serie-conexao/A conexao do ser.png",
		titulo: "A Conexão do Ser",
		desc: "O momento exato onde a matéria encontra o divino.",
	},
];

const obrasTerapeutica = [
	{
		src: "img/serie-terapeutica/transformacao.png",
		titulo: "Transformação",
		desc: "O processo doloroso e belo da mudança.",
	},
	{
		src: "img/serie-terapeutica/consciencia.png",
		titulo: "Consciência",
		desc: "O despertar para novas realidades interiores.",
	},
	{
		src: "img/serie-terapeutica/descoberta.png",
		titulo: "Descoberta",
		desc: "Encontrando caminhos onde antes havia muros.",
	},
];

// --- SELEÇÃO DE ELEMENTOS ---
const modalGaleria = document.getElementById("modal-galeria");
const tituloGaleria = document.getElementById("titulo-galeria");
const track = document.getElementById("carousel-track");
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const closeBtnGaleria = document.querySelector(".close-btn-galeria");

// Variáveis de controle do carrossel
let currentSlideIndex = 0;
let totalSlides = 0;
const cardsToShow = 2; // Quantos cards mostramos por vez (pc)

function abrirGaleria(titulo, listaObras) {
	// 1. Limpa o carrossel anterior
	track.innerHTML = "";
	tituloGaleria.innerText = titulo;
	currentSlideIndex = 0; // Reseta para o começo
	totalSlides = listaObras.length;

	// 2. Cria os cards (Imagem + Texto)
	listaObras.forEach((obra) => {
		// Cria o elemento do card
		const card = document.createElement("div");
		card.className = "carousel-card";

		card.innerHTML = `
            <img src="${obra.src}" alt="${obra.titulo}">
            <div class="carousel-info">
                <h3>${obra.titulo}</h3>
					 <p><strong>Tamanho: </strong>${obra.tamanho ? obra.tamanho : ""}</p>
					 <p><strong>Técnica: </strong>${obra.tecnica ? obra.tecnica : ""}</p>
                <p><strong>Sobre: </strong>${obra.desc}</p>
            </div>
        `;

		track.appendChild(card);
	});

	// 3. Mostra o modal e atualiza a posição inicial
	modalGaleria.style.display = "flex";
	atualizarCarrossel();
}

function atualizarCarrossel() {
	const isMobile = window.innerWidth <= 768;
	const itemsPerView = isMobile ? 1 : cardsToShow;
	const percentage = -(currentSlideIndex * (100 / itemsPerView));
	track.style.transform = `translateX(${percentage}%)`;

	btnVoltar.style.opacity = currentSlideIndex === 0 ? "0.3" : "1";
	btnVoltar.style.cursor = currentSlideIndex === 0 ? "default" : "pointer";

	// Verifica se chegou no fim
	const maxIndex = totalSlides - itemsPerView;
	btnAvancar.style.opacity = currentSlideIndex >= maxIndex ? "0.3" : "1";
	btnAvancar.style.cursor =
		currentSlideIndex >= maxIndex ? "default" : "pointer";
}

// --- EVENTOS DE CLIQUE ---

// Botão Série Conexão
const btnConexao = document.getElementById("btn-conexao");
if (btnConexao) {
	btnConexao.onclick = function () {
		abrirGaleria("Série Conexão - Obras Extras", obrasConexao);
	};
}

// Botão Série Terapêutica
const btnTerapeutica = document.getElementById("btn-terapeutica");
if (btnTerapeutica) {
	btnTerapeutica.onclick = function () {
		abrirGaleria("Série Terapêutica - Obras Extras", obrasTerapeutica);
	};
}

// Botões de Navegação (Next/Prev)
btnAvancar.onclick = function () {
	const isMobile = window.innerWidth <= 768;
	const itemsPerView = isMobile ? 1 : cardsToShow;
	const maxIndex = totalSlides - itemsPerView;

	if (currentSlideIndex < maxIndex) {
		currentSlideIndex++;
		atualizarCarrossel();
	}
};

btnVoltar.onclick = function () {
	if (currentSlideIndex > 0) {
		currentSlideIndex--;
		atualizarCarrossel();
	}
};

// Fechar Galeria no X
if (closeBtnGaleria) {
	closeBtnGaleria.onclick = function () {
		modalGaleria.style.display = "none";
	};
}

// Fechar clicando fora
window.onclick = function (event) {
	const modalContato = document.getElementById("modal-overlay");
	if (event.target == modalContato) {
		modalContato.style.display = "none";
	}
	if (event.target == modalGaleria) {
		modalGaleria.style.display = "none";
	}
};
