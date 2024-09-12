import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './designs/css/main.css';

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [userName, setUserName] = useState('');
 
   return (
     <div className="App">
       <Header isLoggedIn={isLoggedIn} userName={userName} />
       <main className="main">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
           <Route path="/profile" element={<Profile />} />
         </Routes>
       </main>
       <Footer />
     </div>
   );
 }

export default App;