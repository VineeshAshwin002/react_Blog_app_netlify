import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import   Home   from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

import {Routes,Route} from "react-router-dom";

import EditPost from "./EditPost";

import { DataProvider } from "./Context/DataContext";


function App() {
{/*
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
 {/* 
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
  /*}
*/}
  return (
    <div className="App">
 {/* In this way, we are using the Links
    <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>

          <li><Link to = "/postpage">Post page</Link></li>
         

         

        </ul>

    </nav>
  */}
    {/* In this way, we are using the route
      <Routes>
        <Route
            path="/"  element={<Home />}
         />
         <Route 
            path="/about" element={<About />}
          />
          
          <Route
            path="/newpost" element ={<NewPost/>}
          />
          
            <Route path="/postpage" element={<PostLayout/>} >
                <Route 
                    index element = {<PostPage/>}
                  />
                  <Route 
                    path=":id" element ={<Post/>}
                  />
                  <Route
                    path="newpost" element ={<NewPost/>}
                  />
              
            </Route>
          <Route
            path="*" element={<Missing/>}
            />

       
      </Routes>
  */}
  {/*
 <Routes>
      <Route path="/" element={<Home />}
      />

      <Route path="/post" element={<About/>}
      />

      <Route path="/about" element={<About/>}
      />
    

  </Routes>
*/}

  <DataProvider>
   <Header
        title="Blog-Site"
        //width={width}
      />
    <Nav/>
      <Routes>
            //Home
            <Route path="/" element={
              <Home />}
            />
            //NewPost

//Here We are using the Nested Route 
      <Route path="post">
          <Route index element={
              <NewPost
              />} 
          />
            <Route path=":id" element = {
                <PostPage
                />}
            />
      </Route>
           {/* 
            //Postpage
            <Route path="/postpage" element={
                <PostPage/>}
            /> 
            */}
            //EditPost
            <Route path='/edit/:id' 
                element={
                <EditPost
                />
            }/>

            //About
            <Route path="/about" element={
                <About/>}
            />  

            //Missing
            <Route path="*" element={
                <Missing/>}
            />
      </Routes>
   <Footer/>
 </DataProvider>    
    </div>
  );
}

export default App;
