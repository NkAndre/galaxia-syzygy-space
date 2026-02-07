const form = document.getElementById('meuForms');
const errorDisplay = document.getElementById('error-message');
const modal = document.getElementById('modalSucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let mensagensErro = [];

    // 1. Valida se está vazio
    if (nome === '' || email === '' || mensagem === '') {
        mensagensErro.push("Todos os campos precisam ser preenchidos.");
    } 
    //2. Valida o campo nome(mais de 3 letras)
    else if(nome.length <3){
        mensagensErro.push('O nome precisa de pelo menos 3 caracteres.')
    }
    // 3. Valida o formato do e-mail (@ e ponto)
    else if (!emailRegex.test(email)) {
        mensagensErro.push("Insira um e-mail espacial válido com '@'.");
    }

    // Resultado da Validação
    if (mensagensErro.length > 0) {
        errorDisplay.innerText = mensagensErro[0];
        errorDisplay.style.display = 'block';
    } else {
        errorDisplay.style.display = 'none';
        
        // O modal aparece com o efeito suave do CSS
        modal.style.display = 'flex'; 
        
        form.reset(); // Limpa os campos para a próxima viagem
    }
});

function fecharModal() {
    document.getElementById('modalSucesso').style.display = 'none';
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
    .then(() => console.log("Sistema de bordo pronto para instalação!"))
    .catch(err => console.log("Falha no sistema de bordo:", err));
}


// Aplica o tema salvo no localStorage assim que a página carrega
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);
});