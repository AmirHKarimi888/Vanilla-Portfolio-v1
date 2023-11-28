import './style.css'
import headerView from './views/headerView'
import mainView from './views/mainView';

headerView.render();

mainView.render();

window.addEventListener("scroll", () => {
  document.querySelector(".intro2Title").style.animation = "moveInBottom 1s ease-out"
  document.querySelector(".intro2Sub").style.animation = "moveInBottom 1s ease-out"
})