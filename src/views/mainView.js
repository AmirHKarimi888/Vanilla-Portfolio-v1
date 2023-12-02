import { portCardShowLess, portCardShowMore, setDefaultPosts } from "../../main";
import { state } from "../model";
import App from "./app";

class Main extends App {
    constructor() {
        super();

        this.element = document.querySelector("main");

        this.lastKnownScrollPosition = 0;
        this.ticking = false;
    }

    eventHandler() {

        document.querySelector("#homeLink").style.color = "aqua";
        document.querySelector("#portfolioLink").style.color = "#fff";

        const setAnimations = (scrollPos) => {

            if(scrollPos <= 50) {
                document.querySelector(".navmenu").style.background = "none";
                document.querySelector(".navmenu").style.border = "0px";
                document.querySelector(".navmenu").style.boxShadow = "0 0 0 0";
            }

            if(scrollPos > 50) {
                document.querySelector(".navmenu").style.background = "rgba(0, 0, 0, 0.8)";
                document.querySelector(".navmenu").style.border = "1px solid rgba(0, 0, 0, 0.2)";
                document.querySelector(".navmenu").style.boxShadow = "0 5px 8px rgba(0, 0, 0, 0.2)";
                document.querySelector(".navmenu").style.animation = "1s";
            }

            if (
                scrollPos >= window.innerHeight - 60 &&
                scrollPos <= 2 * window.innerHeight - 60
            ) {
                document
                    .querySelectorAll(".intro2 li")
                    .forEach((el) => (el.style.opacity = "1"));
                document.querySelector(".intro2Image").style.animation =
                    "moveInRight 1s";
                document.querySelector(".intro2Descr").style.animation =
                    "moveInLeft 1s";
            }

            if (
                scrollPos >= 2 * window.innerHeight - 60 &&
                scrollPos <= 3 * window.innerHeight - 60
            ) {
                document
                    .querySelectorAll(".intro3 li")
                    .forEach((el) => (el.style.opacity = "1"));
                document.querySelector(".intro3Image").style.animation =
                    "moveInLeft 1s";
                document.querySelector(".intro3Descr").style.animation =
                    "moveInRight 1s";
            }

            if (
                scrollPos >= 3 * window.innerHeight - 60 &&
                scrollPos <= 4 * window.innerHeight - 60
            ) {
                document
                    .querySelectorAll(".intro4 li")
                    .forEach((el) => (el.style.opacity = "1"));
                document.querySelector(".intro4Image").style.animation =
                    "moveInLeft 1s";
                document.querySelector(".intro4Descr").style.animation =
                    "moveInRight 1s";
            }

            if (
                scrollPos >= 4 * window.innerHeight - 60 &&
                scrollPos <= 5 * window.innerHeight - 60
            ) {
                document.querySelector(".portfolio").style.opacity = "1";
                document.querySelector(".portfolio").style.animation = "zoomIn 1s";
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

    generateMarkup() {
        setDefaultPosts();
        this.markup = /*html*/ `
        <div class="mainContainer">
          <div class="intro">
            <div>
              <h1 class="introTitle">Amir H K</h1>
              <h3 class="introSub">Welcome to my blog!</h3>
            </div>
          </div>

          <ul class="intro2">
            <li>
              <div class="intro2Descr">
               <h1 class="intro2Title">A</h1>
               <h3 class="intro2Sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nam veniam.</h3>
              </div>
            </li>
            <li>
              <img class="intro2Image" src="https://wallpapershome.com/images/pages/pic_h/3954.jpg" />
            </li>
          </ul>

          <ul class="intro3">
          <li>
          <img class="intro3Image" src="https://wallpapershome.com/images/pages/pic_h/3945.jpg" />
        </li>
          <li>
            <div class="intro3Descr">
             <h1 class="intro3Title">B</h1>
             <h3 class="intro3Sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
          </li>
        </ul>

        <ul class="intro4">
        <li>
          <div class="intro4Descr">
           <h1 class="intro4Title">C</h1>
           <h3 class="intro4Sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
        </li>
        <li>
          <img class="intro4Image" src="https://wallpapershome.com/images/pages/pic_h/3953.jpg" />
        </li>
      </ul>


      <div class="portfolio">
        <h3 class="portfolioTitle">Portfolio</h3>
        <ul>
          ${state.posts.slice(0, 6)
                .map((post) => {
                    if (post.type === "portfolio") {
                        return (/*html*/`
                    <li class="portfolioCard portfolioCard${post?.id}" >
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
        </div>
        `;

        this.clear();
        this.element.insertAdjacentHTML("afterbegin", this.markup);
        this.eventHandler();
    }

    updatePortfolioCard() {
        const markup = /*html*/ `
        <h3 class="portfolioTitle">Portfolio</h3>
        <ul>
          ${state.posts.slice(state.posts.length - 6, state.posts.length)
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
        `;

        document.querySelector(".portfolio").innerHTML = "";
        document.querySelector(".portfolio").insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }
}

export default new Main();
