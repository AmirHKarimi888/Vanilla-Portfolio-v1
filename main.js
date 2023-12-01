import "./style.css";
import headerView from "./views/headerView";
import mainView from "./views/mainView";
import footerView from "./views/footerView";
import { state } from "./model";

export const setDefaultPosts = () => {
  state.posts = [];

  state.posts = state.postsResource.map(post => {
    return {...post};
  });

  state.posts.filter((post) => {
    post.descr = `${post.descr.split(" ").slice(0, 8).join(" ")}...`;
  });
};

export const portCardShowMore = (id) => {
  state.postsResource.map(rawPost => {
    state.posts.filter(post => post.id == id ? post.descr = rawPost.descr : null);
  })
};

export const portCardShowLess = (id) => {
  state.posts.filter(post => post.id == id ? post.descr = `${post.descr.split(" ").slice(0, 8).join(" ")}...` : null);
};

headerView.render();
headerView.eventHandler();

mainView.render();
mainView.eventHandler();

footerView.render();
