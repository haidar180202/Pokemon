import { Fragment } from "react";
import { Navigasi } from "./components/Navigasi";
import { PokemonList } from "./container/PokemonList";
import { DetailPokemon } from "./container/DetailPokemon";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { MyPokemon } from "./container/MyPokemon";
import { Home } from "./container/Home";
import {PokemonProvider} from "./container/PokemonContext";



const App = ()=>{
  return(
    <Fragment>
      <PokemonProvider>
      <Router>
        <div className="min-vh-100" style={{background: "linear-gradient(rgba(170, 170, 0, 0.5), rgba(0, 0, 0, 0.5)), url('backgroundlatar.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"}}>
        <Navigasi/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/pokemonList" element={<PokemonList/>}/>
          <Route path= "/detailPokemon/:id" element={<DetailPokemon/>}/>
          <Route path= "/myPokemon" element={< MyPokemon/>}/>
        </Routes>
        

        </div>
      </Router>
      </PokemonProvider>
      
      
    </Fragment>
  
  );

}
export default App;