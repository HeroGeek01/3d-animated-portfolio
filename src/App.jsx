import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact"
import Shape from "./components/hero/Shape";


const App = () => {
  return (
    <div className="container">
      <section id = "#hero">
        <Hero/>
      </section>
      <section id = "#services">
        <Services/>
      </section>
      <Portifolio/>
      <section id = "#contact">
        <Contact/>
      </section>

    </div>
  )
}

export default App;

