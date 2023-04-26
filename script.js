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
    } else if (diff > 0 && startValueOfLeft >= 10) {
    //   console.log("entrou no > 0 ");

      startValueOfLeft -= 0.1;
      animatedItem.style.top = startValueOfLeft + "%";
    } else if (window.scrollY === 0) {
    //   animatedItem.style.top = "14%";
    }
    //resolver o problema de n alinhar usando um calculo baseado no scrolly * a % desejada
    lastScrollY = currentScrollY;
  }

  function backToTop() {
    window.screenY = 0;
  }

  window.addEventListener("scroll", update);
});
