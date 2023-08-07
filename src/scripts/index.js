import { users, suggestUsers, posts } from "./database.js";
import { renderUser, renderPosts, register } from "./render.js";
import { showPost } from "./modal.js";

renderUser(suggestUsers)
renderPosts(posts)
register(posts)
showPost(posts)