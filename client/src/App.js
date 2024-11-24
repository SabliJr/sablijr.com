import "./App.css";

import Header from "./Components/Header/index.jsx";
import Hero from "./Components/Hero/index";
import About from "./Components/About/index";
import LaWork from "./Components/myWork/index.jsx";
import TeckStack from "./Components/About/teckStack.jsx";
import Contact from "./Components/Contact/index";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <LaWork />
      <TeckStack />
      <Contact />
    </div>
  );
};

export default App;
