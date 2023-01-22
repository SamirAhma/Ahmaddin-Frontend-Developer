import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm";
import CapsulesProvider from "./CapsuleContext";
import CapsuleList from "./components/CapsuleList";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CapsulesProvider>
        <SearchForm />
        <CapsuleList />
        <Pagination />
      </CapsulesProvider>
    </>
  );
};

export default App;
