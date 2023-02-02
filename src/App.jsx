import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pagination from "./components/Pagination/Pagination";
import SearchForm from "./components/SearchForm/SearchForm";
import CapsulesProvider from "./CapsuleContext";
import CapsuleList from "./components/CapsuleList/CapsuleList";
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
