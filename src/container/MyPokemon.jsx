import React, { useContext } from 'react';
import { PokemonContext } from "./PokemonContext";
import { Container, Col, Card, CardImg, Button, Row } from "react-bootstrap";
import swal from "sweetalert"

const MyPokemon = () => {

    const { 
            capturedPokemons,
            setCapturedPokemons,
          } = useContext(PokemonContext);
    


    const releasePokemon = (releasedPokemon) =>
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

    const release = (pokemon) => {
        setCapturedPokemons(releasePokemon(pokemon));

      
    }

    
    return (
        <div>
            <Container>
                <Row className="text-center my-5" lg={6} md={4} xs={2} >
                    {capturedPokemons.map((pokemon) =>
                        <div>
                            <Card>
                                <CardImg src={pokemon.sprites.front_default} />
                                <Card.Title>{pokemon.name}</Card.Title>
                                <Button className="w-100 " variant="outline-success" onClick={() => swal({
                                title: "Are you sure?",
                                text: `Release ${pokemon.name} to your pokemon`,
                                icon: "warning",
                                buttons: true,
                                successMode: true,
                            
                            })
                                .then((willCacth) => {
                                    if (willCacth) {
                                            swal(`Hore! your success to release ${pokemon.name} as your pokemon`, {
                                                icon: "success",

                                            })
                                                .then (()=>{release(pokemon)})
                                                
                                       

                                    } else {
                                        swal("Your imaginary file is safe!");
                                    }
                                })

                            }>Hapus Pokemon</Button>
                            </Card>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    )

}


export { MyPokemon }