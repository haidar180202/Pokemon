
import { Container, Col, Card,CardImg, Button, Row } from "react-bootstrap";
import { useState,useEffect } from "react";
const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState();

    const getPokemon = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        const data = await res.json();
        
        setCount(data.count);
        
        const detailPokemon =async (result) =>{
            result.forEach(async (pokemon)=>{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setPokemons(dataupdate => [...dataupdate,data]);
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
                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size:4 }}>
                    <h1 className="text-center">Pokemon List</h1>
                    <h3 className="text-center">Jumlah Pokemon {count}</h3>
                </Col>
            </Row>

            <Row className="text-center my-5">
                {pokemons.map((pokemon,index) => {
                    return (
                        <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-4">
                            <Card style={{ width: '18rem' }}>
                            <Card.Title>{index + 1}</Card.Title>
                                           <CardImg src={pokemon.sprites.front_default}/>          
                                <Card.Body>
                                    <Card.Title>{pokemon.species.name}</Card.Title>
                                    <Button variant="primary">Detail</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </Container>
    );
}

export { PokemonList };