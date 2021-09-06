import React, { useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap';
import Dugme from './Dugme'
interface Props {
    dodajOperaciju: (operacija: string) => void;
}
export default function Calculator(props: Props) {
    const [prviBroj, setPrviBroj] = useState(0);
    const [drugiBroj, setDrugiBroj] = useState(0);
    const [aktivanPrvi, setAktivanPrvi] = useState(true);
    const [prikaziDrugi, setPrikaziDrugi] = useState(false)
    const [operacija, setOperacija] = useState('');
    const klikNaBroj = (broj: number) => {
        if (aktivanPrvi) {
            setPrviBroj(prev => {
                return prev * 10 + broj;
            })
        } else {
            setPrikaziDrugi(true);
            setDrugiBroj(prev => {
                return prev * 10 + broj;
            })
        }
    }
    const izvrsiOperaciju = () => {
        if (operacija === '') {
            return;
        }
        let broj = 0;
        if (operacija === '+')
            broj = prviBroj + drugiBroj;
        if (operacija === '-')
            broj = prviBroj - drugiBroj;
        if (operacija === 'x')
            broj = prviBroj * drugiBroj;
        if (operacija === '/') {
            if (drugiBroj == 0) {
                alert('Deljenje nulom nije dozvoljeno');
                return;
            } else {
                broj = prviBroj / drugiBroj;
            }

        }


        props.dodajOperaciju(prviBroj + ' ' + operacija + ' ' + drugiBroj + ' = ' + broj);

        setPrviBroj(prev => {
            if (operacija === '') {
                return prev;
            }
            let broj = 0;
            if (operacija === '+')
                broj = prev + drugiBroj;
            if (operacija === '-')
                broj = prev - drugiBroj;
            if (operacija === 'x')
                broj = prev * drugiBroj;
            if (operacija === '/')
                broj = prev / drugiBroj;
            return broj;
        })
        setPrikaziDrugi(false);
        setDrugiBroj(0);
        setOperacija('');
        setAktivanPrvi(true);
    }
    const postaviOperaciju = (oper: string) => {
        if (!aktivanPrvi) {
            izvrsiOperaciju();
        }
        setOperacija(oper);
        setAktivanPrvi(false);
    }
    return (
        <Container fluid>
            <Form.Control type='text' className='text-right' disabled value={!prikaziDrugi ? prviBroj : drugiBroj} />
            <Table bordered>
                <tbody>
                    <tr>
                        {
                            [7, 8, 9].map(element => {
                                return <Dugme text={element + ''} onClick={() => { klikNaBroj(element) }} />
                            })
                        }
                        <Dugme text='-' onClick={() => { postaviOperaciju('-'); }} />
                        <Dugme text='+' onClick={() => { postaviOperaciju('+'); }} />

                    </tr>
                    <tr>
                        {
                            [4, 5, 6].map(element => {
                                return <Dugme text={element + ''} onClick={() => { klikNaBroj(element) }} />
                            })
                        }
                        <Dugme text='x' onClick={() => { postaviOperaciju('x'); }} />
                        <Dugme text='/' onClick={() => { postaviOperaciju('/'); }} />

                    </tr>
                    <tr>
                        {
                            [1, 2, 3].map(element => {
                                return <Dugme text={element + ''} onClick={() => { klikNaBroj(element) }} />
                            })
                        }
                        <Dugme text='C' onClick={() => {
                            if (aktivanPrvi) {
                                setPrviBroj(0);
                            } else {
                                setDrugiBroj(0);
                            }
                        }} />
                        <Dugme text='CE' onClick={() => {
                            setPrviBroj(0);
                            setDrugiBroj(0);
                            setOperacija('');
                        }} />

                    </tr>
                    <tr>

                        <Dugme text='+/-' onClick={() => {
                            if (aktivanPrvi) {
                                setPrviBroj(prev => 0 - prev);
                            } else {
                                setDrugiBroj(prev => 0 - prev);
                            }
                        }} />

                        <Dugme text='0' onClick={() => { klikNaBroj(0) }} />

                        <Dugme text='' onClick={() => { }} />
                        <Dugme text='=' onClick={izvrsiOperaciju} />


                    </tr>
                </tbody>
            </Table>

        </Container>
    )
}
