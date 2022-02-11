import React, { useContext } from 'react';
import { PokemonContext } from "./PokemonContext";
import { Container, Col, Card, CardImg, Button, Row } from "react-bootstrap";

const MyPokemon = () => {

    const { capturedPokemons } = useContext(PokemonContext);


    return (
        <div>
            <Container>
                <Row className="text-center my-5" lg={6} md={4} xs={2} >
                    {capturedPokemons.map((pokemon) =>
                        <div>
                            <Card>
                                <CardImg src={pokemon.sprites.front_default} />
                                <Card.Title>{pokemon.name}</Card.Title>
                            </Card>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    )

}


export { MyPokemon }