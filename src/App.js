import './App.css';
// import { useEffect } from "react";
import Head from "./components/Head/Head";

import IpsumDetail from "./components/WrapperTabs/WrapperTabs";
import IpsumDescription from "./components/Content/Content";
import SliderCards from "./components/SliderCards/SliderCards";
import IpsumTitle from "./components/ButtonGreen/ButtonGreen";
import Footer from "./components/Footer/Footer";
import photo from "../src/images/background3.png";

function App() {
  return (
    <>
      <div className="App">
        <Head />

        <body>
          <IpsumDetail />
          <IpsumDescription />

          <section className="main">
          
            <SliderCards />
            <IpsumTitle />
          </section>
        </body>

    
          <Footer />
  

      </div>
    </>
  );
}

export default App;
