import React, { useContext, useEffect,useState } from "react";
import { addPost } from "../APIManagers/PostManager";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const [post, update] = useState({
            title:"",
            caption: "",
            imageUrl: "",
            userProfileId: 1,
            dateCreated:  Date.now()
        });

const navigate = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postToSendToAPI = {
          title:post.title,
          caption: post.caption,
          imageUrl: post.imageUrl,
          userProfileId: 1,
          dateCreated: new Date().toISOString()

    };

    return addPost(postToSendToAPI) 
     .then(navigate("/"));
    };

  return (
    <form className="post-form">
        <h2 className="post-form-title">Create a New Post</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={post.title}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.title = event.target.value
                                update(copy)
                            }
                        } />
                </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption:</label>
                    <input
                        type="text"
                        id="caption"
                        value={post.caption}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.caption = event.target.value
                                update(copy)
                            }
                        } />
                </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image Url:</label>
                    <input
                        type="text"
                        id="title"
                        value={post.imageUrl}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.imageUrl = event.target.value
                                update(copy)
                            }
                        } />
                </div>
        </fieldset>
        <button
        onClick={(clickEvent) => handleSubmit(clickEvent)} className="btn btn-primary">Submit Post</button>
    </form>
);

}

export default PostForm;
