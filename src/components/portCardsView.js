import { portCardShowLess, portCardShowMore } from "../../main";
import { HTTPRequest, state } from "../model";
import App from "../views/app";

class portCardView extends App {
    constructor() {
        super();
        this.element = document.querySelector("main");
    }

    eventHandler() {

        document.querySelector("#blogLink").style.color = "aqua";
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

        document.querySelectorAll(".portCardShowMoreBtn").forEach((el) => {
            el.addEventListener("click", () => {

                const id = el.id[el.id.length - 1];

                portCardShowMore(id);
                this.updatePortfolioCard();
                document.querySelector(`.portfolioCard${id}`).style.animation = "moveInBottom 1s";
                document.querySelector(`.portfolioCard${id}`).querySelector(".portDescr").style.animation = "moveInBottom 1s";

                //+post?.id % 2 ? 'animation: moveInRight 1s;' : 'animation: moveInLeft 1s;'
            });
        });

        document.querySelectorAll(".portCardShowLessBtn").forEach((el) => {
            el.addEventListener("click", () => {

                const id = el.id[el.id.length - 1];

                portCardShowLess(id);
                this.updatePortfolioCard();
                document.querySelector(`.portfolioCard${id}`).style.animation = "moveInTop 1s";
                document.querySelector(`.portfolioCard${id}`).querySelector(".portDescr").style.animation = "moveInTop 1s";
            });
        });
    }

    render() {
        this.generateMarkup();
    }

    async generateMarkup() {

        const markup = /*html*/`
        <div class="portfolio" style="margin-top: 130px;">
          <div class="loading"></div>
        </div>
        `

        this.clear();
        this.element.insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();

        await HTTPRequest.getAllPosts()
        .then(() => this.updatePortfolioCard())
    }


    updatePortfolioCard() {
        const markup = /*html*/ `
        <div class="portfolio" style="margin-top: 130px;">
        <ul>
        ${state.posts
              .map((post) => {
                  if (post.type === "portfolio") {
                      return (/*html*/`
                  <li class="portfolioCard portfolioCard${post?.id}">
                    <img class="portPoster" src="${post?.poster}" />
                    <h4 class="portTitle">${post?.title}</h4>
                    <p class="portDescr">
                      ${post?.descr} 
                      ${post?.descr.split(" ").length <= 8
                              ? `<span class="portCardShowMoreBtn" id="portCardShowMoreBtn${post?.id}">Show More</span>`
                              : `<span class="portCardShowLessBtn" id="portCardShowLessBtn${post?.id}">Show Less</span>`
                          } 
                    </p>

                    <a href="#${post?.id}" class="goToPortPageBtn">Read More</a>
                  </li>
                  `
                      );
                  }
              })
              .join("")}
      </ul>
        </div>
        `;

        document.querySelector(".portfolio").innerHTML = "";
        document.querySelector(".portfolio").insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }
}


export default new portCardView();