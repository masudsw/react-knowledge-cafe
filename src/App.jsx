import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [markAsRead,setMarkAsRead]=useState(0);

  const handleAddToBookmark=blog=>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
  }

  const handleMarkAsRead=(id,time)=>{
    setMarkAsRead(markAsRead+time);
    const remainingBookMarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookmarks(remainingBookMarks);

  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={markAsRead}></Bookmarks>
      </div>
      
      
     
    </>
  )
}

export default App
