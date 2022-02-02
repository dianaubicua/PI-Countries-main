import './App.css';
import React from 'react';
import {
  Routes, 
  Route,
} from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import CreateActivity from './components/activitycountry';
import About from './components/about';
import { Provider } from 'react-redux';
import store from './store/index';
import Detail from './components/detailcountry';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detailcountry/:id" element={<Detail />} />
        <Route path="/activitycountry" element={<CreateActivity />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Provider>
    </div>         
  );
}

export default App;
