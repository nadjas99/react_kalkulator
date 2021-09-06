
import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from './NavigationBar'

export default function Prednja() {
    return (
        <Container  >
           
           
    
            <p>
                Klikom na dugme sa cifrom vrsi se dodavanje na kraj broja koji je prikazan na vrhu.
        </p>
            <p>
                Klikom na dugme +/- izvrsice se promena znaka broja
        </p>
            <p>
                Klikom na dugme = izvrsice se poslednja uneta operacija izmedju poslednja 2 uneta broja
        </p>
            <p>
                Klikom na dugme sa nekom od ostalih matematickih operacija postavice se trenutna operacija i korisnik ce moci da unese drugi broj.
                Ukoliko je operacija vec postavljena ona ce biti izvrsena a nova operacija ce se odnositi na rezultat prethodne i broj koji ce biti nakdnadno unesen.
        </p>
            <p>
                Klikom na dugme C vrednost tekuceg broja se postavlja na 0, a na CE vrsi se resetovanje oba broja kao i operacije.
        </p>
        
        </Container>
    )
}