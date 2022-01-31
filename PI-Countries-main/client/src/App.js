import './App.css';
import React from 'react';
import {
  Routes, 
  Route,
} from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import DetailCountry from './components/detailcountry';
import ActivityCountry from './components/activitycountry';
import About from './components/about';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detailcountry" element={<DetailCountry />} />
        <Route path="/activitycountry" element={<ActivityCountry />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Provider>
    </div>         
  );
}

export default App;
