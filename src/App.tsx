import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner";
import Navbar from "./Navbar";
import Title from "./Title"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import { ReactElement, useEffect, useState } from "react";

function App(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(!isLoading);
    });
    // return () =>
    //   window.removeEventListener("load", () => {
    //     setIsLoading(!isLoading);
    //   });
  }, [isLoading]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Title/>
        <About/>
        <Projects/>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
