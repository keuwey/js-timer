(() => {
  const relogio = document.querySelector(".relogio");

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
  }

  let timer;
  let segundos = 0;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerText = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerText = "00:00:00";
      segundos = 0;
    }
  });
})();
