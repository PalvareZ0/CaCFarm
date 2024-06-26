//

const header = document.querySelector('.header');
let crossesCount = 0;
let timer;

// hacer la cruz

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

// la cruz solo se muestra mientras el usuario pase el mouse por el banner

header.addEventListener('mouseover', () => {
  if (!timer) {
    timer = setInterval(() => {
      generateCross({ offsetX: Math.random() * header.offsetWidth, offsetY: Math.random() * header.offsetHeight-40 });
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
  
  // Reloj
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);
  
  // Ejecutar el reloj automaticamente al cargar la página
  updateClock();
  
// beauty
// Lista de productos
const beautyProducts = [
  { name: 'Producto X', image: '../../CodoACodo/Imagenes/productox.jpg', price: '$XX' },
  { name: 'Shampoo', image: '../../CodoACodo/Imagenes/shampoo.jpg', price: '$123' },
  { name: 'Pasta Dental', image: '../../CodoACodo/Imagenes/pastadental.jpg', price: '$132' },
  { name: 'Curitas', image: '../../CodoACodo/Imagenes/curitas.jpg', price: '$213' },
  { name: 'Cotonetes', image: '../../CodoACodo/Imagenes/cotonetes.jpg', price: '$231'},
  { name: 'Aspirina', image: '../../CodoACodo/Imagenes/aspirina.jpg', price: '$312'},
  { name: 'Nivea', image: '../../CodoACodo/Imagenes/nivea.jpg', price: '$321'},
  // Agregar productos según sea necesario
];

// Función para mostrar productos del 'Beauty'
function displayBeautyProducts() {
  const beautyContainer = document.getElementById('beauty-products');
  // Mezclar aleatoriamente la lista de productos
  const shuffledProducts = beautyProducts.sort(() => Math.random() - 0.5);
  beautyContainer.innerHTML = ''; // Limpiar contenedor antes de agregar los productos

  shuffledProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement('p');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;

    productElement.appendChild(productImage);
    productElement.appendChild(productName);
    productElement.appendChild(productPrice);

    beautyContainer.appendChild(productElement);
  });
}

// Mostrar productos de 'Beauty' al cargar la página
displayBeautyProducts();
// Función para mostrar u ocultar productos del 'Beauty' según la ubicación del usuario en la página
function toggleBeautyProductsVisibility() {
  const beautySection = document.getElementById('beauty');
  const beautyProductsContainer = document.getElementById('beauty-products');
  const sectionRect = beautySection.getBoundingClientRect();

  // Verificar si la sección "Beauty" está visible en la ventana gráfica
  if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
    beautyProductsContainer.classList.remove('hidden'); // Mostrar productos
  } else {
    beautyProductsContainer.classList.add('hidden'); // Ocultar productos
  }
}

// Ejecutar la función al desplazarse por la página
window.addEventListener('scroll', toggleBeautyProductsVisibility);

// Mostrar u ocultar productos al cargar la página
toggleBeautyProductsVisibility();
// Función para generar un color hexadecimal aleatorio
function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Función para animar el scroll de la página hacia arriba
function scrollToTop() {
  const scrollStep = -window.scrollY / (500 / 15); // Velocidad del scroll

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Asignar evento click al botón que regresa al principio
const backButton = document.getElementById('back-to-top-button');
backButton.addEventListener('click', scrollToTop);

// Obtener el botón por su ID
const openNewPageButton = document.getElementById('turnos-button');

// Agregar un evento de clic al botón
openNewPageButton.addEventListener('click', function() {
  // Ruta al archivo HTML que deseas abrir en una nueva pestaña
  const url = 'turnero.html';

  // Abrir la nueva página en una nueva pestaña
  window.open(url, '_blank');
});

// Asegurar que al recargar la página, se inicie desde arriba
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

 // Botón "Juegos"
 const juegosButton = document.getElementById('juegos-button');

 juegosButton.addEventListener('click', function() {
   // Abrir la página de juegos
   window.open('juegos.html', '_blank');

  })
  
 // Función para abrir la ventana emergente del sudoku
 function openSudokuPopup() {
  // Configurar las dimensiones de la ventana emergente
  const width = 400;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;

  // Abrir la ventana emergente con el tablero de sudoku
  const sudokuWindow = window.open('sudoku.html', 'sudokuPopup', options);
  sudokuWindow.focus(); // Dar foco a la ventana emergente
}

// Obtener el botón "Sudoku"
const sudokuButton = document.getElementById('sudoku-button');

// Agregar un evento de clic al botón
sudokuButton.addEventListener('click', openSudokuPopup);

// Calesita+Banner

