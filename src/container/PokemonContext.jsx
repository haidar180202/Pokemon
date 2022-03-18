import React, {useState,createContext} from 'react';

 const PokemonContext = createContext();
 const PokemonProvider = (props) => {
    const [pokemonss, setPokemonss] = useState([]);
    const [capturedPokemons, setCapturedPokemons] = useState([]);
    const [release, setRelease] = useState([]);

    const providerValue ={
        pokemonss,
        setPokemonss,
        capturedPokemons,
        setCapturedPokemons,
      
    }

  return(
      <PokemonContext.Provider value = {providerValue}>
          {props.children}
      </PokemonContext.Provider>
  );
};

export  {PokemonContext,PokemonProvider};
