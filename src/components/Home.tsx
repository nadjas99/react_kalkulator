import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Calculator from './Calculator'
import NavigationBar from './NavigationBar'
import History from './History';
import Uputstvo from './Uputstvo';
import Prednja from './Prednja';
export default function Home() {
    const [operacije, setOperacije] = useState<string[]>([]);

    const dodajOperaciju = (operacija: string) => {


        setOperacije(prev => {
            return [...prev, operacija];
        })
    }
    const obrisiOperacije = () => {
        setOperacije([]);
    }
    return (
        <Container >

            <NavigationBar />
            <Row>
                <Col xs='4' >
                    <Calculator dodajOperaciju={dodajOperaciju} />
                </Col>
                <Col xs='4' >
                    <Prednja  />
                </Col>
              
            </Row>

        </Container>
    )
}
