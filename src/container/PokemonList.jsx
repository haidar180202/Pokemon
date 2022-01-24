
import { Container, Col, Card, CardImg, Button, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState();
    

    const getPokemon = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        const data = await res.json();
        setCount(data.count);

        const detailPokemon = async (result) => {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setPokemons(dataupdate => [...dataupdate, data]);
            })


        }

        detailPokemon(data.results);

    }

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <Container fluid={true} className="py-5">
            <Row>
                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 4 }}>
                    <h1 className="text-center">Pokemon List</h1>
                    <h3 className="text-center">Jumlah Pokemon {count}</h3>
                </Col>
            </Row>

            <Row className="text-center my-5" lg={ 6 } md={ 4 } xs={ 3 } >
                {pokemons.map((pokemon, index) => {
                    const titlePokemon = `DetailPokemon/${pokemon.name}`
                    return (
                        <Col  className="mb-4">
                            <Card>
                                <Card.Header>{index + 1}</Card.Header>
                                <CardImg src={pokemon.sprites.front_default} />
                                <Card.Body>
                                    <Card.Title>{pokemon.species.name}</Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href={titlePokemon}>
                                        <Button className="w-100" variant="outline-danger">Detail</Button>
                                    </Card.Link>

                                </Card.Footer>
                            </Card>
                        </Col> 
                       
                    )
                    
                })}
            </Row>
            <Row>
            <button className="load-more" onClick={getPokemon}> Load More</button>
            </Row>
        </Container>
    );
}

export { PokemonList };