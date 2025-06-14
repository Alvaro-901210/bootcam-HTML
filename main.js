const credenciales = [
    { usuario: "gineth", contrasena: "gineth" },
    { usuario: "alvaro", contrasena: "alvaro"},
    { usuario:"w",contrasena:"w"}
  ];
function userValidate() {   
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let button = document.getElementById("loginbtn");
    button.style.display = "none";
    for (let i = 0; i < credenciales.length; i++) {
        let item = credenciales[i];
        if(item.usuario === user.value && item.contrasena === pass.value){
            button.style.display = "block";
            break;
        }

    }

}
function ingresar(event) {
    event.preventDefault();
    window.location.href = 'birds.html';
}
function puntuar() {
    const puntero = document.getElementById('estrellas');
    puntero.textContent="";
    const contenedor = document.getElementById('estrellas');
    const resultado = document.getElementById('resultado');
    let puntuacion = 0;

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('span');
      estrella.textContent = '☆'; 
      estrella.style.fontSize = '40px';
      estrella.style.cursor = 'pointer';
      estrella.dataset.valor = i;

      estrella.addEventListener('mouseover', function () {
        pintarEstrellas(i);
      });

      estrella.addEventListener('mouseout', function () {
        pintarEstrellas(puntuacion);
      });

      estrella.addEventListener('click', function () {
        puntuacion = i;
        resultado.textContent = `¡Calificaste con ${i} estrellas!`;
      });

      contenedor.appendChild(estrella);
    }

    function pintarEstrellas(valor) {
        const estrellas = contenedor.querySelectorAll('span');
        estrellas.forEach((estrella, index) => {
          estrella.textContent = (index < valor) ? '★' : '☆';
          estrella.style.color = (index < valor) ? 'gold' : 'black';
        });
      }

}
