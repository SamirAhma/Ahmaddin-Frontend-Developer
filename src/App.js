import React from "react";
import Grids from "./components/Grids";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SearchForm />
      <Grids />
      <Pagination />
    </>
  );
};

export default App;
