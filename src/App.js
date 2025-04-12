import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import TvShowDetails from "./pages/TvShowsDetails"; 
import Dashboard from "./pages/Dashboard";
import SearchResults from "./pages/SearchResults"; // Import the search results page

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshows/:id" element={<TvShowDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchResults />} /> {/* Add the search results route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
