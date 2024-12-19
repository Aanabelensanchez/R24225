document.addEventListener("DOMContentLoaded", () => {
    var cardCarousel = document.querySelector("#carousel-item");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json()) 
        .then((data) => {
            cardCarousel.innerHTML = "";
            data.forEach((product, index) => {
                var cardCarouselDiv = document.createElement('div'); // Crear un div para cada item
                cardCarouselDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;

                cardCarouselDiv.innerHTML = `
                    <img src="${product.image}" class="d-block w-100" alt="${product.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${product.title}</h5>
                        <p class=pcardCarousel> $ ${product.price}</p>
                    </div>
                `;
                cardCarousel.appendChild(cardCarouselDiv);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});


