import App from "./App";

class Main extends App {
    constructor() {
        super();

        this.element = document.querySelector("main");

        this.lastKnownScrollPosition = 0;
        this.ticking = false;


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
              <div class="intro2Descr">
               <h1 class="intro2Title">A</h1>
               <h3 class="intro2Sub">Welcome to my blog!</h3>
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
             <h3 class="intro3Sub">Welcome to my blog!</h3>
            </div>
          </li>
        </ul>

        <ul class="intro4">
        <li>
          <div class="intro4Descr">
           <h1 class="intro4Title">C</h1>
           <h3 class="intro4Sub">Welcome to my blog!</h3>
          </div>
        </li>
        <li>
          <img class="intro4Image" src="https://wallpapershome.com/images/pages/pic_h/3953.jpg" />
        </li>
      </ul>
        </div>
        `

    }


    eventHandler() {
        document.addEventListener("scroll", (event) => {
            this.lastKnownScrollPosition = window.scrollY;
          
            if (!this.ticking) {
              window.requestAnimationFrame(() => {
                this.setAnimations(this.lastKnownScrollPosition);
                this.ticking = false;
              });
          
              this.ticking = true;
            }
        })
    }



    setAnimations(scrollPos) {

        if(scrollPos >= window.innerHeight - 60 && scrollPos <= (2 * window.innerHeight) - 60) {
          document.querySelectorAll(".intro2 li").forEach(el => el.style.opacity = "1");
          document.querySelector(".intro2Image").style.animation = "moveInRight 1s"
          document.querySelector(".intro2Descr").style.animation = "moveInLeft 1s"
        }
        
        if(scrollPos >= (2 * window.innerHeight) - 60 && scrollPos <= (3 * window.innerHeight) - 60) {
          document.querySelectorAll(".intro3 li").forEach(el => el.style.opacity = "1");
          document.querySelector(".intro3Image").style.animation = "moveInLeft 1s"
          document.querySelector(".intro3Descr").style.animation = "moveInRight 1s"
        }

        if(scrollPos >= (3 * window.innerHeight) - 200 && scrollPos <= (4 * window.innerHeight) - 200) {
            document.querySelectorAll(".intro4 li").forEach(el => el.style.opacity = "1");
            document.querySelector(".intro4Image").style.animation = "moveInLeft 1s"
            document.querySelector(".intro4Descr").style.animation = "moveInRight 1s"
          }
    }

}

export default new Main();