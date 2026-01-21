// script.js CORRIGIDO

const modal = document.getElementById("modal-overlay");
const btn = document.getElementById("btn-contato");
const closeBtn = document.querySelector(".close-btn");
const btnEnviar = document.querySelector(".modal-action.btn");

if (btn) {
	btn.onclick = function (event) {
		event.preventDefault(); // Impede a tela de pular para o topo
		modal.style.display = "flex";
	};
} else {
	console.error("Erro: O botão 'Contato' não foi encontrado no HTML.");
}

// 3. Função para fechar no X
if (closeBtn) {
	closeBtn.onclick = function () {
		modal.style.display = "none";
	};
}

// 4. Função para fechar clicando fora
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

if (btnEnviar) {
	btnEnviar.onclick = function () {
		let telefone = "5562984028463";
		let mensagem = "Olá! Gostaria de saber mais sobre as obras.";
		let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

		window.open(url, "_blank");
	};
}
