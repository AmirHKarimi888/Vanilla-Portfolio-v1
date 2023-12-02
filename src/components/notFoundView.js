import { state } from "../model";
import App from "../views/app";

class notFoundView extends App {
    constructor() {
        super();
        this.element = document.querySelector("main");
    }

    eventHandler() {

        document.querySelector("#portfolioLink").style.color = "#fff";
        document.querySelector("#homeLink").style.color = "#fff";

        document.querySelector(".navmenu").style.background = "rgba(0, 0, 0, 0.8)";
        document.querySelector(".navmenu").style.border = "1px solid rgba(0, 0, 0, 0.2)";
        document.querySelector(".navmenu").style.boxShadow = "0 5px 8px rgba(0, 0, 0, 0.2)";
        document.querySelector(".navmenu").style.animation = "1s";

        const setAnimations = (scrollPos) => {
            if(scrollPos <= 50) {
                document.querySelector(".navmenu").style.background = "rgba(0, 0, 0, 0.8)";
                document.querySelector(".navmenu").style.border = "1px solid rgba(0, 0, 0, 0.2)";
                document.querySelector(".navmenu").style.boxShadow = "0 5px 8px rgba(0, 0, 0, 0.2)";
                document.querySelector(".navmenu").style.animation = "1s";
            }
        };

        document.addEventListener("scroll", () => {
            this.lastKnownScrollPosition = window.scrollY;

            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    setAnimations(this.lastKnownScrollPosition);
                    this.ticking = false;
                });

                this.ticking = true;
            }
        });
    }

    render() {
        this.generateMarkup();
    }

    generateMarkup() {

        const post = state.post;

        const markup = /*html*/`
        <div class="portfolioPage">
        <img class="portPoster" src="https://cdn.iconscout.com/icon/free/png-256/free-404-page-not-found-456876.png" />
        <h4 class="portPageTitle">404 Error</h4>
        <p class="portPageDescr">
          Page Not Found! 🤷‍♂️
        </p>
      </div>
        `

        this.clear();
        this.element.insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }
}


export default new notFoundView();