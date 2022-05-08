import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './UI/Home';
import Product from './UI/Product';
import './App.css';
import DataFetch from './hooks/dataFetch';
import { configActions } from './store/congif';
import { useDispatch } from 'react-redux';
import Logo from './component/Logo';
const url = `https://api-test.innoloft.com/configuration/${process.env.REACT_APP_APP_ID}/`;

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = DataFetch(url);

  if (status === 'fetched') dispatch(configActions.fetchConfig(data));

  if (status === 'fetching') return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <div className="home_logo">
        <Logo />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
