const header = document.querySelector('.header');
let crossesCount = 0;
let timer;

function generateCross(event) {
  if (crossesCount < 12) {
    crossesCount++;
    const cross = document.createElement('div');
    cross.classList.add('cross');
    cross.innerHTML = '+';
    cross.style.color = '#984caf';
    cross.style.position = 'absolute';
    cross.style.left = event.offsetX + 'px';
    cross.style.top = event.offsetY + 'px';
    cross.style.fontSize = Math.floor(Math.random() * 20 + 20) + 'px'; // Tamaño aleatorio entre 20px y 40px
    header.appendChild(cross);
    
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
      opacity += 0.1;
      cross.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(fadeInInterval);
        setTimeout(() => {
          const fadeOutInterval = setInterval(() => {
            opacity -= 0.1;
            cross.style.opacity = opacity;
            if (opacity <= 0) {
              clearInterval(fadeOutInterval);
              cross.remove();
              crossesCount--;
            }
          }, 100);
        }, 1000); // Estática por 1 segundo antes de desaparecer
      }
    }, 200); // Tarda 2 segundos en aparecer completamente
  }
}

header.addEventListener('mouseover', () => {
  if (!timer) {
    timer = setInterval(() => {
      generateCross({ offsetX: Math.random() * header.offsetWidth, offsetY: Math.random() * header.offsetHeight });
    }, 500); // Genera una nueva cruz cada 0.5 segundos mientras el mouse está sobre el header
  }
});

header.addEventListener('mouseout', () => {
  clearInterval(timer);
  timer = null;
});
function updateClock() {
    const now = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString('es-ES', { month: 'long' });
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
  
    const clockTime = document.getElementById('clock-time');
    clockTime.textContent = `Hoy es ${day}, ${date} de ${month} de ${year} ${hour}:${minute}`;
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);
  
  // Ejecutar el reloj automaticamente al cargar la página
  updateClock();
  