import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import SearchBar from "./pages/SearchBar";
import PokemonList from "./pages/PokemonList";
import FavoritePage from "./pages/PokemonFavorite";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/list" element={<PokemonList />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;