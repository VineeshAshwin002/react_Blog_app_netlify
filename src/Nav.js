import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'
const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=>e.preventDefault()} >
      <label
       htmlFor='search'
      >Search Posts</label>
      <input
          id='search'
          placeholder='Search Posts'
          value={search}
          type='text'
          onChange={
            (e)=>setSearch(e.target.value)
      }
      />
    </form>
    <ul>
       <li>
        <Link to = "/">Home</Link>
        <br />
        </li>
        <li>
        <Link to= "/post">Post</Link>
        <br />
        </li>
        <li>
        <Link to = "/about">About</Link>
        <br />
        </li>
        
    </ul>
  </nav>

 
  )
}

export default Nav