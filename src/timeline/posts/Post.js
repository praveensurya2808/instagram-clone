import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
function Post({user,postImage,likes,timestamp}) {
  return (
    <div className='Post'>
      <div className='post__header'>
        <div className='Post_headerAuthor'>
        <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
        {user} <span>{timestamp}</span>
        </div>
        <MoreHorizSharpIcon />
        </div>
      <div className='post__image'>
      <img src={postImage} 
        alt = "spidy_img">

        </img>
      </div>
      <div className='post__footer'>
        <div className='post-footericons'>
          <div className='post_iconsmain'>
              <FavoriteBorderIcon className='postIcon'/>
              <ChatBubbleOutlineSharpIcon className="postIcon"/>
              <SendSharpIcon className='postIcon'/>
              </div>
              <div className="post_iconsSave">
                <BookmarkBorderSharpIcon className='borderIcon'/>
          </div>
        </div>
        Liked by {likes} peoples
      </div>
      </div>
  )
}

export default Post