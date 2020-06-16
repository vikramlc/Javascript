class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class ShoppingCart {
    items = [];
    
    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;

        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('ul');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;

        const addCartButton = prodEl.querySelector('button');

        // invoke the bind method to call the addToCart method on the ProductItem object 
        addCartButton.addEventListener('click', this.addToCart.bind(this));

        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A pillow',
            'https://images.unsplash.com/photo-1575277340599-43db25b63b6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            'A soft pillow',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            'A carpet with a royal feel',
            89.99
        )
    ];

    constructor() {}

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl); 
    }
}

const shop = new Shop();
shop.render();