import { useEffect,useState,createContext } from "react";
import Post from "../Post";
//import {Routes,Route, Link, useNavigate} from "react-router-dom";
import PostLayout from "../PostLayout";
//import { useState } from "react";
//import Feed from "../Feed";
import {format} from "date-fns"
//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/posts";
import EditPost from "../EditPost";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({})

export const DataProvider = ({children})=>
{
  const[posts,setPosts]=useState([])
  const [search,setSearch]=useState('')
  const [searchResults,setSearchResults]=useState([])
  const [postTitle,setPostTitle]=useState('')
  const [postBody,setPostBody]=useState('')
  const [editTitle,setEditTitle]=useState('')
  const [editBody,setEditBody]=useState('')
  const navigate = useNavigate()
  const {width}=useWindowSize()
  const {data,fetchError,isLoading}=useAxiosFetch("http://localhost:3500/posts")

  //useEffect is used to display the fetch data

  useEffect(()=>{
    setPosts(data)
  },[data])


  //Fetch Data from Axios
  //I had comment this for reference
  //Instead of this im using the custom hooks called
  //useAxiousFetch
{/*
  useEffect (()=>{
    const fetchPosts = async()=>
    {
      try{
          const response =await api.get('/posts');
          setPosts(response.data);
      }
      catch(err){

        if(err.response)
        {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }
        else
        {
          console.log(`Error : ${err.message}`)
        }
      }
    }

    fetchPosts();
  },[]);

*/}
  
 useEffect(()=>
 {
  const filterResults = posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    ||
    ((post.title).toLowerCase().includes(search.toLowerCase()))
  )
    setSearchResults(filterResults.reverse())
  
 },[posts,search])

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id+1
    :1;
    const datetime = format(new Date(),"MMMM dd, yyyy pp")
    const newpost = {
      id,title:postTitle,datetime,body:postBody
    }
    try{
    const response = await api.post('/posts',newpost)
    const allPosts = [...posts,response.data]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
    }
    catch(err)
    {
      if(err)
      {
        console.log(`Error : ${err.message}`);
      }
    }
  }
//patch or Edit

const handleEdit = async(id) =>
{
  const datetime = format(new Date(),
  'MMMM dd,yyyy pp')
  
    const updatedpost = {
      id,
      title:editTitle,
      datetime,
      body:editBody

    }

    try{
      const response = await api.put(`/posts/${id}`,updatedpost)
      setPosts(posts.map(post => post.id===id ? 
           {...response.data} : post))
      setEditTitle('')
      setPostBody('')
      navigate('/')
    }
    catch(err)
    {
      console.log(`Error : ${err.message}`)
    }
}

//Delete
  const handleDelete = async(id)=>
  {
    try{
     
        await api.delete(`/posts/${id}`)
        const postList = posts.filter( post =>
          post.id!==id
      
        )
      setPosts(postList)
      navigate('/')

    }
    catch(err)
    {
      console.log(`Error : ${err.message}`)
    }
     
  }
    return(
        <DataContext.Provider value={{
            width,
            search,
            setSearch,
            searchResults,
            fetchError,
            isLoading,
            postTitle,
            setPostTitle,
            postBody,
            setPostBody,
            handleSubmit,
            posts,
            editTitle,
            setEditTitle,
            handleEdit,
            editBody,
            setEditBody,
            handleDelete,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext