import React, { createContext } from "react";
import data from "./data.json";
import {
  About,
  BestDeals,
  Catagory,
  ContactNow,
  Footer,
  MainSection,
  MostViewProducts,
  Navbar,
  Products,
  Security,
  SomeVagatables,
  Trending_BestProducts,
  AllProducts,
} from "./components/index";

export const DataContext = createContext();
const allData = data;

function App() {
  return (
    <DataContext.Provider value={allData}>
      <div className="lg:px-10 md:px-5 box-border sm:px-0 lg:bg-white mt-2 overflow-x-hidden">
        <Navbar />
        <MainSection />
        <Catagory />
        <About />
        <Products />
        <SomeVagatables />
        <BestDeals />
        <Trending_BestProducts />
        <MostViewProducts />
        <ContactNow />
        <Security />
        <Footer />
        {/* <AllProducts /> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
