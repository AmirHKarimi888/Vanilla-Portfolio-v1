import App from "./app";

class Footer extends App {
    constructor() {
        super();

        this.element = document.querySelector("footer");
    }


    render() {
        this.generateMarkup();
    }

    generateMarkup() {
        this.markup = /*html*/`
        <div class="footerContainer">
          <nav class="footer">
            <div class="footerFirstSec">
              <span class="footerTitle">© 2023 AmirHK888™.</span>
              <span class="footerSub">All Rights Reserved</span>
            </div>

            <div class="footerSecondSec">
            <ul class="links">
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
           </ul>
            </div>
          </nav>
        </div>
        `
        
        this.clear();
        this.element.insertAdjacentHTML("afterbegin", this.markup);
    }
}

export default new Footer();