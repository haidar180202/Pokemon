import { Fragment } from "react";
import { Navigasi } from "./components/Navigasi";
import { PokemonList } from "./container/PokemonList";
import { DetailPokemon } from "./container/DetailPokemon";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { MyPokemon } from "./container/MyPokemon";

const App = ()=>{
  return(
    <Fragment>
      <Router>
        <Navigasi/>
        <Routes>
          <Route path= "/" element={<PokemonList/>}/>
          <Route path= "/DetailPokemon/:pokemon" element={<DetailPokemon/>}/>
          <Route path= "/my-pokemon" element={<PokemonList/>}/>
          <Route path= "/MyPokemon/:pokemon" element={< MyPokemon/>}/>

        </Routes>
      </Router>
    </Fragment>
  
  );

}
export default App;