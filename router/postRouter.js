const app = require(`express`).Router();
const auth = require(`../middleware/auth`);

const addPostControl = require(`../controller/post/post`);
app.post(`/post`, auth.isAuth, addPostControl.addPost);

const deletePostControl = require(`../controller/post/deletePost`);
app.delete(`/deletePost`, auth.isAuth, deletePostControl.deletePost);

const updatePostControl = require(`../controller/post/updatePost`);
app.patch(`/updatePost`, auth.isAuth, updatePostControl.updatePost);

const allPostControl = require(`../controller/post/allPost`);
app.get(`/allPosts`, auth.isAuth, allPostControl.allPost);

const myPostControl = require(`../controller/post/myPost`);
app.get(`/myPosts`, auth.isAuth, myPostControl.myPosts);

module.exports = app;
