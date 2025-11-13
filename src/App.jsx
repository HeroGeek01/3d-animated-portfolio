
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
      <section id = "#portifolio">
         <Portifolio/>
      </section>
     <section id = "#contact">
        <Contact/>
     </section>

    </div>
  )
}

const test = () => {
  return(
    <div className="container">
      <Shape/>
    </div>
  )
}

export default App;

