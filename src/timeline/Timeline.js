import React, { useState } from "react";
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Praveen_surya",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 28,
      timestamp: "2d"
    },
    {
      user: "Amma",
      postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 1000,
      timestamp: "1d"
    },
    {
      user: "company_meme",
      postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 6969,
      timestamp: "6h"
    }
  ]);
  return (
    <div className='timeline'>
        <div className='timeline_left'>
            <div className='timeline_posts'>
              {posts.map((post) => (
              
                <Post
                  user={post.user}
                  postImage={post.postImage}
                  likes = {post.likes}
                  timestamp ={post.timestamp}
                />
              ))}
            </div>
        </div>
        <div className='timeline_right'>
            <Suggestions/>
        </div>
    </div>
  );
}

export default Timeline