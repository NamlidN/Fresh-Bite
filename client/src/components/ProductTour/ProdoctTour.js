import React, { useState, useEffect } from "react";
import Welcome from "./AfterLoad/Welcome.js";
import Splash from "./PreProdoctLoad.js";

const ProdoctTour = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <Splash isLoading={isLoading} /> : <Welcome />;
};

export default ProdoctTour;
