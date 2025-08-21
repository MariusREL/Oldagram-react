import { useState } from 'react'
import { posts } from './data/Posts'
import { Feed } from './components/Feed/Feed'
import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post.jsx'
import './App.css'


function App() {


  return (
    <>
    <div className="container">
      <Header />
      <Feed posts={posts}/>
    </div>
    
    </>
  )
}

export default App
