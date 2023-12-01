
class App {
    constructor(element, markup) {
        this.element = element;
        this.markup = markup;
    }

    clear() {
        this.element.innerHTML = "";
    }
}

export default App;