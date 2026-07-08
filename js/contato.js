const forms = document.getElementById('meuForms')

forms.addEventListener('submit', (e) => {
    e.preventDefault();


    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;


    const numeroWhatsapp = "5511948993767";

    const textoMensagem = `Olá! Meu nome é ${nome}. ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(textoMensagem);

   const url = `https://wa.me/${numeroWhatsapp}?text=${mensagemFormatada}`;


    window.open(url, '_blank');

    forms.reset();
});