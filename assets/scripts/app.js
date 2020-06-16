const productList = {
    products: [
        {
            title: 'A pillow',
            imageUrl: 'https://images.unsplash.com/photo-1575277340599-43db25b63b6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            price: 19.99,
            description: 'A soft pillow'
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            price: 89.99,
            description: 'A carpet with a royal feel'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
             const prodEl = document.createElement('ul');
             prodEl.className = 'product-item';
             prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
             `;
             prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();   