import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BookingModal, SearchOverlay } from './components/Overlays'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Atelier from './pages/Atelier'
import Lookbook from './pages/Lookbook'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  const [searchOpen,setSearchOpen]=useState(false)
  const [bookingOpen,setBookingOpen]=useState(false)
  const [saved,setSaved]=useState<Set<string>>(new Set())
  const favorite=(id:string)=>setSaved(prev=>{const n=new Set(prev);n.has(id)?n.delete(id):n.add(id);return n})
  return <>
    <Layout favorites={saved.size} onSearch={()=>setSearchOpen(true)} onBook={()=>setBookingOpen(true)}>
      <Routes>
        <Route path="/" element={<Home onBook={()=>setBookingOpen(true)} favorite={favorite} saved={saved}/>} />
        <Route path="/collections" element={<Collections onBook={()=>setBookingOpen(true)} favorite={favorite} saved={saved}/>} />
        <Route path="/atelier" element={<Atelier onBook={()=>setBookingOpen(true)}/>} />
        <Route path="/lookbook" element={<Lookbook/>} />
        <Route path="/about" element={<About onBook={()=>setBookingOpen(true)}/>} />
        <Route path="/contact" element={<Contact onBook={()=>setBookingOpen(true)}/>} />
      </Routes>
    </Layout>
    <SearchOverlay open={searchOpen} onClose={()=>setSearchOpen(false)} />
    <BookingModal open={bookingOpen} onClose={()=>setBookingOpen(false)} />
  </>
}
