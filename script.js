document.addEventListener("DOMContentLoaded", function () {
    const text = `Olá Bruno, tudo bem? Bem-vindo a ClaraCP! Nossa empresa está muito feliz em ter você como cliente.
Não se assuste com nosso site! Ele foi hackeado por um de nossos funcionários, mas não se preocupe, ele não fez nada de mal.
Ele apenas queria ter certeza que você teria uma experiência única ao receber a entrega do seu produto.
Aqui está a mensagem que ele deixou para você:

"Olá Bruno, tudo bem?  Nossa empresa está muito feliz em ter você como cliente.
Nosso lema como empresa é carregar o mérito de ótimas experiências e satisfação, por isso ainda temos mais uma página para você.
Para acessá-la, basta clicar no botão abaixo."`;
    let index = 0;
    const speed = 50; // Velocidade da digitação
    const typedText = document.getElementById("typed-text");
    const loadingText = document.getElementById("loading-text");

    function typeWriter() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                loadingText.classList.remove("hidden");
            }, 2000);
        }
    }

    typeWriter();
});
