
class App {
    constructor(element, markup) {
        this.element = element;
        this.markup = markup;
    }

    clear() {
        this.element.innerHTML = "";
    }

    render() {
        this.generateMarkup();
    }

    generateMarkup() {

        this.clear();
        this.element.insertAdjacentHTML("afterbegin", this.markup);
    }
}

export default App;