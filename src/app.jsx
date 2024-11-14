import { Router } from 'preact-router'; // Import the Router for routing

import Navbar from './components/Navbar';

import GetEmailsForm from './pages/GetEmailsForm'
import Home from './pages/Home';
import About from './pages/About';

import './index.css'

export function App() {

  return (
    <>
      <Navbar />
      <div className="app">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <GetEmailsForm path="/pre-signup" />
        </Router>
      </div>
    </>
  )
}
