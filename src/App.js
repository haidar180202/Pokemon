import { Fragment } from "react";
import { Navigasi } from "./components/Navigasi";
import { PokemonList } from "./container/PokemonList";
import { DetailPokemon } from "./container/DetailPokemon";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { MyPokemon } from "./container/MyPokemon";
import { Home } from "./container/Home";
import { Footer } from "./components/Footer";


const App = ()=>{
  return(
    <Fragment>
      <Router>
        <div className="min-vh-100" style={{background: "linear-gradient(rgba(170, 170, 0, 0.5), rgba(0, 0, 0, 0.5)), url('backgroundlatar.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"}}>
        <Navigasi/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/PokemonList" element={<PokemonList/>}/>
          <Route path= "/DetailPokemon/:pokemon" element={<DetailPokemon/>}/>
          <Route path= "/MyPokemon" element={< MyPokemon/>}/>

        </Routes>
        
        <Routes>
          <Route path= "/" element={<Footer/>}/>
          
        </Routes>
        </div>
      </Router>
      
    </Fragment>
  
  );

}
export default App;