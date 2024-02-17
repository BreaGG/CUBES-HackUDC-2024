import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './assets/components/navbar/navbar';
import Feed from './assets/components/feed/feed';
import ShareForm from './assets/components/shareForm/shareForm';
import Login from './assets/components/login/login';
import Register from './assets/components/register/register';
import { UserProvider } from './assets/components/usercontext/userContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/share" element={<ShareForm />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </main>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
