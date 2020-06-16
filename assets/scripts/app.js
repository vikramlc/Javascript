class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);

        if(cssClasses) {
            rootElement.className = cssClasses;
        }
        
        if(attributes && attributes.length > 0) {
            for(const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    constructor(renderHookId) {
        super(renderHookId);
    }

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        return this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }
    
    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;

        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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
    }
}

class ProductList extends Component {
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

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);

        for (const prod of this.products) {
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
        }
    }
}

class Shop {
    static cart;

    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();    
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();