
import { Container, Col, Card, CardImg, Button, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import swal from "sweetalert"





const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState();
    const [loading, setLoading] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");


    const getPokemon = async () => {
        const res = await fetch(loading)
        const data = await res.json();
        setCount(data.count);
        setLoading(data.next)


        const detailPokemon = async (result) => {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setPokemons((dataupdate) => [...dataupdate, data]);
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

            <Row className="text-center my-5" lg={6} md={4} xs={2} >
                {pokemons.map((pokemon, index) => {
                    const titlePokemon = `DetailPokemon/${pokemon.name}`
                    const catchPokemon = `CatchPokemon/${pokemon.name}`
                    return (
                        <Col className="mb-4">
                            <Card>
                                <Card.Header>{index + 1}</Card.Header>
                                <CardImg src={pokemon.sprites.front_default} />
                                <Card.Body>
                                    <Card.Title>{pokemon.species.name}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href={titlePokemon}>
                                        <Button className="w-100 mb-2" variant="outline-success">Detail</Button>
                                    </Card.Link>
                                    <Button className="w-100 " variant="outline-primary" onClick={() => swal({
                                        title: "Are you sure?",
                                        text: `catch ${pokemon.name} to your pokemon`,
                                        icon: "warning",
                                        buttons: true,
                                        successMode: true,
                                    })
                                    .then((willCacth) => {
                                        if (willCacth) {
                                          swal(`Gocha! you got a ${pokemon.name} as your pokemon`, {
                                            icon: "success",
                                          });
                                        } else {
                                          swal("Your imaginary file is safe!");
                                        }
                                      })
                                    }>Catch</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
            <Row>
                <button className="load-more" onClick={() => getPokemon()}>Load More</button>
            </Row>
        </Container>
    );
}


export { PokemonList };