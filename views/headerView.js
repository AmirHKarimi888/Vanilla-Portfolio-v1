import App from "./App";

class Header extends App {
    
    constructor() {
        super();

        this.element = document.querySelector("header");

        this.markup = /*html*/`
        <div class="headerContainer">
          <nav class="navmenu">

            <div class="logoContainer">
              <a href="/" class="logo"><img src="./images/logo.jpg" alt="logo" /></a>
            </div>

            <div class="linksContainer">
              <ul class="links">
               <li><a href="/">Home</a></li>
               <li><a href="#">About</a></li>
              </ul>
            </div>

            <div class="searchBtnContainer">
              <button class="searchBtn"><i class="fa fa-search"></i></button>
            </div>
            
          </nav>
        </div>
        `


    }
}


export default new Header();