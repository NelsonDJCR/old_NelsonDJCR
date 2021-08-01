if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro de SW exitoso", reg))
    .catch((err) => console.warn("Error al tratar de registrar el sw", err));
}
addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador_cantidad");
  const velocidad = 1000;

  const animarContadores = () => {
    console.log("sdasa");
    for (const contador of contadores) {
      const actualizar_contador = () => {
        let cantidad_maxima = +contador.dataset.cantidadTotal,
          valor_actual = +contador.innerText,
          incremento = cantidad_maxima / velocidad;

        if (valor_actual < cantidad_maxima) {
          contador.innerText = Math.ceil(valor_actual + incremento);
          setTimeout(actualizar_contador,50);
        } else {
          contador.innerText = cantidad_maxima;
        }
      };
      actualizar_contador();
    }
  };
  const mostrarContadores = elementos => {
    elementos.forEach(elemento => {
      if (elemento.isIntersecting) {
        elemento.target.classList.add("animar");
        elemento.target.classList.remove("ocultar");
        
  
        setTimeout(animarContadores, 300);
      }
    });
  }
  
  const observer = new IntersectionObserver(mostrarContadores, {
    threshold: 0.75,
  })
  
  const elementosHTML = document.querySelectorAll(".contador");
  elementosHTML.forEach((elementoHTML) => {
    observer.observe(elementoHTML);
  })
  
})

