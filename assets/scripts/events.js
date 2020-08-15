const button = document.querySelector('button');

const buttonClickHandler = () => {
    alert('Button clicked!!');
}

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
    button.removeEventListener('click', boundFn);
}, 2000);

class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
        alert('saving');
    }

    load() {
        alert('loading');
    }

    search() {
        alert('searching');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(menu);