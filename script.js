window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  const animatedItem = document.querySelector(".logo-camiao");
  let lastScrollY = window.scrollY;
  let startValueOfLeft = 14;

  function update() {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY;
    if (diff < 0 && startValueOfLeft <= 16) {
    //   console.log("entrou no < 0");
      startValueOfLeft += 0.1;
      animatedItem.style.top = startValueOfLeft + "%";
    } else if (diff > 0 && startValueOfLeft >= 12) {
    //   console.log("entrou no > 0 ");

      startValueOfLeft -= 0.1;
      animatedItem.style.top = startValueOfLeft + "%";
    } else if (window.scrollY === 0) {
    //   animatedItem.style.top = "14%";
    }
    //resolver o problema de n alinhar usando um calculo baseado no scrolly * a % desejada
    lastScrollY = currentScrollY;
  }

  window.addEventListener("scroll", update);
  
  
});



function enviarForm(event) {
  
  event.preventDefault();
  const nome = document.getElementById("name")
  const email = document.getElementById("email")
  const assunto = document.getElementById("assunto")
  const textarea = document.getElementById("textarea")
  console.log(nome, email, assunto, textarea)

  alert(`Você clicou no botão de Enviar Formulario!\nOs conteúdos recebidos foram\nNome: ${nome.value}\nEmail: ${email.value}\nAssunto: ${assunto.value}\nMensagem: ${textarea.value}`)
  nome.value = ""
  email.value = ""
  assunto.value = ""
  textarea.value = ""
}


function login (event) {
  event.preventDefault()
  alert(`Você clicou no botão de login`)
}

function register (event) {
  event.preventDefault()
  alert(`Você clicou no botão de Cadastre-se`)
}

function envieSeuProduto (event) {
  event.preventDefault()
  alert(`Você clicou no botão de Envie seu Produto`)
}

function trabalheConosco (event) {
  event.preventDefault()
  alert(`Você clicou no botão de Trabalhe Conosco`)
}

function rastrear (event) {
  event.preventDefault()
  const codigoRastreio = document.getElementById("track-code")
  alert(`Você clicou no botão de Rastrear, o seu código de rastreio foi\n${codigoRastreio.value}`)
  codigoRastreio.value = ""
}

