var products = [{
        id: 1,
        name: 'Product 1',
        price: 20.99,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1313140/header.jpg?t=1700825608'

    },
    {
        id: 2,
        name: 'Product 2',
        price: 15.49,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1435790/header_alt_assets_13.jpg?t=1703262884'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 25.99,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1785150/header.jpg?t=1703169875'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 18.49,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/753640/header.jpg?t=1701451524'
    },
    {
        id: 5,
        name: 'Product 5',
        price: 30.99,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/787480/header.jpg?t=1701220385'
    },
    {
        id: 6,
        name: 'Product 6',
        price: 22.49,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg?t=1688115070'
    },
    {
        id: 7,
        name: 'Product 7',
        price: 19.99,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1260320/header.jpg?t=1701692409'
    },
    {
        id: 8,
        name: 'Product 8',
        price: 28.49,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/653530/header.jpg?t=1686697594'
    },
    {
        id: 9,
        name: 'Product 9',
        price: 32.99,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header_alt_assets_1.jpg?t=1702309974'
    },

];

function displayProducts() {
    var productContainer = document.getElementById('productContainer');

    products.forEach(function(product) {
        var productItem = document.createElement('div');
        productItem.className = 'product-item';

        var image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        var productName = document.createElement('h4');
        productName.textContent = product.name;

        var productPrice = document.createElement('p');
        productPrice.textContent = 'Price: $' + product.price.toFixed(2);

        var buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy Now';
        buyButton.addEventListener('click', function() {
            alert('You clicked Buy for ' + product.name);
        });

        productItem.appendChild(image);
        productItem.appendChild(productName);

        productItem.appendChild(productPrice);
        productItem.appendChild(buyButton);


        productContainer.appendChild(productItem);
    });
}

displayProducts();