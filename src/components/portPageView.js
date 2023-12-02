import { state } from "../model";
import App from "../views/App";

class portPageView extends App {
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
        <div class="portfolioPage portfolioPage${post?.id}">
        <img class="portPoster" src="${post?.poster}" />
        <h4 class="portPageTitle">${post?.title}</h4>
        <p class="portPageDescr">
          ${post?.descr} 
        </p>
      </div>
        `

        this.clear();
        this.element.insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }
}


export default new portPageView();