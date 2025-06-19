// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {browserRouter,routes, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import { useState } from 'react';
function App() {
  const[posts,setPosts]=useState([]);
  const addPost =(post)=>{
    setPosts([...posts,post])
  }
  return (
    <browserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/post">Post</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/post' element={<Post />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </browserRouter>
  )
}

export default App
