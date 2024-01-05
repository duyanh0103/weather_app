var products = [{
        id: 1,
        name: 'Product 1',
        price: 20.99,
        image: 'https://genk.mediacdn.vn/2017/1-1487927236668.jpg'

    },
    {
        id: 2,
        name: 'Product 2',
        price: 15.49,
        image: 'https://rubikstore.vn/cdn/images/202107/goods_img/boardgame-ma-soi-ultimate-deluxe-sp003374-G1271-1625907103364.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 25.99,
        image: 'https://bizweb.dktcdn.net/100/299/021/products/boardgame-lop-hoc-mat-ngu-cuoc-dua-sao-choi-2.jpg?v=1625626614523'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 18.49,
        image: 'https://salt.tikicdn.com/ts/product/21/29/0b/8caaa0a9ee3a24ae86939a15eaf00463.jpg'
    },
    {
        id: 5,
        name: 'Product 5',
        price: 30.99,
        image: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936121470908-_4_.jpg'
    },
    {
        id: 6,
        name: 'Product 6',
        price: 22.49,
        image: 'https://vero-asean.com/wp-content/uploads/2021/02/Vero5667-1024x682.jpg'
    },
    {
        id: 7,
        name: 'Product 7',
        price: 19.99,
        image: 'https://rubikstore.vn/cdn/images/202107/goods_img/boardgame-bang-mo-rong-sp003382-G1276-1625904128773.jpg'
    },
    {
        id: 8,
        name: 'Product 8',
        price: 28.49,
        image: 'https://vn-test-11.slatic.net/p/31427c49f3fe6f5bc2cf4367078ee5dc.jpg'
    },
    {
        id: 9,
        name: 'Product 9',
        price: 32.99,
        image: 'https://bizweb.dktcdn.net/100/299/021/products/boardgame-lop-hoc-mat-ngu-sieu-thu-ngan-ha-2.jpg?v=1625625669250'
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