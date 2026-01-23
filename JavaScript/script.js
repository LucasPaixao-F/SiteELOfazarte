// --- CÓDIGO DO MODAL DE CONTATO EXISTENTE (MANTENHA) ---
const modalContato = document.getElementById("modal-overlay");
const btnContato = document.getElementById("btn-contato");
const closeBtnContato = document.querySelector(".close-btn");
const btnEnviar = document.querySelector(".modal-action-btn"); // Corrigi o seletor aqui baseada no seu HTML

if (btnContato) {
	btnContato.onclick = function (event) {
		event.preventDefault();
		modalContato.style.display = "flex";
	};
}

if (closeBtnContato) {
	closeBtnContato.onclick = function () {
		modalContato.style.display = "none";
	};
}

// --- NOVO CÓDIGO: MODAL DE GALERIA ---
const imagensConexao = [
	"img/serie-conexao/extra1.jpg",
	"img/serie-conexao/extra2.jpg",
	"img/serie-conexao/extra3.jpg",
	"img/serie-conexao/A conexao do ser.png",
];

const imagensTerapeutica = [
	"img/serie-terapeutica/extra1.jpg",
	"img/serie-terapeutica/extra2.jpg",
	"img/serie-terapeutica/descoberta.png",
];

// 2. Selecionar elementos do DOM
const modalGaleria = document.getElementById("modal-galeria");
const btnConexao = document.getElementById("btn-conexao");
const btnTerapeutica = document.getElementById("btn-terapeutica");
const closeBtnGaleria = document.querySelector(".close-btn-galeria");
const gridFotos = document.getElementById("grid-fotos-extra");
const tituloGaleria = document.getElementById("titulo-galeria");

// 3. Função para abrir a galeria com as fotos certas
function abrirGaleria(titulo, listaImagens) {
	// Limpa fotos anteriores
	gridFotos.innerHTML = "";
	tituloGaleria.innerText = titulo;

	// Cria as tags <img> para cada item da lista
	listaImagens.forEach((caminhoImagem) => {
		const img = document.createElement("img");
		img.src = caminhoImagem;
		img.alt = "Obra da " + titulo;
		gridFotos.appendChild(img);
	});

	// Mostra o modal
	modalGaleria.style.display = "flex";
}

// 4. Eventos de clique nos botões
if (btnConexao) {
	btnConexao.onclick = function () {
		abrirGaleria("Série Conexão - Obras Extras", imagensConexao);
	};
}

if (btnTerapeutica) {
	btnTerapeutica.onclick = function () {
		abrirGaleria("Série Terapêutica - Obras Extras", imagensTerapeutica);
	};
}

// 5. Fechar Galeria no X
if (closeBtnGaleria) {
	closeBtnGaleria.onclick = function () {
		modalGaleria.style.display = "none";
	};
}

// 6. Fechar clicando fora (Serve para os dois modais)
window.onclick = function (event) {
	if (event.target == modalContato) {
		modalContato.style.display = "none";
	}
	if (event.target == modalGaleria) {
		modalGaleria.style.display = "none";
	}
};

// Lógica do WhatsApp (Mantenha)
if (btnEnviar) {
	btnEnviar.onclick = function () {
		let telefone = "5562984028463";
		let mensagem = "Olá! Gostaria de saber mais sobre as obras.";
		let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
		window.open(url, "_blank");
	};
}
