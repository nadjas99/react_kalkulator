import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <Navbar bg="warning" expand="lg">
             <Link to='/uputstvo'>
            
            <Navbar.Brand >
                   Pocetna
            </Navbar.Brand>
            </Link>
             
           
            
            <Link to='/'>
            
            <Navbar.Brand >
                    Kalkulator
            </Navbar.Brand>
            </Link>
            
           
        </Navbar>
    )
}
