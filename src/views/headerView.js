import App from "./app";

class Header extends App {
    
    constructor() {
        super();

        this.element = document.querySelector("header");
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
            sidebar.style.animation = "moveInLeft 0.3s ease-out";
        })

        sidebar.addEventListener("click", (event) => event.stopPropagation());

        // const headerDD1 = document.querySelector("#headerDD1");
        // const headerDDM1 = document.querySelector("#headerDDM1");

        // headerDD1.addEventListener("mouseenter", () => {
        //     headerDDM1.style.display = "grid";
        // })
        // headerDD1.addEventListener("mouseleave", () => {
        //     headerDDM1.style.display = "none";
        // })

        // <li id="headerDD1">
        // <a href="#">Dropdown</a>

        // <ul id="headerDDM1">
          
        // </ul>
        // </li>
    }

    render() {
        this.generateMarkup();
    }

    generateMarkup() {
        this.markup = /*html*/`
        <div class="headerContainer">
          <nav class="navmenu">

            <div class="logoContainer">
              <a href="/" class="logo"><img src="./images/logo.jpg" alt="logo" /></a>
            </div>

            <div class="linksContainer">
              <ul class="links">
               <li><a href="/" id="homeLink">Home</a></li>
               <li><a href="#portfolio" id="portfolioLink">Portfolio</a></li>
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

        this.clear();
        this.element.insertAdjacentHTML("afterbegin", this.markup);
    }
}


export default new Header();