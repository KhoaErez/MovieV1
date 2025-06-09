import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieList from './components/movie-list/MovieList.jsx';
import Home from './pages/Home.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Category from './pages/Category/Category.jsx';
import GenreList from './pages/Category/GenreList.jsx';
import CountryList from './pages/Category/CountryList.jsx';
import Search from './pages/search/Search.jsx';
import PhimLe from './pages/movieDM/PhimLe.jsx';
import PhimBo from './pages/movieDM/PhimBo.jsx';
import PhimHoatHinh from './pages/movieDM/PhimHoatHinh.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="phim-le" element={<PhimLe />} />
          <Route path="phim-bo" element={<PhimBo />} />
          <Route path="phim-hoat-hinh" element={<PhimHoatHinh />} />
          <Route path="the-loai" element={<Category />}>
            <Route path=":id" element={<GenreList />} />
          </Route>
          <Route path="quoc-gia" element={<Category />}>
            <Route path=":id" element={<CountryList />} />
          </Route>
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
