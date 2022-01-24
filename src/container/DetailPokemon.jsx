import React from 'react'
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import { useState } from 'react'

const DetailPokemon = () => {
    const [detail, setPokemon] = useState([]);




    const data = async () => {
        let url = window.location.href;
        let url_split = url.split("/")
        const ambilnama = url_split[4];
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ambilnama}`)
        const file = await res.json();
        setPokemon(file)

    }

    data();

    if (detail.sprites == undefined) {
        return (
            <div>
                Loading...
            </div>
        )
    }



    return (

        <div>
            <Container fluid={true} className="py-5 " >

                <Row className='mb-5'>
                    <Col>
                        <h1 className="text-center">{detail.name}</h1>

                    </Col>

                </Row>

                <Card >
                    <Row>
                        <Col className='m-5 '>
                            <Card className='p-5' style={{ border:'none' }}>
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
                                        <td>
                                            {detail.abilities.map((abiliti, index) => {
                                                return (
                                                    <div style={{ color: 'white', backgroundColor: 'darkcyan' }}>

                                                        {index + 1}.{abiliti.ability.name}
                                                    </div>
                                                )
                                            })}
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>Type</th>
                                        <td>:</td>
                                        <td className='m-2 p-2'>
                                            {detail.types.map((types, index) => {
                                                return (
                                                    <div style={{ color: 'white', backgroundColor: 'darkgreen' }}>

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

                        <Col className='m-5'>

                            <Card style={{ border:'none' }}>
                                <CardImg src={detail.sprites.front_default} />
                            </Card>

                        </Col>

                        <Col className='m-5  '>
                            <Card className='p-5' style={{ border:'none' }}>
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
                                        <td>
                                            {detail.abilities.map((abiliti, index) => {
                                                return (
                                                    <div style={{ color: 'white', backgroundColor: 'darkcyan' }}>

                                                        {index + 1}.{abiliti.ability.name}
                                                    </div>
                                                )
                                            })}
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>Type</th>
                                        <td>:</td>
                                        <td className='m-2 p-2'>
                                            {detail.types.map((types, index) => {
                                                return (
                                                    <div style={{ color: 'white', backgroundColor: 'darkgreen' }}>

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

                    </Row>
                </Card>

            </Container>


        </div>

    )
}

export { DetailPokemon }