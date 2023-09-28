import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const EditPost = () => {
    const {posts,editTitle,setEditTitle,
        handleEdit,editBody,setEditBody} = useContext(DataContext)

    const {id} = useParams()
    const post = posts.find(post => (post.id).toString()===id)

    useEffect(()=>
    {
        if(post)
        {
            setEditTitle(post.title);
            setEditBody(post.body)

        }
    },
    [post,setEditBody,setEditTitle])
  return (
   <main className='NewPost'>
    {editTitle &&
        <>
            <h2>Edit Post</h2>
            <form className='newPostForm'
               onSubmit={(e)=>e.preventDefault()}>

                <label
                    htmlFor='editTitle'
                    className='editTitle'
                    >Edit Title</label>
                <input
                    className='editTitle'
                    type='text'
                    required
                    value={editTitle}
                    onChange={
                        (e)=>
                        {
                            setEditTitle(e.target.value)
                        }
                    }
                    />

                <label
                    htmlFor='editTitle'
                    className='editTitle'
                    >Edit Post</label>
                <input
                    className='editPost'
                    type='text'
                    required
                    value={editBody}
                    onChange={
                        (e)=>
                        {
                            setEditBody(e.target.value)
                        }
                    }
                    />
                    <button 
                        onClick={()=>handleEdit(post.id)}
                    
                    >Submit</button>



            </form>

        </>
    }


    {!editTitle &&
        <>
             <h2>Page Not Found</h2>
             <p>Well, that's Disappointing.</p>
            <p>Visit Our Home Page</p>
        
        
        </>
    
    }

   </main>
  )
}

export default EditPost