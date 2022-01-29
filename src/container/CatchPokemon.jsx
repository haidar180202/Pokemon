import { useState } from "react";
import { PokemonList } from "./PokemonList";
import swal from "sweetalert"

const CatchPokemon = () =>{
    const [Catch, setCatch] = useState([]);

    const data = async () => {
        let url = window.location.href;
        let url_split2 = url.split("/")
        const ambilnama2 = url_split2[4];
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${ambilnama2}`)
        const file2 = await res2.json();
        setCatch(file2);
    }
    swal({
        title: "Are you sure?",
        text: "to catch this pokemon",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
            

          });
        } else {
          swal("Your imaginary file is safe!");
          
        }
      });
    

    data();
    

    return(
        <div>
            
        </div>
    ) 
    
}


export {CatchPokemon}