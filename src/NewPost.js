//̥import React from 'react'
import React, { useContext } from 'react'
import DataContext from './Context/DataContext'

const NewPost = () => {

  const{postTitle,setPostTitle,postBody,
    setPostBody,handleSubmit}=useContext(DataContext)
  return (
    <main className='NewPost'>
    <h2>
       NewPost
    </h2>
    <form className='newPostForm' onSubmit={handleSubmit}>
      <label 
        htmlFor='postTitle'>
          Title
      </label>
      <input
       id='postTitle'
       type="text" 
       name="title" 
       required
       autoFocus
       value={postTitle}
       onChange={(e)=>setPostTitle(e.target.value)}
       />
      

       <label 
       htmlFor="postBody">
        Post
       </label>

       <input 
       type="text" 
       name="body"
       id='postBody'
       required
       autoFocus
       value={postBody}
       onChange={(e)=>setPostBody(e.target.value)}
       />

       <button type = "submit">Submit</button>


    </form>
  </main>
  )
}

export default NewPost