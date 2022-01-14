import { Fragment } from "react";
import { Navigasi } from "./components/Navigasi";
import { PokemonList } from "./container/PokemonList";
 
const App = ()=>{
  return(
    <Fragment>
      <Navigasi/>
      <PokemonList/>
    </Fragment>
  
  );

}
export default App;