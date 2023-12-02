import "./style.css";
import headerView from "./src/views/headerView";
import mainView from "./src/views/mainView";
import footerView from "./src/views/footerView";
import { state } from "./src/model";
import portPageView from "./src/components/portPageView";
import portCardsView from "./src/components/portCardsView";
import notFoundView from "./src/components/notFoundView";

export const setDefaultPosts = () => {
  state.posts = [];

  state.posts = state.postsResource.map(post => {
    return {...post};
  });

  state.posts.filter((post) => {
    post.descr = `${post.descr.split(" ").slice(0, 8).join(" ")}...`;
  });

  state.posts = state.posts.reverse();
};

export const portCardShowMore = (id) => {
  state.postsResource.map(rawPost => {
    state.posts.filter(post => post.id == id ? post.descr = rawPost.descr : null);
  })

  state.posts = state.posts.reverse();
};

export const portCardShowLess = (id) => {
  state.posts.filter(post => post.id == id ? post.descr = `${post.descr.split(" ").slice(0, 8).join(" ")}...` : null);

  state.posts = state.posts.reverse();
};

const setSelectedPost = (id = window.location.hash.slice(1)) => {
  const foundPost = state.postsResource.find(post => post?.id == id);
  state.post = {...foundPost};
}

const routeManagement = () => {
  if(window.location.hash) {

    let existingPageIds = [];
    state.postsResource.map(post => existingPageIds.push(`${post?.id}`));
  
    if(window.location.hash === "#portfolio") {
      portCardsView.render();
    } else {
      if(existingPageIds.includes(window.location.hash.slice(1))) {
        setSelectedPost();
        portPageView.render();
      } else {
        setSelectedPost();
        notFoundView.render();
      }
    }
  }
}

headerView.render();
headerView.eventHandler();

mainView.render();
mainView.eventHandler();

footerView.render();


routeManagement();


window.addEventListener("hashchange", () => {
  routeManagement();
})

