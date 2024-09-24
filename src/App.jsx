import { useEffect, useState } from "react";
import Benefits from "./components/Benefits";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import { MaangeProvider } from "./contexts/ManageProvider";
import {  GridLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  return (
    <>
      {isLoading ? (
        <GridLoader
          color="#f25f3a"
          loading={isLoading}
          cssOverride={true}
          size={50}
          className="loader"
        />
      ) : (
        <div className="container">
          <div className="bg bg--top"></div>
          <MaangeProvider>
            <Navigation />
            <Hero />
            <div className="bg bg--middle"></div>
            <Benefits />
            <Testimonials />
            <Cta />
            <Footer />
          </MaangeProvider>
        </div>
      )}
    </>
  );
}

export default App;
