import { uri } from "./api"

export const state = {
    postsResource: [],
    posts: [],
    post: {}
}


class HTTPRequests {

    async getAllPosts() {
        try {
            await fetch(uri + "posts")
            .then(res => res.json())
            .then(data => state.postsResource = data)
            .then(() => {
                state.posts = [];

                state.posts = state.postsResource.map(post => {
                  return {...post};
                });
              
                state.posts.filter((post) => {
                  post.descr = `${post.descr.split(" ").slice(0, 8).join(" ")}...`;
                });
              
                state.posts = state.posts.reverse();
            })
            
        } catch(err) {
            console.log(err.message);
        }
    }

    async getSelectedPost(id) {
        try {
            await fetch(uri + "posts/" + id)
            .then(res => res.json())
            .then(data => state.post = data);
        } catch(err) {
            console.log(err.message);
        }
    }
}

export const HTTPRequest = new HTTPRequests();