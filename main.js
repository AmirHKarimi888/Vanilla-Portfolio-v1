import "./style.css";
import headerView from "./src/views/headerView";
import mainView from "./src/views/mainView";
import footerView from "./src/views/footerView";
import { HTTPRequest, state } from "./src/model";
import portPageView from "./src/components/portPageView";
import portCardsView from "./src/components/portCardsView";
import notFoundView from "./src/components/notFoundView";

export const setDefaultPosts = async () => {
  await HTTPRequest.getAllPosts();
};

export const portCardShowMore = (id) => {
  state.postsResource.map(rawPost => {
    state.posts.filter(post => post.id == id ? post.descr = rawPost.descr : null);
  })

};

export const portCardShowLess = (id) => {
  state.posts.filter(post => post.id == id ? post.descr = `${post.descr.split(" ").slice(0, 8).join(" ")}...` : null);

};

const setSelectedPost = async (id = window.location.hash.slice(1)) => {
  // const foundPost = state.postsResource.find(post => post?.id == id);
  // state.post = {...foundPost};

  await HTTPRequest.getSelectedPost(id);
}

const routeManagement = async () => {
  if(window.location.hash) {

    let existingPageIds = [];

    await setDefaultPosts()
    .then(() => {
      state.postsResource.map(post => existingPageIds.push(`${post?.id}`));

    })
    .then(async () => {
      if(window.location.hash === "#blog") {
        portCardsView.render();

      } else {
        if(existingPageIds.includes(window.location.hash.slice(1))) {
          await setSelectedPost()
          .then(() => portPageView.render());
          
        } else {
          notFoundView.render();
        }
      }
    })

  }
}

headerView.render();
headerView.eventHandler();

mainView.render();
mainView.eventHandler();

footerView.render();


await routeManagement();


window.addEventListener("hashchange", async () => {
  await routeManagement();
})

