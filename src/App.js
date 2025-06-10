import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks/>
      <About />
      <Skills />
      <Work />
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
