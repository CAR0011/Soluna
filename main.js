// main.js
const grid = document.getElementById('grid-propiedades');

fetch('assets/data/propiedades.json')
  .then(res => res.json())
  .then(propiedades => {
    propiedades.forEach(p => {
      const precio = p.unidad
        ? `$${p.precio.toLocaleString()}/${p.unidad}`
        : `$${p.precio.toLocaleString()}`;

      const card = document.createElement('article');
      card.className = 'property-card';
      card.innerHTML = `
        <div class="img-wrap">
          <img src="assets/Propiedad/${p.imagen}" alt="${p.titulo}">
          <span class="status">${p.tipo}</span>
        </div>
        <div class="info">
          <h3>${p.titulo}</h3>
          <p class="price">${precio}</p>
          <a href="Propiedad.html?id=${p.id}" class="btn-secondary">Ver detalle</a>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error al cargar propiedades:', err);
    grid.innerHTML = '<p>Error al cargar propiedades.</p>';
  });
