import React from 'react'
import { Container, Row, Col, Card, CardImg, Button } from "react-bootstrap";
import { useState ,useEffect,useContext } from 'react'
import swal from "sweetalert"
import { PokemonContext } from './PokemonContext';


const DetailPokemon = () => {
    const [detail, setPokemon] = useState([]);
    // const [mypokemon, setMyPokemon] = useState([]); 

    const {
        pokemonss,

        setPokemonss,
        capturedPokemons,
        setCapturedPokemons
    } = useContext(PokemonContext);

    
    const data = async () => {
        let url = window.location.href;
        let url_split = url.split("/");
        const ambilnama = url_split[4];
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ambilnama}`)
        const file = await res.json();
        setPokemon(file);
    }


    useEffect(() => {
        data();
    },[])


    const capture = (detail) => {
        setCapturedPokemons([...capturedPokemons, detail]);
    }

    
    if (detail.sprites === undefined) {
        return (
            <div>
                Loading...
                
            </div>
        )
    }

    


    return (

        <div>
            <Container fluid={true} className="py-5 " id="detailPokemon" >

                <Row className='mb-5'>
                    <Col>
                        <Card >
                            <table>
                                <tr>
                                    <th><h1 className="text-center">{detail.name}</h1></th>
                                </tr>
                            </table>
                            
                        </Card>
                    </Col>

                </Row>

                <Card >
                    <Row lg={3} md={3} xs={1}  >
                        
                        <Col className='pt-5'>
                            <Card style={{ border:'none' }}>
                                <table className='text-center'>
                                    <tr>
                                        <th>ID</th>
                                        <td>:</td>
                                        <td>{detail.id}</td>

                                    </tr>

                                    <tr>
                                        <th>Height</th>
                                        <td>:</td>
                                        <td>-</td>
                                    </tr>

                                    <tr>
                                        <th>Weight</th>
                                        <td>:</td>
                                        <td>{detail.weight}</td>
                                    </tr>

                                    <tr>
                                        <th>Abilities</th>
                                        <td>:</td>
                                        {detail.abilities.map((abiliti, index) => {


                                            return (
                                                <div style={{ color: 'white', backgroundColor: 'darkcyan', borderRadius: '25%' }} className='m-2'>
                                                    <td>
                                                        {index + 1}.{abiliti.ability.name}
                                                    </td>
                                                </div>
                                            )


                                        })}

                                    </tr>

                                    <tr>
                                        <th>Type</th>
                                        <td>:</td>
                                        <td>

                                            {detail.types.map((types, index) => {
                                                return (
                                                    <div style={{ color: 'white', backgroundColor: 'darkgreen', borderRadius: '25%' }} className='m-2'>

                                                        {index + 1}.{types.type.name}


                                                    </div>
                                                )
                                            })}

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Form</th>
                                        <td>:</td>
                                        <td></td>
                                    </tr>

                                </table>
                            </Card>

                        </Col>

                        <Col className='pt-5'>

                            <Card style={{ border:'none' }}>
                                <table>
                                    <tr>
                                        <th><CardImg   src={detail.sprites.front_default} /></th>
                                    </tr>
                                </table>
                                
                            </Card>

                        </Col>

                        <Col className='pt-5'>
                            <Card style={{ border:'none' }}>
                                <table className='text-center'>
                                    <tr>
                                        <th>HP</th>
                                        <td>:</td>
                                        <td>{detail.id}</td>

                                    </tr>

                                    <tr>
                                        <th>Attack</th>
                                        <td>:</td>
                                        <td>-</td>
                                    </tr>

                                    <tr>
                                        <th>Defense</th>
                                        <td>:</td>
                                        <td>{detail.weight}</td>
                                    </tr>

                                    <tr>
                                        <th>Sp-Attack</th>
                                        <td>:</td>
                                        {detail.abilities.map((abiliti, index) => {


                                            return (
                                                <div style={{ color: 'white', backgroundColor: 'darkcyan', borderRadius: '25%' }} className='m-2'>
                                                    <td>
                                                        {index + 1}.{abiliti.ability.name}
                                                    </td>
                                                </div>
                                            )


                                        })}
                                    </tr>

                                    <tr>
                                        <th>Sp-Defense</th>
                                        <td>:</td>

                                        {detail.types.map((types, index) => {
                                            return (
                                                <div style={{ color: 'white', backgroundColor: 'darkgreen', borderRadius: '25%' }} className='m-2'>
                                                    <td className=''>
                                                        {index + 1}.{types.type.name}
                                                    </td>

                                                </div>
                                            )
                                        })}

                                    </tr>

                                    <tr>
                                        <th>Speed</th>
                                        <td>:</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <th>Total</th>
                                        <td>:</td>
                                        <td></td>
                                    </tr>

                                </table>
                            </Card>

                        </Col>

                    </Row>
                    <Row>

                        <Card.Footer>

                            <Button className="w-100 " variant="outline-primary" onClick={() => swal({
                                title: "Are you sure?",
                                text: `catch ${detail.name} to your pokemon`,
                                icon: "warning",
                                buttons: true,
                                successMode: true,
                            
                            })
                                .then((willCacth) => {
                                    if (willCacth) {


                                        if (Math.random() >= 0.5) {
                                            swal(`Gocha! you got a ${detail.name} as your pokemon`, {
                                                icon: "success",

                                            })
                                                .then(function kirim() {
                                                    capture(detail)
                                                                              
                                                });
                                                
                                        }
                                        else {
                                            swal(`Sorry you unsuccessful cacth ${detail.name} as your pokemon`, {
                                                icon: "error",

                                            })
                                        }

                                    } else {
                                        swal("Your imaginary file is safe!");
                                    }
                                })

                            }
                            >Catch</Button>

                            
                        </Card.Footer>
                    </Row>
                </Card>

            </Container>


        </div>

    )
}

export {DetailPokemon} ;
