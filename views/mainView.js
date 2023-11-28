import App from "./App";

class Main extends App {
    constructor() {
        super();

        this.element = document.querySelector("main");

        this.markup = /*html*/`
        <div class="mainContainer">
          <div class="intro">
            <div>
              <h1 class="introTitle">Amir H K</h1>
              <h3 class="introSub">Welcome to my blog!</h3>
            </div>
          </div>

          <ul class="intro2">
            <li>
              <div>
               <h1 class="intro2Title">Amir H K</h1>
               <h3 class="intro2Sub">Welcome to my blog!</h3>
              </div>
            </li>
            <li>
              <img src="https://wallpapershome.com/images/pages/pic_h/3954.jpg" />
            </li>
          </ul>
        </div>
        `
    }
}

export default new Main();