import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Import Various Pages
import LandingPage from './pages/landing_page'
import Leadership from './pages/leadership';
import Connect from './pages/connect';
import Events from './pages/events';

// CSS Imports
import './scss/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
