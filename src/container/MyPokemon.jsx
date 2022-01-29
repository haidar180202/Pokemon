import { useState } from "react";
import { PokemonList } from "./PokemonList";
import swal from "sweetalert"

const MyPokemon = () =>{
 

    const data = async () => {
        let url = window.location.href;
        let url_split2 = url.split("/")
        const ambilnama2 = url_split2[4];
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${ambilnama2}`)
        const file2 = await res2.json();
       
    }

    data();
    

    return(
        <div>

        </div>
    ) 
    
}


export {MyPokemon}