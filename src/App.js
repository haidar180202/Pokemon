import { Fragment } from "react";
import { Navigasi } from "./components/Navigasi";
import { PokemonList } from "./container/PokemonList";
import { DetailPokemon } from "./container/DetailPokemon";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { CatchPokemon } from "./container/CatchPokemon";

const App = ()=>{
  return(
    <Fragment>
      <Router>
        <Navigasi/>
        <Routes>
          <Route path= "/" element={<PokemonList/>}/>
          <Route path= "/DetailPokemon/:pokemon" element={<DetailPokemon/>}/>
          <Route path= "/my-pokemon" element={<PokemonList/>}/>
          <Route path= "/CatchPokemon/:pokemon" element={< CatchPokemon/>}/>

        </Routes>
      </Router>
    </Fragment>
  
  );

}
export default App;