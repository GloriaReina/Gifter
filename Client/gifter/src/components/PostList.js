import React, { useContext, useEffect,useState } from "react";
import { getAllPosts } from "../APIManagers/PostManager";
import { Post } from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;



// import React, { useState, useEffect } from "react";
// // import Post from './Post';
// import { getAllPosts } from "../APIManagers/PostManager";

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   const getPosts = () => {
//     getAllPosts().then(allPosts => setPosts(allPosts)); 
//   };

//   useEffect(() => {
//     getPosts();
//   }, []); 



//   return (  
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <img src={post.imageUrl} alt={post.title} />
//           <p>
//             <strong>{post.title}</strong>
//           </p>
//           <p>{post.caption}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostList;