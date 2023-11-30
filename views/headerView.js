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

            <div class="sidebarBtnContainer">
              <button class="sidebarBtn"><i class="fa fa-bars"></i></button>
            </div>
            
          </nav>

          <div class="sidebarBackdrop">
            <ul class="sidebar">
              
            </ul>
          </div>
        </div>
        `
    }


    eventHandler() {
        const sidebarBtn = document.querySelector(".sidebarBtn");
        const sidebarBackdrop = document.querySelector(".sidebarBackdrop");
        const sidebar = document.querySelector(".sidebar");

        sidebarBtn.addEventListener("click", () => {
            sidebarBackdrop.style.display = "grid";
            sidebar.style.display = "grid";
            sidebar.style.animation = "moveInRight 0.3s ease-out";
        });

        sidebarBackdrop.addEventListener("click", () => {
            sidebarBackdrop.style.display = "none";
            sidebar.style.display = "none";
        })

        sidebar.addEventListener("click", (event) => event.stopPropagation());
    }


}


export default new Header();