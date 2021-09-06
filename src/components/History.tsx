import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

interface Props {
    operacije: string[],
    obrisiOperacije: () => void;
}
export default function History(props: Props) {
    return (
        <Container>
            <Row>
                <Col >
                    <h3>Istorija operacija</h3>

                </Col>
                <Col>
                    <Button variant='danger' onClick={props.obrisiOperacije}>Obrisi sve</Button>
                </Col>
            </Row>
            {props.operacije.map(element => {
                return (
                    <p>{element}</p>
                )
            })}
        </Container>
    )
}
