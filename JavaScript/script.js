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
		titulo: "Os Cinco Elementos II - VENDIDO",
		tamanho: "60x100cm",
		tecnica: "Mista",
		desc: "A Criação da Flora vem representar o momento criativo e mágico do belo surgindo na natureza..",
	},
];

const obrasTerapeutica = [
	{
		src: "img/serie-terapeutica/transformacao.png",
		titulo: "Transformação",
		tamanho: "60x90cm",
		tecnica: "Mista",
		desc: "Após a Descoberta é possível promover a Transformação tão necessária a um estado de plenitude e paz interior.",
	},
	{
		src: "img/serie-terapeutica/consciencia.png",
		titulo: "Consciência",
		tamanho: "70 x 70cm",
		tecnica: "Acrílico sobre tela",
		desc: "A obra vem representar o momento de conscientização necessário para a ressignificação do sofrimento em busca do caminho para a cura.",
	},
	{
		src: "img/serie-terapeutica/descoberta.png",
		titulo: "Descoberta",
		tamanho: "60x90cm",
		tecnica: "Mista",
		desc: " A obra reproduz o movimento necessário para a descoberta de um novo estado de ser, mais livre e conectado com o eu interior.",
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
	// --- MODAL DE CONTATO ---
	const btnContato = document.getElementById("btn-contato");
	const modalContato = document.getElementById("modal-overlay");
	const closeBtnContato = document.querySelector(".close-btn");

	if (btnContato) {
		btnContato.onclick = function (e) {
			e.preventDefault(); // Impede o link de recarregar a página
			modalContato.style.display = "flex";
		};
	}

	if (closeBtnContato) {
		closeBtnContato.onclick = function () {
			modalContato.style.display = "none";
		};
	}

	// Fechar clicando fora (Versão atualizada para ambos os modais)
	window.onclick = function (event) {
		if (event.target == modalContato) {
			modalContato.style.display = "none";
		}
		if (event.target == modalGaleria) {
			modalGaleria.style.display = "none";
		}
	};
};
