import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/navbar/navbar'
import Feed from './assets/components/feed/feed'
import ShareForm from './assets/components/shareForm/shareForm';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Feed/>}/>
          <Route exact path="/share" element={<ShareForm/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
